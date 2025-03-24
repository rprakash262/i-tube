import {
  IconBrandTiktok,
  IconCategory,
  IconHeadphones,
  IconHome,
  IconLibrary,
  IconMusicSearch,
  IconPlaylist,
  IconUsers,
  IconVideo,
} from "@tabler/icons-react";

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
    title: "Industries",
    icon: IconCategory,
    route: "/admin/industries",
  },
  {
    id: 2,
    title: "Genre",
    icon: IconBrandTiktok,
    route: "/admin/genre",
  },
  {
    id: 3,
    title: "Singers",
    icon: IconUsers,
    route: "/admin/singers",
  },
  {
    id: 4,
    title: "Audios",
    icon: IconHeadphones,
    route: "/admin/audios",
  },
  {
    id: 5,
    title: "Videos",
    icon: IconVideo,
    route: "/admin/videos",
  },
  {
    id: 6,
    title: "Playlists",
    icon: IconPlaylist,
    route: "/admin/playlists",
  },
];
