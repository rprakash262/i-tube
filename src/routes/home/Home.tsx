import { useEffect, useState } from "react";

import { NetflixSlider } from "../../components/netflixSlider/NetflixSlider";
import { SongItemCard } from "../../components/songItemCard/SongItemCard";
import { useAppLayout } from "../../contexts/AppLayoutContext";
import { audioActions } from "../../services/apiActions/audio";
import { getUniqueArrayItems } from "../../utils/misc";
import { singerActions } from "../../services/apiActions/singer";
import { AudioType } from "../../interfaces";

export const Home = () => {
  const { sidebarWidth } = useAppLayout();
  const [allAudios, setAllAudios] = useState<any[]>([]);

  useEffect(() => {
    fetchAllAudios();
  }, []);

  // const fetchAllAudios = async () => {
  //   const response = await fetch(`${serverUrl}/audio`);
  //   const jsonResponse = await response.json();

  //   setItems(jsonResponse.data);
  // };

  const fetchAllAudios = async () => {
    try {
      const audioData: AudioType[] = await audioActions.fetchAllAudios();

      const singerIds = audioData.map((d: any) => d.singer);

      const uniqueSingerIds = getUniqueArrayItems(singerIds);

      const singerData = await singerActions.fetchSingersByIds(uniqueSingerIds);

      const singers: any = {};

      singerData.forEach((singer: any) => {
        singers[singer.id] = singer;
      });

      const transformedAudios = audioData.map((audio) => ({
        ...audio,
        singer: singers[audio.singer].name,
      }));

      setAllAudios(transformedAudios);
    } catch (error) {
      alert(error);
    }
  };

  return (
    <div style={{ padding: "64px 30px" }}>
      <NetflixSlider
        width={window.innerWidth - sidebarWidth - 70}
        items={allAudios}
        sliderTitle="Favourite"
        sliderItem={SongItemCard}
      />
      <div style={{ margin: "50px 0" }} />
      <NetflixSlider
        width={window.innerWidth - sidebarWidth - 70}
        items={allAudios}
        sliderTitle="Trending"
        sliderItem={SongItemCard}
      />
      <div style={{ margin: "50px 0" }} />
      <NetflixSlider
        width={window.innerWidth - sidebarWidth - 70}
        items={allAudios}
        sliderTitle="New Release"
        sliderItem={SongItemCard}
      />
    </div>
  );
};
