import { Timeline, Text } from "@mantine/core";
import { Tile } from "./Tile";

export function Career() {
  return (
    <Tile title="経歴">
      <Timeline active={4}>
        <Timeline.Item title="横浜市に生まれる">
          <Text size="sm" mt={4}>
            2002.12
          </Text>
        </Timeline.Item>
        <Timeline.Item title="市立小学校">
          <Text size="sm" mt={4}>
            2009.04 - 2015.03
          </Text>
        </Timeline.Item>
        <Timeline.Item title="市立中学校">
          <Text size="sm" mt={4}>
            2015.04 - 2018.03
          </Text>
        </Timeline.Item>
        <Timeline.Item title="市立高校">
          <Text size="sm" mt={4}>
            2018.04 - 2021.03
          </Text>
        </Timeline.Item>
        <Timeline.Item title="豊橋技術科学大学">
          <Text size="sm" mt={4}>
            2021.04 -
          </Text>
        </Timeline.Item>
      </Timeline>
    </Tile>
  );
}
