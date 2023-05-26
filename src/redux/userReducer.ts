import { createSlice } from "@reduxjs/toolkit";

const initialState = { hasUser: false };

export const userSlice = createSlice({
  name: "user",
  initialState: {
    value: { payload: initialState },
  },
  reducers: {
    setHasUser: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setHasUser } = userSlice.actions;
export default userSlice.reducer;
