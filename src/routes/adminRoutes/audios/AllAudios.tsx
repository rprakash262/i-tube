import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Text } from "../../../components/ui/text/Text";
import { LinkButton } from "../../../components/ui/button/LinkButton";
import { SongItemCard } from "../../../components/songItemCard/SongItemCard";

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

export const AllAudios = () => {
  const [allAudios, setAllAudios] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllAudios();
  }, []);

  const fetchAllAudios = async () => {
    const response = await fetch(`${serverUrl}/audio`);

    const jsonResponse = await response.json();

    // const genreId = jsonResponse.data.genre;
    // const singerId = jsonResponse.data.singer;

    // const res = await Promise.allSettled([
    //   fetch(`${serverUrl}/genre/${genreId}`),
    //   fetch(`${serverUrl}/singer/${singerId}`),
    // ]);

    // console.log({res})
    setAllAudios(jsonResponse.data);
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
            item={audio}
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
