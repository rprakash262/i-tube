import { useEffect, useState } from "react";
import { IconCaretDown, IconCheck } from "@tabler/icons-react";

import styles from "./style.module.css";
import { Text } from "../text/Text";

type OneDropdownItemType = {
  id: string;
  label: string;
};

type SelectDropdownProps = {
  items: OneDropdownItemType[];
  selected: OneDropdownItemType;
  onChange: (item: OneDropdownItemType) => void;
  disabled?: boolean;
  placeholder?: string;
};

const OneDropdownItem = ({ item, isSelected, selectItem }: any) => {
  return (
    <div
      className={styles.oneDropdownItem}
      style={{
        height: "40px",
        padding: "0 5px",
        cursor: "pointer",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      onClick={selectItem}
    >
      <Text text={item} size="md" style={{ fontSize: "13px" }} />
      {isSelected && <IconCheck size={18} />}
    </div>
  );
};

export const SelectDropdown = ({
  items,
  selected,
  onChange,
  disabled,
  placeholder = "Select item",
}: SelectDropdownProps) => {
  const [showDropdown, setShowDropdown] = useState<boolean>(false);

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

  const selectItem = (item: OneDropdownItemType) => {
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
          border: "1px solid var(--input-border-color)",
          cursor: disabled ? "no-drop" : "pointer",
          padding: "0 5px",
          height: "40px",
          borderRadius: "4px",
          backgroundColor: "var(--input-bg-color)",
        }}
        onClick={disabled ? () => {} : () => setShowDropdown(!showDropdown)}
      >
        {selected?.label ? (
          <Text text={selected?.label} size="md" style={{ fontSize: "13px" }} />
        ) : (
          <Text
            style={{ color: "#747474", fontSize: "13px" }}
            text={placeholder}
            size="md"
          />
        )}
        <IconCaretDown />
      </div>
      {showDropdown && (
        <div
          style={{
            position: "absolute",
            top: "50px",
            backgroundColor: "var(--input-bg-color)",
            width: "100%",
            border: "1px solid var(--input-border-color)",
            borderRadius: "4px",
            maxHeight: "140px",
            overflowY: "scroll",
            zIndex: 1,
          }}
        >
          {items.map((item: OneDropdownItemType) => (
            <OneDropdownItem
              key={item.id}
              item={item.label}
              isSelected={selected?.id === item?.id}
              selectItem={() => selectItem(item)}
            />
          ))}
        </div>
      )}
    </div>
  );
};
