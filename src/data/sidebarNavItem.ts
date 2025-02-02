import { IconHome, IconLibrary, IconMusicSearch } from "@tabler/icons-react";

import { SideNavItemType } from "../interfaces/sidebarNavItems";

export const sideNavItems: SideNavItemType[] = [
  {
    id: 1,
    title: "Home",
    icon: IconHome,
  },
  {
    id: 2,
    title: "Explore",
    icon: IconMusicSearch,
  },
  {
    id: 3,
    title: "Library",
    icon: IconLibrary,
  },
];
