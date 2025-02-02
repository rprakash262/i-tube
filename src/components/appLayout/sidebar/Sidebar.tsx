import { useState } from "react";

import styles from "./styles.module.css";
import { SideNavItemType } from "../../../interfaces/sidebarNavItems";
import { sideNavItems } from "../../../data/sidebarNavItem";
import { SideNavItem } from "../../sideNavItem/SideNavItem";
import { NewPlaylistBtn } from "../../sideNavItem/NewPlaylistBtn";

export const Sidebar = () => {
  const [activeItemId, setActiveItemId] = useState<SideNavItemType["id"]>(1);

  return (
    <aside id={styles.sidebar}>
      {sideNavItems.map((navItem) => (
        <SideNavItem
          title={navItem.title}
          icon={navItem.icon}
          active={navItem.id == activeItemId}
          setActiveItemId={() => setActiveItemId(navItem.id)}
        />
      ))}
      <NewPlaylistBtn />
    </aside>
  );
};
