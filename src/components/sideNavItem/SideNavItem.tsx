import styles from "./styles.module.css";

interface SideNavItemProps {
  title: string;
  icon: React.ElementType;
  active?: boolean;
  setActiveItemId: () => void;
}

export const SideNavItem = ({
  title,
  icon: Icon,
  active,
  setActiveItemId,
}: SideNavItemProps) => {
  return (
    <div
      className={`${styles.sideNavItem} ${
        active ? styles.activeSideNavItem : null
      }`}
      onClick={setActiveItemId}
    >
      <Icon />
      <p>{title}</p>
    </div>
  );
};
