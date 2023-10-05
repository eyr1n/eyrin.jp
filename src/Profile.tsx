import { Stack, Box, Text } from "@mantine/core";
import { TileWithTitle } from "./TileWithTitle";

export function Profile() {
  return (
    <TileWithTitle title="プロフィール">
      <Stack gap="md">
        <Box>
          <Text size="sm" mb={4}>
            所属
          </Text>
          <Text fw={500}>豊橋技術科学大学 情報・知能工学課程</Text>
        </Box>
        <Box>
          <Text size="sm" mb={4}>
            学年
          </Text>
          <Text fw={500}>学部3年</Text>
        </Box>
        <Box>
          <Text size="sm" mb={4}>
            すきな技術
          </Text>
          <Text fw={500}>C++, Rust, Kotlin, React, Vue, ROS 2, ...</Text>
        </Box>
        <Box>
          <Text size="sm" mb={4}>
            すきなこと・もの
          </Text>
          <Text fw={500}>ロードバイク, 音楽, 散歩, ...</Text>
        </Box>
      </Stack>
    </TileWithTitle>
  );
}
