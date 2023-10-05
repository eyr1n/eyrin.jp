import { IconCertificate, IconTrophy } from "@tabler/icons-react";
import { ListItem } from "./ListItem";
import { List } from "@mantine/core";
import { Tile } from "./Tile";

export function Results() {
  return (
    <Tile title="資格・実績">
      <List spacing="md">
        <ListItem
          title="実用英語技能検定 2級"
          text="2018.03"
          icon={<IconCertificate />}
          color="green"
        />
        <ListItem
          title="NHK学生ロボコン2022 優勝"
          text="2022.06"
          icon={<IconTrophy />}
          color="yellow"
        />
        <ListItem
          title="NHK学生ロボコン2023 優勝"
          text="2023.06"
          icon={<IconTrophy />}
          color="yellow"
        />
        <ListItem
          title="ABU Robocon 2023 優勝"
          text="2023.08"
          icon={<IconTrophy />}
          color="yellow"
        />
        <ListItem
          title="TOEIC L&R IP 830点"
          text="2023.10"
          icon={<IconCertificate />}
          color="green"
        />
      </List>
    </Tile>
  );
}
