import { IconHome, IconLibrary, IconMusicSearch } from "@tabler/icons-react";

import { SideNavItemType } from "../interfaces/sidebarNavItems";

export const mainNavItems: SideNavItemType[] = [
  {
    id: 1,
    title: "Home",
    icon: IconHome,
    route: "/",
  },
  {
    id: 2,
    title: "Explore",
    icon: IconMusicSearch,
    route: "/explore",
  },
  {
    id: 3,
    title: "Library",
    icon: IconLibrary,
    route: "/library",
  },
];

export const adminNavItems: SideNavItemType[] = [
  {
    id: 1,
    title: "Audios",
    icon: IconHome,
    route: "/admin/audios",
  },
  {
    id: 2,
    title: "Videos",
    icon: IconMusicSearch,
    route: "/admin/videos",
  },
];
