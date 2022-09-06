import { createSlice } from "@reduxjs/toolkit";

const getFavoritesLocal = () => {
  const favs = localStorage.getItem('favPhotos')
  return favs ? JSON.parse(favs) : []
}
const editFavoritesLocal = (image) => {
  localStorage.setItem('favPhotos', JSON.stringify(image))
}
export const favImagesSlice = createSlice({
  name: 'favImages',
  initialState: {
    favImages : getFavoritesLocal()
  },
  reducers:{
    addFavorite: (state, action ) => {
      state.favImages = [...state.favImages, action.payload]
      editFavoritesLocal(state.favImages)
    }
  },


})

export const selectFavImages = (state) => state.favImages
export const {addFavorite} = favImagesSlice.actions
export default favImagesSlice.reducer