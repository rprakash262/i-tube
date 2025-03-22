import { useState } from "react";

import styles from "./styles.module.css";
import { SideNavItemType } from "../../../interfaces/sidebarNavItems";
// import { sideNavItems } from "../../../data/sidebarNavItem";
import { SideNavItem } from "../../sideNavItem/SideNavItem";
import { NewPlaylistBtn } from "../../sideNavItem/NewPlaylistBtn";
import { useNavigate } from "react-router";

export const Sidebar = ({
  sidebarWidth,
  sideNavItems,
}: {
  sidebarWidth: number;
  sideNavItems: SideNavItemType[];
}) => {
  const [activeItemId, setActiveItemId] = useState<SideNavItemType["id"]>(1);
  const navigate = useNavigate();

  const changeRoute = (navItem: SideNavItemType) => {
    setActiveItemId(navItem.id);
    navigate(navItem.route);
  };

  return (
    <aside
      id={styles.sidebar}
      style={{
        width: `${sidebarWidth}px`,
        padding: sidebarWidth === 0 ? 0 : "5px",
        borderRight: sidebarWidth === 0 ? "none" : "1px solid var(--border)",
      }}
    >
      {sideNavItems.map((navItem) => (
        <SideNavItem
          key={navItem.id}
          title={navItem.title}
          icon={navItem.icon}
          active={navItem.id == activeItemId}
          setActiveItemId={() => changeRoute(navItem)}
        />
      ))}
      <NewPlaylistBtn />
    </aside>
  );
};
