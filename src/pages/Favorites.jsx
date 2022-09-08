import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector } from 'react-redux'
import Gallery from '../components/Gallery'

import { orderFavorites, selectFavImages } from '../features/favImages/favImagesSlice'

const Favorites = () => {
  const {favImages} = useSelector(selectFavImages)
  const [filter, setFilter] = useState('')
  const [filteredFavs, setFilteredFavs] = useState([])
  const [order, setOrder] = useState('likes')
  const dispatch = useDispatch()
 
  useEffect(()=>{
    const filtered = favImages.filter(fav => fav.description?.toLowerCase().search(filter.toLowerCase()) !== -1)
    setFilteredFavs(filtered)
  },[filter, favImages])

  useEffect(()=>{
    dispatch(orderFavorites(order))
  },[order, dispatch])
  
 
  return (
    <>
      <TextField fullWidth label='Search by Description' id='filter' value={filter}
          onChange={e => setFilter(e.target.value)} />
      <FormControl sx={{marginTop: '20px'}}>
        <InputLabel id="selectOrderLabel">Order by</InputLabel>
        <Select labelId="selectOrderLabel" id="selectOrder" value={order} label="Order by" onChange={(e) => setOrder(e.target.value)}>
          <MenuItem value="width">Width</MenuItem>
          <MenuItem value="height">Height</MenuItem>
          <MenuItem value="likes">Likes</MenuItem>
          <MenuItem value="date">Date</MenuItem>
        </Select>
      </FormControl>
      <Gallery images={filteredFavs.length !== 0 ? filteredFavs : favImages} favGallery/>
    </>
  )
}

export default Favorites