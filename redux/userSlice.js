import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    userToken: null,
    isLoading: true,
    isSignout: false,
  },
  reducers: {
    restoreToken: (state, action) => {
      // state.userToken = action.payload;
      state.isLoading = false;
    },
    setToken: (state, action) => {
      console.log("setting token");
      state.userToken = action.payload;
      state.isLoading = false;
    },
    deleteToken: (state) => {
      state.userToken = null;
    },
  },
});

export const { restoreToken, setToken, deleteToken } = userSlice.actions;

export default userSlice.reducer;
