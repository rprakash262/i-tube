import { useEffect, useState } from "react";
import { IconLoader, IconUpload, IconX } from "@tabler/icons-react";

import { UploadBox } from "../uploadBox/UploadBox";
import { Input } from "../ui/input/Input";
import { supabaseClient } from "../../supabase/supabaseClient";

const baseUrl =
  "https://jdnnhpkgrugqtpwfozux.supabase.co/storage/v1/object/public";

export const FileUploader = ({
  placeholder,
  bucketName,
  folderName,
  setFileUrl,
  fileUrl,
}: any) => {
  const [file, setFile] = useState<File | null>(null);
  const [uploadState, setUploadState] = useState<
    "notStarted" | "uploading" | "uploaded"
  >("notStarted");

  useEffect(() => {
    if (!fileUrl) {
      setFile(null);
      setUploadState("notStarted")
    }
  }, [fileUrl]);

  const uploadFile = async () => {
    if (file) {
      setUploadState("uploading");

      const { data, error } = await supabaseClient.storage
        .from(bucketName)
        .upload(`${folderName}/${file?.name}`, file, {
          cacheControl: "3600",
          upsert: false,
        });

      if (data) {
        setFileUrl(`${baseUrl}/${data.fullPath}`);
        setUploadState("uploaded");
      }
    }
  };

  const deleteFile = () => {};

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <div style={{ display: "flex", flex: 1 }}>
          <UploadBox
            file={file}
            setFile={setFile}
            isDisabled={uploadState === "uploading"}
          />
        </div>
        <div
          style={{
            width: "50px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {uploadState === "uploading" ? (
            <IconLoader cursor="pointer" />
          ) : uploadState === "notStarted" ? (
            <IconUpload onClick={uploadFile} cursor="pointer" />
          ) : (
            <IconX onClick={deleteFile} cursor="pointer" />
          )}
        </div>
      </div>
      <div>
        <Input
          type="text"
          placeholder={placeholder}
          value={fileUrl}
          onChange={(e: any) => setFileUrl(e.target.value)}
        />
      </div>
    </div>
  );
};
