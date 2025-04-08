import { IconEdit, IconTrash } from "@tabler/icons-react";

import styles from "./style.module.css";
import { Text } from "../ui/text/Text";

export const SongItemCard = ({
  title,
  thumbnail,
  singer,
  isAdmin,
  onClick,
  onDeleteClick,
  onEditClick,
  style,
}: any) => {
  return (
    <div
      onClick={onClick}
      className={styles.songItemCard}
      style={{
        // border: "1px solid var(--border-color)",
        ...style,
      }}
    >
      <div
        style={{
          width: "70px",
          height: "70px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={thumbnail}
          style={{ width: "100%", height: "100%", borderRadius: "4px" }}
        />
      </div>
      <div style={{ paddingLeft: "10px" }}>
        <Text
          text={title}
          size="md"
          style={{ fontSize: "14px", fontWeight: "600" }}
        />
        <Text text={singer} size="md" style={{ fontSize: "12px" }} />
        {/* <Text text={item.visits} size="sm" /> */}
        {isAdmin && (
          <div style={{ marginTop: "5px" }}>
            <IconTrash onClick={onDeleteClick} />
            <IconEdit onClick={onEditClick} style={{ marginLeft: "10px" }} />
          </div>
        )}
      </div>
    </div>
  );
};
