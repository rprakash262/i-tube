import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

import styles from "./styles.module.css";
import { NetflixSliderControl } from "./NetflixSliderControl";
import { setSelectedAudio } from "../../state/main/mainSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store";

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const oneItemWidth = 300;

export const NetflixSlider = ({
  width,
  items,
  sliderTitle,
  sliderItem: SliderItem,
}: any) => {
  const [left, setLeft] = useState(0);
  const dispatch = useDispatch<AppDispatch>();

  const goLeft = () => {
    setLeft((prevLeft) => (prevLeft === 0 ? 0 : prevLeft + oneItemWidth));
  };

  const goRight = () => {
    setLeft((prevLeft) => prevLeft - oneItemWidth);
  };

  return (
    <div id={styles.netflixSlider} style={{ width: `${width}px` }}>
      <div id={styles.netflixSliderHeader}>
        <h4>{sliderTitle}</h4>
        <div id={styles.netflixSliderControls}>
          <NetflixSliderControl icon={IconChevronLeft} onClick={goLeft} />
          <NetflixSliderControl icon={IconChevronRight} onClick={goRight} />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: `${items.length * oneItemWidth}px`,
          left: `${left}px`,
          position: "absolute",
          transition: "0.3s ease left",
        }}
      >
        {items.map((item: any) => (
          <OneNetflixSliderItem key={item.id}>
            <SliderItem
              item={item}
              onClick={() => dispatch(setSelectedAudio(item))}
            />
          </OneNetflixSliderItem>
        ))}
      </div>
    </div>
  );
};

const OneNetflixSliderItem = ({ children }: any) => (
  <div style={{ width: `${oneItemWidth}px`, padding: "0 10px" }}>
    {children}
  </div>
);
