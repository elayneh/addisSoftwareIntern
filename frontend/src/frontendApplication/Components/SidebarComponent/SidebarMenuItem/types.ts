import { IconType } from "react-icons";
export interface SideBarMenuItemProps {
  icon: IconType;
  label: string;
  to: string;
  iconSize: number;
  showLabel?: boolean;
  sideBarCount?: number;
}
