import { configureStore } from '@reduxjs/toolkit';
import favImagesReducer from '../features/favImages/favImagesSlice';
import searchImagesReducer from '../features/searchImages/searchImagesSlice';

export const store = configureStore({
  reducer: {
    searchImages: searchImagesReducer,
    favImages: favImagesReducer
  },
});
