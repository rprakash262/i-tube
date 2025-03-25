import { useEffect, useState } from "react";

import { Text } from "../../../components/ui/text/Text";
import { Button } from "../../../components/ui/button/Button";
import { InputField } from "../../../components/forms/inputField/InputField";
import { FileUploadField } from "../../../components/forms/fileUploadField/FileUploadField";
import { TagsField } from "../../../components/forms/tagsField/TagsField";
import { SelectField } from "../../../components/forms/selectField/SelectField";
import { defaultThumbnail } from "../../../data/misc";

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

type DropdownItemType = {
  id: string;
  label: string;
};

export const AddAudio = ({
  urlProp,
  titleProp,
  singerProp,
  genreProp,
  descriptionProp,
  thumbnailProp,
  tagsProp,
}: any) => {
  const [url, setUrl] = useState<string>(urlProp);
  const [title, setTitle] = useState<string>(titleProp);
  const [singer, setSinger] = useState<DropdownItemType>(singerProp);
  const [genre, setGenre] = useState<DropdownItemType>(genreProp);
  const [description, setDescription] = useState<string>(descriptionProp);
  const [thumbnail, setThumbnail] = useState<string>(
    thumbnailProp ?? defaultThumbnail
  );
  const [tags, setTags] = useState<string[]>(tagsProp);
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [allSingers, setAllSingers] = useState<DropdownItemType[]>([]);
  const [allGenres, setAllGenres] = useState<DropdownItemType[]>([]);

  useEffect(() => {
    fetchSingers();
    fetchGenres();
  }, []);

  const fetchSingers = async () => {
    const response = await fetch(`${serverUrl}/singer`);
    const jsonResponse = await response.json();

    const data = jsonResponse.data;

    const items = data.map((d: any) => ({
      id: d.id,
      label: d.name,
    }));

    setAllSingers(items);
  };

  const fetchGenres = async () => {
    const response = await fetch(`${serverUrl}/genre`);
    const jsonResponse = await response.json();

    const data = jsonResponse.data;

    const items = data.map((d: any) => ({
      id: d.id,
      label: d.title,
    }));

    setAllGenres(items);
  };

  const onSubmit = async () => {
    const data = {
      title,
      singer: allSingers.find((ind) => ind.id === singer?.id)?.id,
      description,
      url,
      thumbnail,
      tags,
      genre: allGenres.find((gen) => gen.id === genre?.id)?.id,
    };

    try {
      setIsLoading(true);
      const response = await fetch(`${serverUrl}/audio`, {
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
    setSinger({ id: "", label: "" });
    setGenre({ id: "", label: "" });
    setDescription("");
    setUrl("");
    setThumbnail("");
    setTags([]);
  };

  console.log({ allGenres });

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
            label="Description"
            placeholder="Enter Audio Description..."
            value={description}
            onChange={setDescription}
          />
        </div>
        {allSingers?.length > 0 && (
          <div style={{ marginBottom: "25px" }}>
            <SelectField
              label="Singer"
              placeholder="Select Industry..."
              items={allSingers}
              selected={singer}
              onChange={setSinger}
            />
          </div>
        )}
        {allGenres?.length > 0 && (
          <div style={{ marginBottom: "25px" }}>
            <SelectField
              label="Genre"
              placeholder="Select Genre..."
              items={allGenres}
              selected={genre}
              onChange={setGenre}
            />
          </div>
        )}
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
