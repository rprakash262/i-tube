import { useEffect, useState } from "react";

import { NetflixSlider } from "../../components/netflixSlider/NetflixSlider";
import { SongItemCard } from "../../components/songItemCard/SongItemCard";
import { useAppLayout } from "../../contexts/AppLayoutContext";

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

export const Home = () => {
  const { sidebarWidth } = useAppLayout();
  const [items, setItems] = useState<number[]>([]);

  useEffect(() => {
    fetchAudio();
  }, []);

  const fetchAudio = async () => {
    const response = await fetch(`${serverUrl}/audio`);
    const jsonResponse = await response.json();

    setItems(jsonResponse.data);
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
        sliderTitle="Trending"
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
