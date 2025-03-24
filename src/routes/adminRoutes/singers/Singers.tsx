import { useEffect, useState } from "react";

import { Text } from "../../../components/ui/text/Text";
import { Button } from "../../../components/ui/button/Button";
import { InputField } from "../../../components/forms/inputField/InputField";
import { FileUploadField } from "../../../components/forms/fileUploadField/FileUploadField";
import { SelectField } from "../../../components/forms/selectField/SelectField";

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

type IndustryType = {
  id: string;
  label: string;
};

export const Singers = () => {
  const [name, setName] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [thumbnail, setThumbnail] = useState<string>("");
  const [industry, setIndustry] = useState<IndustryType>({
    id: "",
    label: "",
  });
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [allIndustries, setAllIndustries] = useState<any[]>([]);

  useEffect(() => {
    fetchIndustries();
  }, []);

  const fetchIndustries = async () => {
    const response = await fetch(`${serverUrl}/industry`);
    const jsonResponse = await response.json();

    const data = jsonResponse.data;

    const items = data.map((d: any) => ({
      id: d.id,
      label: d.title,
    }));
    setAllIndustries(items);
    setIndustry(items[0]);
  };

  const onSubmit = async () => {
    const data = {
      name,
      description,
      thumbnail,
      industry: allIndustries.find((ind) => ind.id === industry?.id)?.id,
    };

    try {
      setIsLoading(true);
      const response = await fetch(`${serverUrl}/singer`, {
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
    setName("");
    setDescription("");
    setThumbnail("");
    setIndustry(
      allIndustries?.length > 0 ? allIndustries[0] : { id: "", label: "" }
    );
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
          text="Add a New Singer"
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
            label="Name"
            placeholder="Enter Singer Name..."
            value={name}
            onChange={setName}
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
        {allIndustries?.length > 0 && (
          <div style={{ marginBottom: "25px" }}>
            <SelectField
              label="Industry"
              placeholder="Select Industry..."
              items={allIndustries}
              selected={industry}
              onChange={setIndustry}
            />
          </div>
        )}
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
