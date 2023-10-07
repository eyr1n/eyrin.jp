import {
  createTheme,
  MantineProvider,
  Container,
  Divider,
  Flex,
  Box,
  Title,
  Group,
  SimpleGrid,
  Center,
  Text,
  Image,
} from "@mantine/core";
import { IconBrandTwitter, IconBrandGithub } from "@tabler/icons-react";
import { Activities } from "./Activities";
import { Career } from "./Career";
import { Profile } from "./Profile";
import { Results } from "./Results";
import { BrandButton } from "./BrandButton";
import { Works } from "./Works";

import icon from "./assets/icon.png";

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
            <Image
              src={icon}
              alt="Icon"
              style={{
                border: "solid 1px var(--mantine-color-default-border)",
                borderRadius: "50%",
              }}
            />
          </Box>
          <Box>
            <Title mb="xs">りｎ</Title>
            <Group gap="xs">
              <BrandButton
                icon={<IconBrandTwitter />}
                color="#1da1f2"
                href="https://twitter.com/eyr1n"
              />
              <BrandButton
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
