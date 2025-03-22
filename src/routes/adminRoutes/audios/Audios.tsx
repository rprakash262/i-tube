import { useState } from "react";

import { Text } from "../../../components/ui/text/Text";
import { Button } from "../../../components/ui/button/Button";
import { InputField } from "../../../components/forms/inputField/InputField";
import { FileUploadField } from "../../../components/forms/fileUploadField/FileUploadField";
import { TagsField } from "../../../components/forms/tagsField/TagsField";

export const Audios = () => {
  const [url, setUrl] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [singer, setsinger] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    const data = { title, singer, description, url, thumbnail, tags };
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/audio", {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      await response.json();
      resetFields();
      setSuccessMsg("Audio added successfully");
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
    setsinger("");
    setDescription("");
    setUrl("");
    setThumbnail("");
    setTags([]);
  };

  return (
    <div style={{ padding: "75px 30px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "700px",
        }}
      >
        <Text
          text="Add a New Song"
          size="xl"
          style={{ textAlign: "center", marginBottom: "10px" }}
        />
        <div style={{ marginBottom: "25px" }}>
          <FileUploadField
            label="File"
            placeholder="Enter File Url..."
            bucketName="itube"
            folderName="audios"
            setFileUrl={setUrl}
            fileUrl={url}
          />
        </div>
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
            label="Singer"
            placeholder="Enter Singer Name..."
            value={singer}
            onChange={setsinger}
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
        <div>
          <TagsField
            label="Tags"
            placeholder="Enter Tag Name..."
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
        <div style={{ display: "flex", flexDirection: "row" }}>
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
