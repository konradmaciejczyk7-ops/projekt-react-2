import { createSlice } from "@reduxjs/toolkit";

const savedFavorites = localStorage.getItem("favorites");
const initialState = {
  cities: savedFavorites ? JSON.parse(savedFavorites) : []
};

const favoriteSlice = createSlice({
  name: "favorite",
  initialState,
  reducers: {
    togglefavorite: (state, action) => {
      const cityId = action.payload;
      if (state.cities.includes(cityId)) {
        state.cities = state.cities.filter(id => id !== cityId);
      } else {
        state.cities.push(cityId);
      }
      localStorage.setItem("favorites", JSON.stringify(state.cities));
    }
  }
});

export const { togglefavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
