export type AudioType = {
  id: string;
  title: string;
  url: string;
  singer: string;
  description: string;
  thumbnail: string;
  tags: string[];
  genre: string;
};

export type GenreType = {
  id: string;
  title: string;
  description: string;
};

export type IndustryType = {
  id: string;
  title: string;
  description: string;
};

export type PlaylistType = {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  audios: string[];
  owner: string | null;
  tags: string[];
};

export type SingerType = {
  id: string;
  name: string;
  description: string;
  thumbnail: string;
  industry: string[];
};
