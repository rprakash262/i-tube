import { Input } from "../../ui/input/Input";
import { Text } from "../../ui/text/Text";

export const InputField = ({
  label,
  inputType,
  value,
  onChange,
  placeholder,
  errorMsg,
}: any) => {
  return (
    <div>
      <div style={{ marginBottom: "5px" }}>
        <Text text={`${label}:`} size="md" style={{ fontWeight: "600" }} />
      </div>
      <div>
        <Input
          type={inputType}
          value={value}
          onChange={(e: any) => onChange(e.target.value)}
          placeholder={placeholder}
        />
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
