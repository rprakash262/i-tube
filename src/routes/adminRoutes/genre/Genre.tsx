import { useState } from "react";

import { Text } from "../../../components/ui/text/Text";
import { Button } from "../../../components/ui/button/Button";
import { InputField } from "../../../components/forms/inputField/InputField";

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

export const Genre = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");
  const [successMsg, setSuccessMsg] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const onSubmit = async () => {
    const data = { title, description };

    try {
      setIsLoading(true);
      const response = await fetch(`${serverUrl}/genre`, {
        method: "post",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      });

      await response.json();
      resetFields();
      setSuccessMsg("Genre added successfully");
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
  };

  return (
    <div style={{ padding: "25px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "700px",
          margin: "auto",
        }}
      >
        <Text
          text="Add a New Genre"
          size="xl"
          style={{ textAlign: "center", marginBottom: "10px" }}
        />
        <div style={{ marginBottom: "25px" }}>
          <InputField
            label="Title"
            placeholder="Enter Genre Title..."
            value={title}
            onChange={setTitle}
          />
        </div>
        <div style={{ marginBottom: "25px" }}>
          <InputField
            label="Description"
            placeholder="Enter Genre Description..."
            value={description}
            onChange={setDescription}
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
