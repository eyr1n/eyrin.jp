import { ActionIcon, DefaultMantineColor } from "@mantine/core";

interface IconButtonProps {
  href: string;
  icon: React.ReactNode;
  color?: DefaultMantineColor;
}

export function IconButton({ href, icon, color }: IconButtonProps) {
  return (
    <ActionIcon
      size="xl"
      variant="light"
      color={color}
      component="a"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </ActionIcon>
  );
}
