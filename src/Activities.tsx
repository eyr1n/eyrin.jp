import { List } from "@mantine/core";
import { IconRobot, IconBriefcase } from "@tabler/icons-react";
import { TileWithTitle } from "./TileWithTitle";
import { ListItemWithIcon } from "./ListItemWithIcon";

export function Activities() {
  return (
    <TileWithTitle title="活動">
      <List spacing="md">
        <ListItemWithIcon
          title="とよはし☆ロボコンズ"
          text="2021.04 - 2023.08"
          icon={<IconRobot />}
          color="blue"
        />
        <ListItemWithIcon
          title="書店員アルバイト"
          text="2021.09 - 2022.06"
          icon={<IconBriefcase />}
          color="brown"
        />
        <ListItemWithIcon
          title="GIS関連 開発アルバイト"
          text="2022.09 - 2023.05"
          icon={<IconBriefcase />}
          color="brown"
        />
        <ListItemWithIcon
          title="自動運転関連 開発アルバイト"
          text="2023.09 -"
          icon={<IconBriefcase />}
          color="brown"
        />
      </List>
    </TileWithTitle>
  );
}
