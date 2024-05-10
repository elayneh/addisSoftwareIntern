import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  uploading: false,
  song: null,
  error: null,
};

const songSlice = createSlice({
  name: "song",
  initialState,
  reducers: {
    addSongRequest: (state, action) => {
      state.uploading = true;
      state.song = action.payload;
      state.error = null;
    },
    addSongSuccess: (state) => {
      state.uploading = false;
    },
    addSongFailure: (state, action) => {
      state.uploading = false;
      state.error = action.payload;
    },
  },
});

export const { addSongRequest, addSongSuccess, addSongFailure } =
  songSlice.actions;

export default songSlice.reducer;
