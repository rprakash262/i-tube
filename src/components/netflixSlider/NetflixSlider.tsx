import { useState } from "react";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

import styles from "./styles.module.css";
import { NetflixSliderControl } from "./NetflixSliderControl";

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
const oneItemWidth = 200;

export const NetflixSlider = ({ width }: any) => {
  const [left, setLeft] = useState(0);

  const goLeft = () => {
    setLeft((prevLeft) => (prevLeft === 0 ? 0 : prevLeft + oneItemWidth));
  };

  const goRight = () => {
    setLeft((prevLeft) => prevLeft - oneItemWidth);
  };

  console.log({ left });

  return (
    <div id={styles.netflixSlider} style={{ width: `${width}px` }}>
      <div id={styles.netflixSliderHeader}>
        <h4>Slider Header</h4>
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
        {items.map(() => (
          <OneNetflixSliderItem>
            <div>item</div>
          </OneNetflixSliderItem>
        ))}
      </div>
    </div>
  );
};

const OneNetflixSliderItem = ({ children }: any) => (
  <div style={{ width: `${oneItemWidth}px`, border: "1px solid white" }}>
    {children}
  </div>
);
