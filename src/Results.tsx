import { IconCertificate, IconTrophy } from "@tabler/icons-react";
import { ListItemWithIcon } from "./ListItemWithIcon";
import { List } from "@mantine/core";
import { TileWithTitle } from "./TileWithTitle";

export function Results() {
  return (
    <TileWithTitle title="資格・実績">
      <List spacing="md">
        <ListItemWithIcon
          title="実用英語技能検定 2級"
          text="2018.03"
          icon={<IconCertificate />}
          color="green"
        />
        <ListItemWithIcon
          title="NHK学生ロボコン2022 優勝"
          text="2022.06"
          icon={<IconTrophy />}
          color="yellow"
        />
        <ListItemWithIcon
          title="NHK学生ロボコン2023 優勝"
          text="2023.06"
          icon={<IconTrophy />}
          color="yellow"
        />
        <ListItemWithIcon
          title="ABU Robocon 2023 優勝"
          text="2023.08"
          icon={<IconTrophy />}
          color="yellow"
        />
        <ListItemWithIcon
          title="TOEIC L&R IP 830点"
          text="2023.10"
          icon={<IconCertificate />}
          color="green"
        />
        <ListItemWithIcon
          title="TOEIC L&R 715点 (悲)"
          text="2024.01"
          icon={<IconCertificate />}
          color="green"
        />
      </List>
    </TileWithTitle>
  );
}
