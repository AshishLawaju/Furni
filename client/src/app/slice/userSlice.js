import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: null,
  },
  reducers: {
    setuser: (state, payload) => {
      state.value = {
        name: payload.payload,
      };
    },
    logout: (state) => {
      localStorage.removeItem("token");
      localStorage.clear();
      state.value = null;
    },
  },
});

export const { setuser, logout } = userSlice.actions;
export default userSlice.reducer;
