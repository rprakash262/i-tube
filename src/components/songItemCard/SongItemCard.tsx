import { Text } from "../ui/text/Text";

export const SongItemCard = ({ item, onClick }: any) => {
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
        border: "1px solid var(--border-color)",
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
        <img src={item.thumbnail} style={{ width: "100%", height: "100%" }} />
      </div>
      <div style={{ paddingLeft: "10px" }}>
        <Text
          text={item.title}
          size="md"
          style={{ fontSize: "16px", fontWeight: "600" }}
        />
        <Text text={item.singer} size="md" />
        <Text text={item.visits} size="sm" />
      </div>
    </div>
  );
};
