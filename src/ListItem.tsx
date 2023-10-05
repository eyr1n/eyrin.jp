import { List, ThemeIcon, Text, DefaultMantineColor } from "@mantine/core";

interface Props {
  title: string;
  text: string;
  icon: React.ReactNode;
  color: DefaultMantineColor;
}

export function ListItem({ title, text, icon, color }: Props) {
  return (
    <List.Item
      icon={
        <ThemeIcon color={color} radius="xl">
          {icon}
        </ThemeIcon>
      }
    >
      <Text fw={500}>{title}</Text>
      <Text size="sm" mt={4}>
        {text}
      </Text>
    </List.Item>
  );
}
