import { TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useSelector } from 'react-redux'
import Gallery from '../components/Gallery'

import { selectFavImages } from '../features/favImages/favImagesSlice'

const Favorites = () => {
  const {favImages} = useSelector(selectFavImages)
  const [filter, setFilter] = useState('')
  const [filteredFavs, setFilteredFavs] = useState([])

  useEffect(()=>{
    const filtered = favImages.filter(fav => fav.description?.toLowerCase().search(filter.toLowerCase()) !== -1)
    setFilteredFavs(filtered)
  },[filter, favImages])
  
  return (
    <>
    <TextField fullWidth label='Search by Description' id='filter' value={filter}
          onChange={e => setFilter(e.target.value)} />
      <Gallery images={filteredFavs.length !== 0 ? filteredFavs : favImages} favGallery/>
    </>
  )
}

export default Favorites