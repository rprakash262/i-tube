import { Input } from "../input/Input";
import styles from "./style.module.css";

export const DirectorySelector = ({ value, pathType, onChange }: any) => {
  const selectDirectory = async (e: any) => {
    console.log(e);
    if (window.electron) {
      const selectedPath = await window.electron.selectDirectory();
      if (selectedPath) {
        onChange(e, selectedPath);
        console.log({ selectedPath });
        // setDirectory(selectedPath);
      }
    } else {
      alert("Electron API not available");
    }
  };

  const selectFile = async (e: any) => {
    if (window.electron) {
      const selectedPath = await window.electron.selectFile();
      if (selectedPath) {
        onChange(e, selectedPath);
        console.log({ selectedPath });
        // setFile(selectedPath);
      }
    } else {
      alert("Electron API not available");
    }
  };

  return window.electron ? (
    <input
      className={styles.directorySelector}
      type="text"
      placeholder="Select directory.."
      // onChange={() => {}}
      value={value}
      readOnly
      onClick={pathType === "file" ? selectFile : selectDirectory}
    />
  ) : (
    <Input
      type="text"
      value={value}
      onChange={(e: any) => onChange(e, e.target.value)}
    />
  );
};
