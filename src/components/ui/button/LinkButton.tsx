import styles from "./style.module.css";

interface ButtonProps {
  title?: string;
  style?: any;
  disabled?: boolean;
  onClick: () => void;
}

export const LinkButton = ({
  title,
  style,
  disabled,
  onClick,
}: ButtonProps) => {
  return (
    <p
      className={styles.linkBtn}
      onClick={disabled ? () => {} : onClick}
      style={{
        fontSize: "14px",
        fontWeight: "600",
        cursor: disabled ? "no-drop" : "pointer",
        color: "var(--primary-color)",
        ...style,
      }}
    >
      {title}
    </p>
  );
};
