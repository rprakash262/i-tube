import styles from "./styles.module.css";

export const ScrollView = ({ children, height }: any) => {
  return (
    <div id={styles.scrollView} style={{ height: height }}>
      {children}
    </div>
  );
};
