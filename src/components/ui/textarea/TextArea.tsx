import styles from "./style.module.css";

export const TextArea = ({
  value,
  onChange,
  onKeyUp,
  placeholder,
  autoFocus,
  style,
}: any) => {
  return (
    <textarea
      className={styles.textarea}
      style={{ ...style }}
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
      placeholder={placeholder}
      autoFocus={autoFocus}
      rows={6}
    />
  );
};
