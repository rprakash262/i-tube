import { IconMenu2 } from "@tabler/icons-react";
import classes from "./styles.module.css";
import { Button } from "../../ui/button/Button";
import { useNavigate } from "react-router";

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header = ({ toggleSidebar }: HeaderProps) => {
  const navigate = useNavigate();

  return (
    <header id={classes.header}>
      <div>
        <IconMenu2 color="#6EACDA" cursor="pointer" onClick={toggleSidebar} />
        <h2>I-Tube</h2>
      </div>
      <div style={{ display: "flex", flexDirection: "row" }}>
        <Button
          title="Main"
          onClick={() => navigate("/")}
          btnType="primary"
          style={{ marginRight: "10px" }}
        />
        <Button
          title="Admin"
          onClick={() => navigate("/admin/industries")}
          btnType="primary"
          style={{ marginRight: "10px" }}
        />
      </div>
    </header>
  );
};
