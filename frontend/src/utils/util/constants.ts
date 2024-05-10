import { ISideBarTypes } from "../types";
import { RxDashboard } from "react-icons/rx";
import { FaHome } from "react-icons/fa";

export const DashboardMenu: ISideBarTypes[] = [
  {
    label: "Songs",
    to: "/songlist",
    icon: FaHome,
  },
  {
    label: "Dashboard",
    to: "/dashboard",
    icon: RxDashboard,
  },
];
