import { IconEdit, IconTrash } from "@tabler/icons-react";

import { Text } from "../ui/text/Text";

export const SongItemCard = ({
  item,
  isAdmin,
  onClick,
  onDeleteClick,
  onEditClick,
  style,
}: any) => {
  return (
    <div
      onClick={onClick}
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        height: "70px",
        cursor: "pointer",
        borderRadius: "4px",
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
          src={item.thumbnail}
          style={{ width: "100%", height: "100%", borderRadius: "4px" }}
        />
      </div>
      <div style={{ paddingLeft: "10px" }}>
        <Text
          text={item.title}
          size="md"
          style={{ fontSize: "14px", fontWeight: "600" }}
        />
        <Text text={item.singer} size="md" style={{ fontSize: "12px" }} />
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
