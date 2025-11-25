import type { IconType } from "react-icons";

export type SideBarItem = {
  id: string;
  label: string;
  icon?: IconType;
  onClick?: () => void;
};

export interface SideBarProps {
  username: string;
  items: SideBarItem[];
  className?: string;
}
