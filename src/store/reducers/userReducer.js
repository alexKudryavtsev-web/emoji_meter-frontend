import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";

const initialState = {
  isAuth: false,
  user: {},
};

const login = createAsyncThunk("user/login", async (payload) => {
  const { data } = await AuthService.login(payload.email, payload.password);
  return data;
});

const logout = createAsyncThunk("user/logout", async () => {
  await AuthService.logout();
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.isAuth = true;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.isAuth = false;
      state.user = {};
      console.log(state.user);
    });
  },
});

export default userSlice.reducer;
export { login, logout };
