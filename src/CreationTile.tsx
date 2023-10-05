import {
  AspectRatio,
  Box,
  Card,
  Stack,
  Title,
  Image,
  Group,
} from "@mantine/core";

interface Props {
  src: string;
  alt: string;
  title: string;
  brandBtns: React.ReactNode;
}

export function CreationTile({
  src,
  alt,
  title,
  brandBtns,
  children,
}: React.PropsWithChildren<Props>) {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section>
        <AspectRatio ratio={16 / 9}>
          <Image src={src} alt={alt} />
        </AspectRatio>
      </Card.Section>
      <Stack justify="space-between" h="100%">
        <Box>
          <Title order={4} my="xs">
            {title}
          </Title>
          {children}
        </Box>
        <Group gap="xs">{brandBtns}</Group>
      </Stack>
    </Card>
  );
}
