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
    toggleFavorite: (state, action ) => {
      const favImages = state.favImages.filter(fav => fav.id === action.payload.id)
      favImages.length === 0
        ? state.favImages = [...state.favImages, action.payload]
        : state.favImages = state.favImages.filter(fav => fav.id !== action.payload.id)
      
      editFavoritesLocal(state.favImages)
    },
    updateFavorite: (state, action) => {
      const favImages = state.favImages.filter(fav => fav.id !== action.payload.id)
      favImages.push(action.payload)
      state.favImages = favImages
      editFavoritesLocal(state.favImages)
    },
    orderFavorites: (state, action) =>{
      const favImages = state.favImages.sort((a,b) => b[action.payload] - a[action.payload])
      state.favImages = favImages
    }
  },


})

export const selectFavImages = (state) => state.favImages
export const {toggleFavorite, updateFavorite, orderFavorites} = favImagesSlice.actions
export default favImagesSlice.reducer