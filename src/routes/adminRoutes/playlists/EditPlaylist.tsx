import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { AddNewPlaylist } from "./AddPlaylist";

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

export const EditPlaylist = () => {
  const [playlistToEdit, setPlaylistToEdit] = useState<any>();
  const { playlistId } = useParams();

  useEffect(() => {
    fetchPlaylist();
  }, []);

  const fetchPlaylist = async () => {
    const response = await fetch(`${serverUrl}/playlist/${playlistId}`);
    const jsonResponse = await response.json();
    setPlaylistToEdit(jsonResponse.data);
  };

  return playlistToEdit ? (
    <AddNewPlaylist
      playlistId={playlistToEdit.id}
      titleProp={playlistToEdit.title}
      descriptionProp={playlistToEdit.description}
      tagsProp={playlistToEdit.tags}
      thumbnailProp={playlistToEdit.thumbnail}
    />
  ) : null;
};
