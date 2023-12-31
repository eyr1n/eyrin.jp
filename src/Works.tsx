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
  Divider,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandApple,
  IconBrandAndroid,
  IconWorld,
} from "@tabler/icons-react";
import { IconButton } from "./IconButton";

import tutility from "./assets/tutility.jpg";
import iolink from "./assets/iolink.jpg";
import nhk2023Controller from "./assets/nhk2023_controller.webp";
import keitai2048 from "./assets/keitai2048.webp";
import artworkSearch from "./assets/artwork_search.png";

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
        <Divider />
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
      <WorkCard
        title="stm32h7-iolink-master"
        src={iolink}
        alt="stm32h7-iolink-master"
      >
        <Text>
          STM32を用いたIO-Linkマスタ (基板設計:{" "}
          <Anchor
            href="https://twitter.com/3dsForest"
            target="_blank"
            rel="noopener noreferrer"
          >
            @3dsForest
          </Anchor>
          )
        </Text>
        <Group gap="xs">
          <IconButton
            href="https://github.com/eyr1n/stm32h7-iolink-master"
            icon={<IconBrandGithub />}
            color="#171515"
          />
        </Group>
      </WorkCard>
      <WorkCard
        title="NHK学生ロボコン2023 コントローラ"
        src={nhk2023Controller}
        alt="NHK学生ロボコン2023 コントローラ"
      >
        <Text>
          NHK学生ロボコン2023のロボット操縦に用いたAndroid向けコントローラアプリ
        </Text>
      </WorkCard>
      <WorkCard title="TUTility" src={tutility} alt="TUTility">
        <Text>豊橋技術科学大学の学生向け時間割アプリ</Text>
        <Group gap="xs">
          <IconButton
            href="https://apps.apple.com/jp/app/tutility/id1624514242"
            icon={<IconBrandApple />}
            color="#007aff"
          />
          <IconButton
            href="https://play.google.com/store/apps/details?id=me.rinrin.tutility"
            icon={<IconBrandAndroid />}
            color="#3ddc84"
          />
          <IconButton
            href="https://github.com/eyr1n/TUTility"
            icon={<IconBrandGithub />}
            color="#171515"
          />
        </Group>
      </WorkCard>
      <WorkCard title="ジャケ画探すよ" src={artworkSearch} alt="ジャケ画探すよ">
        <Text>CDのジャケット画像をiTunes Storeから探すツール</Text>
        <Group gap="xs">
          <IconButton href="https://artwork.rinrin.me" icon={<IconWorld />} />
          <IconButton
            href="https://github.com/eyr1n/artwork-search"
            icon={<IconBrandGithub />}
            color="#171515"
          />
        </Group>
      </WorkCard>
      <WorkCard title="keitai2048" src={keitai2048} alt="keitai2048">
        <Text>ガラケー(Adobe Flash)にパズルゲーム「2048」を移植</Text>
        <Group gap="xs">
          <IconButton
            href="https://github.com/eyr1n/keitai2048"
            icon={<IconBrandGithub />}
            color="#171515"
          />
        </Group>
      </WorkCard>
    </SimpleGrid>
  );
}
