import { Typography, Link } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
        <Link component={RouterLink} to='/' underline='none' color='white'>
          OXYGEN PHOTOS
        </Link>
      </Typography>
    </header>
  )
}

export default Header