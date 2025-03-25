import { useState } from "react";

import { Text } from "../../../components/ui/text/Text";
import { Button } from "../../../components/ui/button/Button";
import { InputField } from "../../../components/forms/inputField/InputField";
import { FileUploadField } from "../../../components/forms/fileUploadField/FileUploadField";
import { TagsField } from "../../../components/forms/tagsField/TagsField";
import { defaultThumbnail } from "../../../data/misc";

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

export const Playlists = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>(defaultThumbnail);
  const [tags, setTags] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    const data = {
      title,
      description,
      thumbnail,
      tags,
    };

    try {
      setIsLoading(true);
      const response = await fetch(`${serverUrl}/playlist`, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      await response.json();
      resetFields();
      setSuccessMsg("Playlist added successfully");
      setIsLoading(false);
      setTimeout(() => {
        setSuccessMsg("");
      }, 5000);
    } catch (error) {
      setErrorMsg(String(error));
      setIsLoading(false);
      setTimeout(() => {
        setErrorMsg("");
      }, 5000);
    }
  };

  const resetFields = () => {
    setTitle("");
    setDescription("");
    setThumbnail(defaultThumbnail);
    setTags([]);
  };

  return (
    <div style={{ padding: "25px 0" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "700px",
          margin: "auto",
        }}
      >
        <Text
          text="Add a New Playlist"
          size="xl"
          style={{ textAlign: "center", marginBottom: "10px" }}
        />
        <div style={{ marginBottom: "25px" }}>
          <FileUploadField
            label="Thumbnail"
            placeholder="Enter Thumbnail Url..."
            bucketName="itube"
            folderName="thumbnails"
            setFileUrl={setThumbnail}
            fileUrl={thumbnail}
          />
        </div>
        <div style={{ marginBottom: "25px" }}>
          <InputField
            label="Title"
            placeholder="Enter Audio Title..."
            value={title}
            onChange={setTitle}
          />
        </div>
        <div style={{ marginBottom: "25px" }}>
          <InputField
            label="Description"
            placeholder="Enter Audio Description..."
            value={description}
            onChange={setDescription}
          />
        </div>
        <div style={{ marginBottom: "25px" }}>
          <TagsField
            label="Tags"
            placeholder="Enter Tags..."
            onEnter={setTags}
            tags={tags}
          />
        </div>
        <div>
          {errorMsg && (
            <div
              style={{
                padding: "10px",
                backgroundColor: "var(--error-color)",
                borderRadius: "4px",
                marginBottom: "25px",
              }}
            >
              <Text text={errorMsg} style={{ color: "#fff" }} size="md" />
            </div>
          )}
          {successMsg && (
            <div
              style={{
                padding: "10px",
                backgroundColor: "var(--success-color)",
                borderRadius: "4px",
                marginBottom: "25px",
              }}
            >
              <Text text={successMsg} style={{ color: "#fff" }} size="md" />
            </div>
          )}
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <Button
            title={isLoading ? "Please Wait.." : "Submit"}
            onClick={onSubmit}
            btnType="primary"
            style={{ marginRight: "20px" }}
            disabled={isLoading}
          />
          <Button
            title="Reset Fields"
            onClick={resetFields}
            btnType="primary"
            disabled={isLoading}
          />
        </div>
      </div>
    </div>
  );
};
