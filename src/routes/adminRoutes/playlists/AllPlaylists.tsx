import { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import { Text } from "../../../components/ui/text/Text";
import { PlaylistItemCard } from "../../../components/playlistItemCard/PlaylistItemCard";
import { LinkButton } from "../../../components/ui/button/LinkButton";

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

export const AllPlaylists = () => {
  const [allPlaylists, setAllPlaylists] = useState<any[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchAllPlaylists();
  }, []);

  const fetchAllPlaylists = async () => {
    const response = await fetch(`${serverUrl}/playlist`);

    const jsonResponse = await response.json();

    setAllPlaylists(jsonResponse.data);
  };

  const deletePlaylist = async (playlistId: string) => {
    await fetch(`${serverUrl}/playlist/${playlistId}`, {
      method: "delete",
    });

    setAllPlaylists(
      allPlaylists.filter((playlist) => playlist.id !== playlistId)
    );
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
        <Text text="All Playlists" size="xl" style={{ textAlign: "center" }} />
        <LinkButton
          title="Add New Playlist"
          onClick={() => navigate("/admin/playlists/new")}
        />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
        {allPlaylists.map((playlist) => (
          <PlaylistItemCard
            key={playlist.id}
            item={playlist}
            isAdmin={true}
            onEditClick={() => navigate(`/admin/playlists/edit/${playlist.id}`)}
            onDeleteClick={() => deletePlaylist(playlist.id)}
            style={{ marginBottom: "30px" }}
          />
        ))}
      </div>
    </div>
  );
};
