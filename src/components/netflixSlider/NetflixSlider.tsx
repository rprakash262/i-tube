import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

import styles from "./styles.module.css";
import { NetflixSliderControl } from "./NetflixSliderControl";
import { setSelectedAudio } from "../../state/main/mainSlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../state/store";
import { AudioType } from "../../interfaces";

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
        {items.map((item: AudioType) => (
          <OneNetflixSliderItem key={item.id}>
            <SliderItem
              title={item.title}
              thumbnail={item.thumbnail}
              singer={item.singer}
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
