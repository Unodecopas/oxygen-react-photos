import { ImageList, ImageListItem } from '@mui/material'
import React from 'react'

const Gallery = ({images}) => {
  console.log(images)
  return (
    <>
      <ImageList cols={3} variant='quilted' rowHeight={240}>
        {
          images.results.map(img => (
            <ImageListItem key={img.id}>
              <img
                src={`${img.urls.full}?w=164&h=164&fit=crop&auto=format`}
                srcSet={`${img.urls.full}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
                alt={img.title}
                loading="lazy"
              />
            </ImageListItem>
        ))
      }
      </ImageList>
    </>
  )
}

export default Gallery