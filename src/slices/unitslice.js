import { createSlice } from "@reduxjs/toolkit";

const savedUnit = localStorage.getItem("unit");

const initialState = {
  unit: savedUnit || "c"
};

const unitSlice = createSlice({
  name: "unit",
  initialState,
  reducers: {
    setunit: (state, action) => {
      state.unit = action.payload;
      localStorage.setItem("unit", state.unit);
    }
  }
});

export const { setunit } = unitSlice.actions;
export default unitSlice.reducer;
