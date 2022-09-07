import React from 'react'
import {useSelector } from 'react-redux'
import Gallery from '../components/Gallery'

import { selectFavImages } from '../features/favImages/favImagesSlice'

const Favorites = () => {
  const {favImages} = useSelector(selectFavImages)
  console.log(favImages);
  return (
    <>
      <Gallery images={favImages}/>
    </>
  )
}

export default Favorites