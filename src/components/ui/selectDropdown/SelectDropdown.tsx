import { IconCaretDown, IconCheck } from "@tabler/icons-react";
import { useEffect, useState } from "react";

import styles from "./style.module.css";

const OneDropdownItem = ({ item, isSelected, selectItem }: any) => {
  return (
    <div
      className={styles.oneDropdownItem}
      style={{
        height: "30px",
        padding: "0 5px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onClick={selectItem}
    >
      <p>{item}</p>
      {isSelected && <IconCheck size={18} />}
    </div>
  );
};

export const SelectDropdown = ({
  items,
  selected,
  onChange,
  disabled,
}: any) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [selectedItem, setSelectedItem] = useState<string>(selected);
  const [dropdownItems, setDropdownItems] = useState<string[]>(items);

  useEffect(() => {
    document.addEventListener("keyup", (e) => {
      if (e.key === "Escape") {
        setShowDropdown(false);
      }
    });

    return () => {
      document.removeEventListener("keyup", (e) => {
        if (e.key === "Escape") {
          setShowDropdown(false);
        }
      });
    };
  });

  const selectItem = (item: string) => {
    setSelectedItem(item);
    onChange(item);
    setShowDropdown(false);
  };

  return (
    <div style={{ position: "relative" }} className="customDropdown">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          border: "1px solid var(--border-color)",
          cursor: disabled ? "no-drop" : "pointer",
          padding: "0 5px",
          height: "30px",
          borderRadius: "4px",
        }}
        onClick={disabled ? () => {} : () => setShowDropdown(!showDropdown)}
      >
        <p>{selectedItem}</p>
        <IconCaretDown />
      </div>
      {showDropdown && (
        <div
          style={{
            position: "absolute",
            top: "35px",
            backgroundColor: "var(--background-color)",
            width: "100%",
            border: "1px solid var(--border-color)",
            borderRadius: "4px",
            maxHeight: "140px",
            overflowY: "scroll",
          }}
        >
          {dropdownItems.map((item: string) => (
            <OneDropdownItem
              key={item}
              item={item}
              isSelected={selectedItem === item}
              selectItem={() => selectItem(item)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
