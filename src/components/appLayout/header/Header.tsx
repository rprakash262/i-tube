import { IconMenu2 } from "@tabler/icons-react";
import classes from "./styles.module.css";

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header = ({ toggleSidebar }: HeaderProps) => {
  return (
    <header id={classes.header}>
      <div>
        <IconMenu2 color="#6EACDA" cursor="pointer" onClick={toggleSidebar} />
        <h2>I-Tube</h2>
      </div>
      <div>right</div>
    </header>
  );
};
