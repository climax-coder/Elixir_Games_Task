import React from 'react';
import { Affix, Container, Flex, Text } from '@mantine/core';

function ElixirGamesFooter() {
  return (
    <Affix position={{ bottom: 0, right: 0}} style={{ width: '100%' }}>
      <Container fluid h={50} bg="var(--mantine-color-dark-filled)">
        <Flex
          mih={50}
          gap="md"
          justify="center"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Text fw={500}>© Elixir Games {new Date().getFullYear()}</Text>
        </Flex>
      </Container>
    </Affix>
  )
}

export default ElixirGamesFooter;