import { Box, TextField } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setSearchKeyword } from '../features/searchImages/searchImagesSlice'

const Search = () => {
  const dispatch = useDispatch()
  return (
    <>
      <Box mt='2rem'>
        <Box mt='1rem'>
          <TextField fullWidth label='Search...' id='searchKeyword' onChange={e => dispatch(setSearchKeyword(e.target.value))} />
        </Box>
      </Box>
    </>
  )
}

export default Search