import { Alert, CircularProgress } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Gallery from '../../components/Gallery'
import { searchImages, selectSearchImages, selectSearchKeyword, selectStatusSearchImages } from './searchImagesSlice'

const SearchImages = () => {
  const dispatch = useDispatch()

  const searchKeyword = useSelector(selectSearchKeyword)
  const images = useSelector(selectSearchImages)
  const status = useSelector(selectStatusSearchImages)

  useEffect(() => {
    dispatch(searchImages({ searchKeyword}))
  }, [dispatch, searchKeyword])
  

 switch (status) {
    case 'fulfilled':
      return <Gallery images={images.results} />
    case 'error':
      return <Alert severity='error' sx={{ margin: '1rem 0' }}>No podemos conectar con el servidor. Inténtelo más tarde</Alert>
    case 'loading':
    default:
      return <CircularProgress sx={{ display: 'block', margin: '2rem auto' }} />
  }
}

export default SearchImages