interface NetflixSliderControlProps {
  icon: React.ElementType;
  onClick: () => void;
}

export const NetflixSliderControl = ({
  icon: Icon,
  onClick,
}: NetflixSliderControlProps) => {
  return (
    <button onClick={onClick}>
      <Icon />
    </button>
  );
};
