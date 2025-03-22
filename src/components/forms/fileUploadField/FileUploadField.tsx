import { Text } from "../../ui/text/Text";
import { FileUploader } from "../../fileUploader/FileUploader";

export const FileUploadField = ({
  label,
  placeholder,
  bucketName,
  folderName,
  setFileUrl,
  fileUrl,
}: any) => {
  return (
    <div>
      <div style={{ marginBottom: "5px" }}>
        <Text text={`${label}:`} size="md" style={{ fontWeight: "600" }} />
      </div>
      <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
        <FileUploader
          placeholder={placeholder}
          bucketName={bucketName}
          folderName={folderName}
          setFileUrl={setFileUrl}
          fileUrl={fileUrl}
        />
      </div>
    </div>
  );
};
