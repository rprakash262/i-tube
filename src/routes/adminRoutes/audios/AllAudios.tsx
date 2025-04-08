import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Text } from "../../../components/ui/text/Text";
import { LinkButton } from "../../../components/ui/button/LinkButton";
import { SongItemCard } from "../../../components/songItemCard/SongItemCard";
import { getUniqueArrayItems } from "../../../utils/misc";
import { audioActions } from "../../../services/apiActions/audio";
import { singerActions } from "../../../services/apiActions/singer";

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

export const AllAudios = () => {
  const [allAudios, setAllAudios] = useState<any[]>([]);
  const [singers, setSingers] = useState<any>({});
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllAudios();
  }, []);

  const fetchAllAudios = async () => {
    try {
      const audioData = await audioActions.fetchAllAudios();

      const singerIds = audioData.map((d: any) => d.singer);

      const uniqueSingerIds = getUniqueArrayItems(singerIds);

      const singerData = await singerActions.fetchSingersByIds(uniqueSingerIds);

      const singers: any = {};

      singerData.forEach((singer: any) => {
        singers[singer.id] = singer;
      });

      setAllAudios(audioData);
      setSingers(singers);
    } catch (error) {
      alert(error);
    }
  };

  const deleteAudio = async (audioId: string) => {
    await fetch(`${serverUrl}/audio/${audioId}`, {
      method: "delete",
    });

    setAllAudios(allAudios.filter((audio) => audio.id !== audioId));
  };

  return (
    <div style={{ padding: "25px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "10px",
        }}
      >
        <Text text="All Audios" size="xl" style={{ textAlign: "center" }} />
        <LinkButton
          title="Add New Audio"
          onClick={() => navigate("/admin/audios/new")}
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
        {allAudios.map((audio) => (
          <SongItemCard
            key={audio.id}
            title={audio.title}
            singer={singers[audio.singer].name}
            thumbnail={audio.thumbnail}
            isAdmin={true}
            onEditClick={() => navigate(`/admin/audios/edit/${audio.id}`)}
            onDeleteClick={() => deleteAudio(audio.id)}
            style={{ marginBottom: "30px" }}
          />
        ))}
      </div>
    </div>
  );
};
