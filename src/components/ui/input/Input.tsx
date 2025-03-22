import styles from "./style.module.css";

export const Input = ({
  value,
  onChange,
  onKeyUp,
  placeholder,
  autoFocus,
  state,
  type,
  style,
}: any) => {
  return (
    <input
      className={styles.input}
      style={{ ...style, 
        // borderColor: state === "error" ? "red" : "unset" 
      }}
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
      placeholder={placeholder}
      autoFocus={autoFocus}
      type={type ?? "text"}
    />
  );
};
