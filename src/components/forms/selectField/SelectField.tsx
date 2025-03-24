import { SelectDropdown } from "../../ui/selectDropdown/SelectDropdown";
import { Text } from "../../ui/text/Text";

export const SelectField = ({
  label,
  items,
  selected,
  onChange,
  errorMsg,
}: any) => {
  return (
    <div>
      <div style={{ marginBottom: "5px" }}>
        <Text text={`${label}:`} size="md" style={{ fontWeight: "600" }} />
      </div>
      <div>
        <SelectDropdown items={items} selected={selected} onChange={onChange} />
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
