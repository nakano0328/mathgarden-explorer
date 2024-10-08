import { HomeIcon } from "lucide-react";
import Index from "./pages/Index";
import { ReactElement } from "react";

interface NavItem {
  title: string;
  to: string;
  icon: ReactElement;
  page: ReactElement;
}

export const navItems: NavItem[] = [
  {
    title: "Home",
    to: "/",
    icon: <HomeIcon className="h-4 w-4" />,
    page: <Index />,
  },
];