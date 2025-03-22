import styles from "./styles.module.css";

interface ActionButtonProps {
  style?: any;
  icon: any;
  iconSize?: number;
  title?: string;
  onClick: () => void;
}

export const ActionButton = ({
  style,
  icon: Icon,
  iconSize,
  title,
  onClick,
}: ActionButtonProps) => {
  return (
    <span
      onClick={onClick}
      className={styles.actionButton}
      style={{ ...style }}
      title={title}
    >
      <Icon size={iconSize ?? 20} className={styles.actionButtonIcon} />
    </span>
  );
};
