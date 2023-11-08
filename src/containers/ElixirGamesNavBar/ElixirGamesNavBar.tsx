import { Container, Flex, Image } from '@mantine/core';
import { ColorSchemeToggle } from '@/components/ColorSchemeToggle/ColorSchemeToggle';

function ElixirGamesNavBar() {
  return (
    <Container fluid h={80} bg="var(--mantine-color-blue-light)">
      <Flex
        mih={80}
        gap="md"
        justify="space-between"
        align="center"
        direction="row"
        wrap="wrap"
      >
        <Image 
          radius="md"
          h={60}
          src="./logo.png"
        />
        <ColorSchemeToggle />
      </Flex>
    </Container>
  );
}

export default ElixirGamesNavBar;