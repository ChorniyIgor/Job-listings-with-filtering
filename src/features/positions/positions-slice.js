const { createSlice } = require("@reduxjs/toolkit");

const positionsSlice = createSlice({
  name: "@@positions",
  initialState: [],
  reducers: {
    addPositions: (state, action) => action.payload,
  },
});

export const { addPositions } = positionsSlice.actions;

export const positionsReducer = positionsSlice.reducer;
