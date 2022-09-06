import { Box } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <footer>
      <Box component='footer' display='flex' justifyContent='center' p='1rem' backgroundColor='black' color='white' mt='auto'>
      <Box component='span' sx={{ alignText: 'center' }}>
        Jesús Gallardo &copy; 2022
      </Box>
    </Box>
    </footer>
  )
}

export default Footer