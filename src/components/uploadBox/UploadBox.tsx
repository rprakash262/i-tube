import { useRef } from "react";

import { Text } from "../ui/text/Text";

export const UploadBox = ({ isDisabled, file, setFile }: any) => {
  const ref = useRef<HTMLInputElement>(null);

  const onDrop = (e: any) => {
    console.log(e);
  };

  return (
    <div style={{ width: "100%" }}>
      <input
        ref={ref}
        type="file"
        style={{ display: "none" }}
        onChange={(e: any) => setFile(e.target.files[0])}
      />
      <div
        style={{
          border: "2px dashed var(--border-color)",
          padding: "10px",
          borderRadius: "4px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          cursor: isDisabled ? "no-drop" : "pointer",
        }}
        onClick={isDisabled ? () => {} : () => ref.current?.click()}
        onDrop={onDrop}
      >
        {file ? (
          <Text text={file?.name} size="md" />
        ) : (
          <>
            <Text text="Drag & Drop" size="md" />
            <Text text="or" size="md" />
            <Text text="Select a file" size="md" />
          </>
        )}
      </div>
    </div>
  );
};
