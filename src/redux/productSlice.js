// src/redux/productSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    {
      id: 1,
      name: "Raju RassiBomb",
      img: "/path-to-image.jpg", // Use proper image path
    },
    {
      id: 2,
      name: "Ladiyon Ki Rani Chani",
      img: "/path-to-image.jpg", // Use proper image path
    },
  ],
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export default productSlice.reducer;
