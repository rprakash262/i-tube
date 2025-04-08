import { useEffect, useState } from "react";
import { useParams } from "react-router";

import { AddAudio } from "./AddAudio";
import { genreActions } from "../../../services/apiActions/genre";
import { singerActions } from "../../../services/apiActions/singer";
import { AudioType, GenreType, SingerType } from "../../../interfaces";

const serverUrl = import.meta.env.VITE_APP_SERVER_URL;

export const EditAudio = () => {
  const [audioToEdit, setAudioToEdit] = useState<AudioType>();
  const [genre, setGenre] = useState<GenreType>();
  const [singer, setSinger] = useState<SingerType>();
  const { audioId } = useParams();

  useEffect(() => {
    fetchPlaylist();
  }, []);

  const fetchPlaylist = async () => {
    const response = await fetch(`${serverUrl}/audio/${audioId}`);
    const jsonResponse = await response.json();
    const audioData = jsonResponse.data;
    const singerId = audioData.singer;
    const genreId = audioData.genre;

    const [genreData, singerData] = await Promise.allSettled([
      genreActions.fetchGenresByIds([genreId]),
      singerActions.fetchSingersByIds([singerId]),
    ]);

    if (genreData.status === "fulfilled") {
      setGenre(genreData.value[0]);
    }

    if (singerData.status === "fulfilled") {
      setSinger(singerData.value[0]);
    }

    setAudioToEdit(audioData);
  };

  return audioToEdit && genre && singer ? (
    <AddAudio
      audioId={audioToEdit.id}
      editMode={true}
      urlProp={audioToEdit.url}
      titleProp={audioToEdit.title}
      descriptionProp={audioToEdit.description}
      tagsProp={audioToEdit.tags}
      genreProp={{ id: genre?.id, label: genre?.title }}
      singerProp={{ id: singer?.id, label: singer?.name }}
      thumbnailProp={audioToEdit.thumbnail}
    />
  ) : null;
};
