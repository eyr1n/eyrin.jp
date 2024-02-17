import {
  Anchor,
  Box,
  Card,
  Center,
  Divider,
  Flex,
  Image,
  Stack,
  Text,
} from "@mantine/core";
import React from "react";
import { useEffect, useState } from "react";

interface SpotifyNowPlaying {
  album: {
    name?: string;
    url?: string;
  };
  artists: {
    name?: string;
    url?: string;
  }[];
  duration_ms?: number;
  images: {
    url: string;
    height: number | null;
    width: number | null;
  }[];
  is_playing?: boolean;
  name?: string;
  progress_ms?: number | null;
  url?: string;
}

export function NowPlaying() {
  const [nowPlaying, setNowPlaying] = useState<SpotifyNowPlaying>();

  const blank1px =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVQYV2P4////fwAJ+wP9BUNFygAAAABJRU5ErkJggg==";

  useEffect(() => {
    fetch("https://nowplaying.eyrin.jp")
      .then((res) => res.json())
      .then(setNowPlaying);
  }, []);

  return (
    <Center>
      <Card radius="md" withBorder p={0}>
        <Flex align="center" direction="row">
          <Box w={80} h={80} style={{ flexShrink: 0 }}>
            <Image
              w="100%"
              h="100%"
              src={
                nowPlaying?.images.sort(
                  (a, b) =>
                    Math.max(b.width ?? 0, b.height ?? 0) -
                    Math.max(a.width ?? 0, a.height ?? 0)
                )[0]?.url ?? blank1px
              }
            />
          </Box>
          <Divider orientation="vertical" />
          <Stack gap={0} justify="space-between" w={160} h={80} p={8}>
            <Anchor
              href={nowPlaying?.url}
              target="_blank"
              rel="noopener noreferrer"
              c="dark"
              size="sm"
              fw={700}
              underline="hover"
              style={{
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              {nowPlaying?.name ?? ""}
            </Anchor>

            <Text
              size="xs"
              style={{
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              💿{" "}
              <Anchor
                href={nowPlaying?.album.url}
                target="_blank"
                rel="noopener noreferrer"
                c="dark"
                underline="hover"
              >
                {nowPlaying?.album.name ?? ""}
              </Anchor>
            </Text>

            <Text
              size="xs"
              style={{
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                overflow: "hidden",
              }}
            >
              👤{" "}
              {nowPlaying?.artists
                .map((artist, i) => (
                  <Anchor
                    href={artist.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    c="dark"
                    underline="hover"
                    key={i}
                  >
                    {artist.name}
                  </Anchor>
                ))
                .reduce(
                  (acc: JSX.Element[], cur, i) =>
                    acc.length === 0
                      ? [cur]
                      : [
                          ...acc,
                          <React.Fragment key={i + ","}>{", "}</React.Fragment>,
                          cur,
                        ],
                  []
                )}
            </Text>
          </Stack>
        </Flex>
      </Card>
    </Center>
  );
}
