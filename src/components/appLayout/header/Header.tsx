import { IconMenu2 } from "@tabler/icons-react";
import classes from "./styles.module.css";

export const Header = () => {
  return (
    <header id={classes.header}>
      <div>
        <IconMenu2 color="#6EACDA" cursor="pointer" />
        <h2>I-Tube</h2>
      </div>
      <div>right</div>
    </header>
  );
};
