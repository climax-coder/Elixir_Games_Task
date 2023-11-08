import React, { useEffect, useRef, useState } from 'react';
import { Container, Title, Flex, Modal, Grid, Skeleton } from '@mantine/core';
import { MultiSelectorBar } from '@/components/MultiSelectorBar/MultiSelectorBar';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { useRecoilState } from 'recoil';
import { userListState, pageState, nationalityState, searchFilterState } from '@/store/users.atom';
import { useQuery } from 'react-query';
import { UserType } from '@/types/Types';
import { CountryList } from '@/constants/AppConstants';
import { AlertMessage } from '@/components/AlertMessage';
import UserCardContainer from '../UserCardContainer/UserCardContainer';
import UserModalContainer from '../UserModalContainer/UserModalContainer';
import { useAppContext } from '@/context/appContext';
import { useDisclosure } from '@mantine/hooks';
import classes from './UserListContainer.module.css';

type RenderUsersListProps = {
  userList: UserType[];
  searchFilter: string;
  setCurrentUser: (user: UserType) => void;
  openModal: () => void;
};

function RenderUsersList({ userList, searchFilter, setCurrentUser, openModal }: RenderUsersListProps) {
  const filteredUserList = userList.filter((user) =>
    user.name.first.toLowerCase().includes(searchFilter.toLowerCase()) ||
    user.name.last.toLowerCase().includes(searchFilter.toLowerCase())
  );

  if (filteredUserList.length === 0) {
    return  (
      <AlertMessage title="Not found" message="No users match the search criteria." />
    )
  }

  return (
    <Grid>
    {
      filteredUserList.map((user, index) => 
        <Grid.Col span={{ sm: 6, lg: 4, xl: 3}} key={index}>
          <UserCardContainer key={index} user={user} setCurrentUser={setCurrentUser} openModal={openModal}/>
        </Grid.Col>
      )
    }
   </Grid>
  );
}

function UsersListContainer() {
  const [userList, setUserList] = useRecoilState<UserType[]>(userListState);
  const [selectedNationalities, setSelectedNationalities] = useRecoilState<string[]>(nationalityState);
  const [searchFilter, setSearchFilter] = useRecoilState<string>(searchFilterState);
  const [currentPage, setCurrentPage] = useRecoilState<number>(pageState);
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const [isFetching, setIsFetching] = React.useState(false);
  const appContext = useAppContext();
  const items = Array.from({length: 12}, () => '');
  const [opened, { open, close }] = useDisclosure(false);
  const [currentUser, setCurrentUser] = useState<UserType>();

  const backgroundColor = appContext?.colorScheme === 'dark' ? 'gray' : 'white';

  const { data, isLoading, isError, error } = useQuery(['users', currentPage, selectedNationalities], async () => {
    const response = await fetch(
      `https://randomuser.me/api/?page=${currentPage}&results=30&nat=${selectedNationalities.join(',')}`
    );
    if (!response.ok) {
      throw new Error('Network request failed');
    }
    return response.json();
  });

  useEffect(() => {
    setCurrentPage(1);
    setUserList([]);
  }, [selectedNationalities]);

  useEffect(() => {
    if (data) {
      setUserList((prevUserList) => [...prevUserList, ...data.results as UserType[]]);
    }
  }, [data]);

  const handleScroll = () => {
    if (!isFetching &&
      scrollContainerRef?.current &&
      scrollContainerRef.current.scrollTop + scrollContainerRef.current.clientHeight >=
      scrollContainerRef.current.scrollHeight
    ) {
      setIsFetching(true);
      setCurrentPage((prevPage) => {
        setIsFetching(false);
        return prevPage + 1;
      });
    } 
  };

  return (
    <>
    <Container fluid pt='md' bg={backgroundColor}>
      <Flex
        gap="md"
        justify="space-between"
        align="center"
        direction="row"
        wrap="wrap"
        m="md"
      >
        <SearchBar value={searchFilter} setValue={setSearchFilter} />
        <MultiSelectorBar 
          data={CountryList} 
          value={selectedNationalities} 
          setValue={setSelectedNationalities}
          placeholder={'Select nationalities...'}
        />
      </Flex>
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className={classes.scrollContainer}
      >
        {userList.length > 0 ? (
          <RenderUsersList 
            userList={userList} 
            searchFilter={searchFilter} 
            setCurrentUser={setCurrentUser}
            openModal={open}
          />
        ) : (
          <Grid>
             {
             items.map((item, index) => (
              <Grid.Col span={{ sm: 6, lg: 4, xl: 3}} key={index}>
                <Skeleton key={index} mih={340} radius="md"/>
              </Grid.Col>
          ))}
          </Grid>
        )}
      </div>
    </Container>
    <UserModalContainer opened={opened} closeModal={close} currentUser={currentUser}/>
    </>
  );
}

export default UsersListContainer;