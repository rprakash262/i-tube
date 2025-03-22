import { configureStore } from "@reduxjs/toolkit";

import counterReducer from "./counter/counterSlice";
import mainReducer from "./main/mainSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    main: mainReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
