import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface MainState {
  selectedAudio: any;
}

const initialState: MainState = {
  selectedAudio: null,
};

const mainSlice = createSlice({
  name: "main",
  initialState,
  reducers: {
    setSelectedAudio: (state, action: PayloadAction<any>) => {
      state.selectedAudio = action.payload;
    },
  },
});

export const { setSelectedAudio } = mainSlice.actions;

export default mainSlice.reducer;
