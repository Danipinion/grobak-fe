import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  isErorr: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

interface LoginCredentials {
  email: string;
  password: string;
}

export const LoginUser = createAsyncThunk(
  "user/LoginUser",
  async (user: LoginCredentials, thunkAPI) => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email: user.email,
        password: user.password,
      });
      return response.data;
    } catch (error: any) {
      const message = error.response.data.msg;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(LoginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(LoginUser.rejected, (state: any, action) => {
        state.isLoading = false;
        state.isErorr = true;
        state.message = action.payload;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
