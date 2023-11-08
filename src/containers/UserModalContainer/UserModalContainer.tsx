import React from 'react';
import { Modal, Flex, Image, Text, Title, Grid } from '@mantine/core';
import { UserType } from '@/types/Types';
import { FormatDate } from '@/utils/Date';

type UserModalContainerProps = {
  opened: boolean;
  closeModal: () => void;
  currentUser: UserType | undefined;
};

function UserModalContainer({ opened, closeModal, currentUser }: UserModalContainerProps) {
  return (
    <>
      <Modal opened={opened} onClose={closeModal} yOffset="10vh" size="80%">
        {currentUser && (
          <Grid gutter={{ xs: 'md', md: 'xl' }}>
            <Grid.Col span={{ md: 6 }}>
              <Image
                radius="lg"
                h={{ md: 600}}
                src={currentUser.picture.large}
              />
            </Grid.Col>
            <Grid.Col span={{ md: 6 }}>
              <Title order={2} pt='md'>{currentUser.name.title + '.  ' + currentUser.name.first + ' ' + currentUser.name.last}</Title>
              <Text size='xl' mt='xl' tt="capitalize">
                Gender: {currentUser.gender}
              </Text>
              <Text size="xl">
                Age: {currentUser.dob.age}
              </Text>
              <Text size='xl'>
                Birth of Date: {FormatDate(currentUser.dob.date)}
              </Text>
              <Text size="xl">
                Address: {currentUser.location.street.number + ', ' +  currentUser.location.street.name + ', ' + currentUser.location.city + ', ' + currentUser.location.country}
              </Text>
              <Text size="xl">
                Email: {currentUser.email}
              </Text>
              <Text size="xl">
                Phone: {currentUser.phone}
              </Text>
              <Text size="xl">
                Nationality: {currentUser.nat}
              </Text>
            </Grid.Col>
          </Grid>
            
        )}
      </Modal>
    </>
  );
}

export default UserModalContainer;
