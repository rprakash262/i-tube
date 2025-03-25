import { IconEdit, IconTrash } from "@tabler/icons-react";

import { Text } from "../ui/text/Text";

export const PlaylistItemCard = ({
  item,
  isAdmin,
  onEditClick,
  onDeleteClick,
  style,
}: any) => {
  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        borderRadius: "4px",
        width: "170px",
        ...style,
      }}
    >
      <div
        style={{
          width: "170px",
          height: "170px",
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
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginTop: "5px",
        }}
      >
        <Text
          text={item.title}
          size="md"
          style={{ fontSize: "14px", fontWeight: "600" }}
        />
        {isAdmin && (
          <div>
            <IconTrash cursor="pointer" onClick={onDeleteClick} />
            <IconEdit
              cursor="pointer"
              onClick={onEditClick}
              style={{ marginLeft: "10px" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
