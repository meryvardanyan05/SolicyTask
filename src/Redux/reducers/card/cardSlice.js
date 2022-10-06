import { createSlice } from "@reduxjs/toolkit";

const LOCAL_STORAGE_KEY = "lsk";
const initialState = {
  cards: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY) ?? `[]`),
};

export const cardSlice = createSlice({
  name: "CARD_SLICE",
  initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards = action.payload;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.cards));
    },
    removeCard: (state, action) => {
      let filteredArray = state.cards.filter((f) => f !== action.payload);
      state.cards = filteredArray;
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(filteredArray));
    },
    sortCards: (state) => {
      state.cards = state.cards.sort((a, b) => {
        return a - b;
      });
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(state.cards));
    },
  },
});

export default cardSlice.reducer;
