interface ButtonProps {
  title?: string;
  onClick: () => void;
  rightIcon?: any;
  leftIcon?: any;
  style?: any;
  btnType: "primary" | "secondary";
  disabled?: boolean;
}

export const Button = ({
  title,
  onClick,
  btnType,
  rightIcon: RightIcon,
  leftIcon: LeftIcon,
  style,
  disabled,
}: ButtonProps) => {
  return (
    <button
      onClick={disabled ? () => {} : onClick}
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        border:
          btnType === "primary" ? "none" : "1px solid var(--border-color)",
        padding: "7px 15px",
        borderRadius: "4px",
        fontSize: "14px",
        cursor: disabled ? "no-drop" : "pointer",
        color: btnType === "primary" ? "#ffffff" : "#000000",
        backgroundColor:
          btnType === "primary"
            ? "var(--primary-color)"
            : "var(--secondary-color)",
        ...style,
      }}
    >
      {LeftIcon && <LeftIcon size={18} style={{ marginRight: "5px" }} />}
      {title && <span>{title}</span>}
      {RightIcon && <RightIcon size={18} style={{ marginLeft: "5px" }} />}
    </button>
  );
};
