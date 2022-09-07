import { Box, IconButton, ImageList, ImageListItem, Modal, TextField } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import DownloadIcon from '@mui/icons-material/Download';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { toggleFavorite, updateFavorite } from '../features/favImages/favImagesSlice'

const Gallery = ({images, favGallery}) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedImg, setSelectedImg] = useState('')
  const dispatch = useDispatch()
  const handleModal = (img) =>{
    setSelectedImg(img)
    setShowModal(true)
  }
  const handleFavorite = () => {
    const data = {
      id: selectedImg.id,
      description: selectedImg.description,
      width: selectedImg.width,
      height: selectedImg.height,
      likes: selectedImg.likes,
      urls:{
        full: selectedImg.urls.full,
        thumb: selectedImg.urls.thumb
      },
      date: new Date().toLocaleString().toString()
    }
    dispatch(toggleFavorite(data))
  }
  
  const closeModal = () => {
    if (favGallery){
      dispatch(updateFavorite(selectedImg))
    }
    setShowModal(false)
  }
  const downloadImage = (img) => {
  fetch(img.urls.full)
    .then(response => response.blob())
    .then(blobObject => {
      const blob = window.URL.createObjectURL(blobObject)
      const anchor = document.createElement('a')
      anchor.style.display = 'none'
      anchor.href = blob
      anchor.download = `${img.id}`
      document.body.appendChild(anchor)
      anchor.click()
      window.URL.revokeObjectURL(blob)
    })
    .catch(() => console.log('No se ha podido descargar la imagen.'))
  }
  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90%',
  maxWidth:'600px',
  maxHeight: '600px',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  display: 'flex',
  flexDirection: 'column',
  boxShadow: 24,
  p: 4,
};

  return (
    <>
      <ImageList cols={3} variant='quilted' rowHeight={240}>
        {
          images.map(img => (
            <ImageListItem key={img.id}>
              <img
                src={`${img.urls.thumb}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${img.urls.thumb}?w=164&h=164&fit=crop&auto=format`}
                alt={img.title}
                loading="lazy"
                onClick={()=> handleModal(img)}
              />
            </ImageListItem>
        ))
      }
      </ImageList>
      {
        selectedImg && 
        <Modal
          open={showModal}
          onClose={closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img
              src={`${selectedImg.urls.full}`}
              alt={selectedImg.title}
              style={{maxHeight:'300px'}}
            />
            <Box>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ padding: '.5rem' }}
                onClick={handleFavorite}
              >
                <FavoriteIcon />
              </IconButton>
              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                sx={{ padding: '.5rem' }}
                onClick={()=>downloadImage(selectedImg)}
              >
                <DownloadIcon />
              </IconButton>
            </Box>
            <Box>
              <p>Width: {selectedImg.width + 'px'} Height: {selectedImg.height + 'px'}</p>
              <p>Likes: {selectedImg.likes}</p>
              {!favGallery && <p>Description: {selectedImg.description}</p>}
                {
                  favGallery && <p>Fecha: {selectedImg.date.toLocaleString('es-ES')}</p>
                }
                {
                  favGallery && <TextField fullWidth label='Description' id='description' value={selectedImg.description || ''}
                  onChange={e => setSelectedImg({...selectedImg, description: e.target.value})}
              />
                }
              
            </Box>
          </Box>
        </Modal>
      }
        
    </>
  )
}

export default Gallery