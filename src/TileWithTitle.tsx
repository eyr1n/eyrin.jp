import { Card, Center, Title } from "@mantine/core";

interface TileWithTitleProps {
  title: string;
}

export function TileWithTitle({
  title,
  children,
}: React.PropsWithChildren<TileWithTitleProps>) {
  return (
    <Card radius="md" withBorder>
      <Center>
        <Title order={3} mb="lg">
          {title}
        </Title>
      </Center>
      <Center>{children}</Center>
    </Card>
  );
}
