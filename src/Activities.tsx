import { List } from "@mantine/core";
import { IconRobot, IconBriefcase } from "@tabler/icons-react";
import { Tile } from "./Tile";
import { ListItem } from "./ListItem";

export function Activities() {
  return (
    <Tile title="活動">
      <List spacing="md">
        <ListItem
          title="とよはし☆ロボコンズ (大学公認団体)"
          text="2021.04 - 2023.08"
          icon={<IconRobot />}
          color="blue"
        />
        <ListItem
          title="書店員アルバイト"
          text="2021.09 - 2022.06"
          icon={<IconBriefcase />}
          color="brown"
        />
        <ListItem
          title="GIS関連 開発アルバイト"
          text="2022.09 - 2023.05"
          icon={<IconBriefcase />}
          color="brown"
        />
        <ListItem
          title="自動運転関連 開発アルバイト"
          text="2023.09 -"
          icon={<IconBriefcase />}
          color="brown"
        />
      </List>
    </Tile>
  );
}
