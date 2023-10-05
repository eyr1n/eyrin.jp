import { Paper, Center, Title } from "@mantine/core";

interface Props {
  title: string;
}

export function Tile({ title, children }: React.PropsWithChildren<Props>) {
  return (
    <Paper radius="md" p="md" withBorder>
      <Center>
        <Title order={3} mb="lg">
          {title}
        </Title>
      </Center>
      <Center>{children}</Center>
    </Paper>
  );
}
