import { useEffect, useState } from "react";

import { NetflixSlider } from "../../components/netflixSlider/NetflixSlider";
import { SongItemCard } from "../../components/songItemCard/SongItemCard";
import { useAppLayout } from "../../contexts/AppLayoutContext";

export const Home = () => {
  const { sidebarWidth } = useAppLayout();
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    fetchAudio();
  }, []);

  const fetchAudio = async () => {
    const response = await fetch("http://localhost:8080/audio");
    const jsonResponse = await response.json();

    setItems(jsonResponse);
  };

  return (
    <div style={{ padding: "64px 30px" }}>
      <NetflixSlider
        width={window.innerWidth - sidebarWidth - 70}
        items={items}
        sliderTitle="Favourite"
        sliderItem={SongItemCard}
      />
      <div style={{ margin: "50px 0" }} />
      <NetflixSlider
        width={window.innerWidth - sidebarWidth - 70}
        items={items}
        sliderTitle="Playlists"
        sliderItem={SongItemCard}
      />
      <div style={{ margin: "50px 0" }} />
      <NetflixSlider
        width={window.innerWidth - sidebarWidth - 70}
        items={items}
        sliderTitle="New Release"
        sliderItem={SongItemCard}
      />
    </div>
  );
};
