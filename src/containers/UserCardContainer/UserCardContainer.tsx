import React from 'react';
import { UserType } from '@/types/Types';
import { Avatar, Text, Card, Container, Button } from '@mantine/core';
import { useAppContext } from '@/pages/appContext';

type UserCardContainerProps = {
  user: UserType;
  setCurrentUser: (user: UserType) => void;
  openModal: () => void;
};

function UserCardContainer({ user, setCurrentUser, openModal }: UserCardContainerProps) {
  const appContext = useAppContext();

  const backgroundColor = appContext?.colorScheme === 'dark' ? 'lime' : 'teal';

  return (
    <Card shadow="sm" padding="md" radius="md" withBorder >
      <Card.Section bg={backgroundColor}>
        <Avatar src={user.picture.large} alt={user.name.title} size="xl" m='auto' my='lg'/>
      </Card.Section>
      <Container px={0} mx={0} pt='md' style={{position: 'relative', display: 'flex', flexDirection: 'column', justifyContent: 'space-between'}} mih="240px">
        <div>
          <Text fw={500} size="lg" style={{textAlign: 'center'}}>
            {user.name.first + ' ' + user.name.last}
          </Text>
          <Text size="md" mt='sm'>
            Age: {user.dob.age}
          </Text>
          <Text size="md">
            Address: {user.location.street.number + ', ' +  user.location.street.name + ', ' + user.location.city + ', ' + user.location.country}
          </Text>
          <Text size="md">
            Email: {user.email}
          </Text>
          <Text size="md">
            Phone: {user.phone}
          </Text>
        </div>
        <Button variant="light" color="blue" mt="md" onClick={()=> { openModal(); setCurrentUser(user);}}>
          Details
        </Button>
      </Container>
    </Card>
  );
}

export default UserCardContainer;