import { Box, IconButton, ImageList, ImageListItem, Modal} from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import React, { useState } from 'react'

const Gallery = ({images}) => {
  const [showModal, setShowModal] = useState(false)
  const [selectedImg, setSelectedImg] = useState('')

  const handleModal = (img) =>{
    console.log(img);
    setSelectedImg(img)
    setShowModal(true)
  }
  const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 'fit-content',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  justifyContent:'center',
  alignItems:'center',
  placeItems:'center',
  p: 4,
};

  return (
    <>
      <ImageList cols={3} variant='quilted' rowHeight={240}>
        {
          images.results.map(img => (
            <ImageListItem key={img.id}>
              <img
                src={`${img.urls.thumb}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${img.urls.thumb}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
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
          onClose={()=>setShowModal(false)}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <img
              src={`${selectedImg.urls.full}?w=600&h=600&fit=crop&auto=format`}
              srcSet={`${selectedImg.urls.full}?w=600&h=600&fit=crop&auto=format&dpr=2 2x`}
              alt={selectedImg.title}
            />
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              aria-label='menu'
              sx={{ padding: '.5rem' }}
            >
              <FavoriteIcon />
            </IconButton>
          </Box>
        </Modal>
      }
        
    </>
  )
}

export default Gallery