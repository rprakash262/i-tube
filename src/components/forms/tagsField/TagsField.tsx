import { useState } from "react";

import { Input } from "../../ui/input/Input";
import { Text } from "../../ui/text/Text";

export const TagsField = ({
  label,
  placeholder,
  tags,
  onEnter,
  errorMsg,
}: any) => {
  const [newTag, setNewTag] = useState<string>("");

  const addNewtag = (e: any) => {
    if (e.key === "Enter") {
      onEnter([...tags, newTag]);
      setNewTag("");
    }
  };

  return (
    <div>
      <div style={{ marginBottom: "5px" }}>
        <Text text={`${label}:`} size="md" style={{ fontWeight: "600" }} />
      </div>
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <div>
          <Input
            type="text"
            placeholder={placeholder}
            value={newTag}
            onChange={(e: any) => setNewTag(e.target.value)}
            onKeyUp={addNewtag}
          />
        </div>
        {tags?.length > 0 && (
          <div style={{ padding: "10px" }}>
            {tags.map((tag: string) => (
              <span
                key={tag}
                style={{
                  display: "inline-block",
                  padding: "5px 10px",
                  boxShadow: "0px 0px 3px #fff",
                  borderRadius: "10px",
                  margin: "5px",
                }}
              >
                <Text text={tag} size="sm" />
              </span>
            ))}
          </div>
        )}
      </div>
      {errorMsg && (
        <Text
          text="Error message"
          size="sm"
          style={{ color: "var(--error-color)" }}
        />
      )}
    </div>
  );
};
