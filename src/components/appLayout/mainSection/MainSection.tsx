import { ScrollView } from "../../scrollView/ScrollView";
import styles from "./styles.module.css";

export const MainSection = ({ children }: any) => {
  return (
    <section id={styles.mainSection}>
      <ScrollView height={"calc(100vh - 64px)"}>{children}</ScrollView>
    </section>
  );
};
