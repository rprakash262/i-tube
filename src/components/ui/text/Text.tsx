interface TextProps {
  text: string;
  size: "xs" | "sm" | "md" | "lg" | "xl";
  style?: any;
  w?: string | number;
  onClick?: () => void;
}

const fontSizes = {
  xs: 8,
  sm: 10,
  md: 14,
  lg: 20,
  xl: 28,
};

export const Text = ({ text, size, w, style, onClick }: TextProps) => {
  return (
    <p
      onClick={onClick}
      style={{
        fontSize: `${fontSizes[size]}px`,
        fontWeight: w ?? "normal",
        ...style,
      }}
    >
      {text}
    </p>
  );
};
