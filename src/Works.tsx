import { Anchor, SimpleGrid, Text } from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandApple,
  IconBrandAndroid,
} from "@tabler/icons-react";
import { CreationTile } from "./CreationTile";
import { BrandButton } from "./BrandButton";

import tutility from "./assets/tutility.jpg";
import iolink from "./assets/iolink.jpg";

export function Works() {
  return (
    <SimpleGrid cols={{ base: 1, xs: 2, sm: 3 }}>
      <CreationTile
        src={tutility}
        alt=""
        title="TUTility"
        brandBtns={
          <>
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
          </>
        }
      >
        <Text>豊橋技術科学大学の学生向けアプリ</Text>
      </CreationTile>
      <CreationTile
        src={iolink}
        alt=""
        title="stm32h7-iolink-master"
        brandBtns={
          <BrandButton
            href="https://github.com/eyr1n/stm32h7-iolink-master"
            icon={<IconBrandGithub />}
            color="#171515"
          />
        }
      >
        <Text>
          STM32を用いたIO-Linkマスタ (基板設計:{" "}
          <Anchor href="https://twitter.com/3dsForest">@3dsForest</Anchor>)
        </Text>
      </CreationTile>
    </SimpleGrid>
  );
}
