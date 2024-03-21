import {
  Avatar,
  Box,
  Center,
  Container,
  Divider,
  Flex,
  Group,
  MantineProvider,
  SimpleGrid,
  Text,
  Title,
  createTheme,
} from "@mantine/core";
import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";
import { Activities } from "./Activities";
import { Career } from "./Career";
import { IconButton } from "./IconButton";
import { Profile } from "./Profile";
import { Results } from "./Results";
import { Works } from "./Works";

const theme = createTheme({});

export function App() {
  return (
    <MantineProvider theme={theme}>
      <header>
        <Container size="md" py="sm">
          <Text size="xl" fw={700}>
            eyrin.jp
          </Text>
        </Container>
        <Divider />
      </header>
      <Container size="md">
        <Flex my="xl" gap="lg" justify="center" align="center">
          <Box w="40%" maw={200}>
            <Avatar
              style={{
                border: "1px solid var(--mantine-color-default-border)",
              }}
              size="100%"
              src={
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2P4////fwAJ+wP9BUNFygAAAABJRU5ErkJggg=="
              }
              alt="Icon"
            />
          </Box>
          <Box>
            <Title mb="xs">りｎ</Title>
            <Group gap="xs">
              <IconButton
                icon={<IconBrandTwitter />}
                color="#1da1f2"
                href="https://twitter.com/eyr1n"
              />
              <IconButton
                icon={<IconBrandGithub />}
                color="#171515"
                href="https://github.com/eyr1n"
              />
            </Group>
          </Box>
        </Flex>
        <SimpleGrid cols={{ base: 1, sm: 2 }} my="xl" spacing="md">
          <Profile />
          <Career />
          <Activities />
          <Results />
        </SimpleGrid>
        <Divider variant="dashed" />
        <Center>
          <Title order={2} mt="xl" mb="lg">
            制作物
          </Title>
        </Center>
        <Works />
      </Container>
      <footer>
        <Container size="md" py="xl">
          <Text c="dimmed">&copy; 2023 eyrin.jp</Text>
        </Container>
      </footer>
    </MantineProvider>
  );
}
