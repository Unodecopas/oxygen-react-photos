import { Box, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import SearchImages from '../features/searchImages/SearchImages'
import { setSearchKeyword } from '../features/searchImages/searchImagesSlice'

const Search = () => {
  const dispatch = useDispatch()
  return (
    <>
      <Box mt='2rem'>
        <Box mt='1rem'>
          <TextField fullWidth label='Search...' id='searchKeyword' 
          onChange={e => setTimeout(()=>{
            dispatch(setSearchKeyword(e.target.value))
          },1000)} />
        </Box>
        <SearchImages />
      </Box>
    </>
  )
}

export default Search