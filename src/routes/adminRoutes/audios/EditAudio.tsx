import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { AddAudio } from "./AddAudio";

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

export const EditAudio = () => {
  const [audioToEdit, setAudioToEdit] = useState<any>();
  const { audioId } = useParams();

  useEffect(() => {
    fetchPlaylist();
  }, []);

  const fetchPlaylist = async () => {
    const response = await fetch(`${serverUrl}/audio/${audioId}`);
    const jsonResponse = await response.json();
    setAudioToEdit(jsonResponse.data);
  };

  return audioToEdit ? (
    <AddAudio
      playlistId={audioToEdit.id}
      titleProp={audioToEdit.title}
      descriptionProp={audioToEdit.description}
      tagsProp={audioToEdit.tags}
      thumbnailProp={audioToEdit.thumbnail}
    />
  ) : null;
};
