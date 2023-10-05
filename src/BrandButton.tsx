import { ActionIcon, DefaultMantineColor } from "@mantine/core";

interface Props {
  href: string;
  icon: React.ReactNode;
  color: DefaultMantineColor;
}

export function BrandButton({ href, icon, color }: Props) {
  return (
    <ActionIcon
      size="xl"
      variant="light"
      color={color}
      component="a"
      href={href}
    >
      {icon}
    </ActionIcon>
  );
}
