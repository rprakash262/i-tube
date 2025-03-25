import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter/counterSlice";
import mainReducer from "./main/mainSlice";
import playlistReducer from "./playlist/playlistSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    main: mainReducer,
    playlist: playlistReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
