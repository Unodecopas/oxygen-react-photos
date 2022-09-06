import { configureStore } from '@reduxjs/toolkit';
import searchImagesReducer from '../features/searchImages/searchImagesSlice';

export const store = configureStore({
  reducer: {
    searchImages: searchImagesReducer
  },
});
