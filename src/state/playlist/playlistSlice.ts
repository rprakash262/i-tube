import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface PlaylistState {
  playlistToEdit: any;
}

const initialState: PlaylistState = {
  playlistToEdit: null,
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setPlaylistToEdit: (state, action: PayloadAction<any>) => {
      state.playlistToEdit = action.payload;
    },
  },
});

export const { setPlaylistToEdit } = playlistSlice.actions;

export default playlistSlice.reducer;
