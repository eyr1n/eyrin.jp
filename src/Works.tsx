import {
  Anchor,
  AspectRatio,
  Card,
  Group,
  SimpleGrid,
  Stack,
  Text,
  Title,
  Image,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandApple,
  IconBrandAndroid,
} from "@tabler/icons-react";
import { BrandButton } from "./BrandButton";

import tutility from "./assets/tutility.jpg";
import iolink from "./assets/iolink.jpg";

interface WorkCardProps {
  title: string;
  src: string;
  alt: string;
}

function WorkCard({
  title,
  src,
  alt,
  children,
}: React.PropsWithChildren<WorkCardProps>) {
  return (
    <Card radius="md" shadow="sm" withBorder>
      <Card.Section>
        <AspectRatio ratio={16 / 9}>
          <Image src={src} alt={alt} />
        </AspectRatio>
      </Card.Section>
      <Title order={4} my="sm">
        {title}
      </Title>
      <Stack h="100%" justify="space-between">
        {children}
      </Stack>
    </Card>
  );
}

export function Works() {
  return (
    <SimpleGrid cols={{ base: 1, xs: 2, sm: 3 }}>
      <WorkCard title="TUTility" src={tutility} alt="TUTility">
        <Text>豊橋技術科学大学の学生向けアプリ</Text>
        <Group gap="xs">
          <BrandButton
            href="https://apps.apple.com/jp/app/tutility/id1624514242"
            icon={<IconBrandApple />}
            color="#007aff"
          />
          <BrandButton
            href="https://play.google.com/store/apps/details?id=me.rinrin.tutility"
            icon={<IconBrandAndroid />}
            color="#3ddc84"
          />
          <BrandButton
            href="https://github.com/tut-iisg/TUTility"
            icon={<IconBrandGithub />}
            color="#171515"
          />
        </Group>
      </WorkCard>
      <WorkCard
        title="stm32h7-iolink-master"
        src={iolink}
        alt="stm32h7-iolink-master"
      >
        <Text>
          STM32を用いたIO-Linkマスタ (基板設計:{" "}
          <Anchor href="https://twitter.com/3dsForest">@3dsForest</Anchor>)
        </Text>
        <Group gap="xs">
          <BrandButton
            href="https://github.com/eyr1n/stm32h7-iolink-master"
            icon={<IconBrandGithub />}
            color="#171515"
          />
        </Group>
      </WorkCard>
    </SimpleGrid>
  );
}
