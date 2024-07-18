import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "@/hook/counter/counterSline";
import authReducer from "@/hook/authSlice";
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
