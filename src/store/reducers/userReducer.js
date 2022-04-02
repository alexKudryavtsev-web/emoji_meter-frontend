import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthService from "../../services/AuthService";

const initialState = {
  isAuth: false,
  user: {},
  errorMessage: {},
};

const login = createAsyncThunk("user/login", async (payload) => {
  const res = await AuthService.login(payload.email, payload.password);
  return res.data;
});

const logout = createAsyncThunk("user/logout", async () => {
  await AuthService.logout();
});

const resetPassword = createAsyncThunk(
  "user/resetPassword",
  async (payload) => {
    await AuthService.resetPassword(payload.email);
  }
);

const signUp = createAsyncThunk("user/signUp", async (payload) => {
  await AuthService.registration(payload.email, payload.password);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.isAuth = true;
        state.errorMessage.login = "";
      })
      .addCase(login.rejected, (state, action) => {
        state.errorMessage.login = action.error.message;
      });

    builder
      .addCase(resetPassword.fulfilled, (state) => {
        state.errorMessage.resetPassword = "";
      })
      .addCase(resetPassword.rejected, (state, action) => {
        state.errorMessage.resetPassword = action.error.message;
      });

    builder
      .addCase(signUp.rejected, (state, action) => {
        state.errorMessage.signUp = action.error.message;
      })
      .addCase(signUp.fulfilled, (state) => {
        state.errorMessage.signUp = "";
      });

    builder.addCase(logout.fulfilled, (state) => {
      state.isAuth = false;
      state.user = {};
      state.errorMessage = {};
    });
  },
});

export default userSlice.reducer;
export { login, logout, resetPassword, signUp };
