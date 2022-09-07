import { Typography, Link, Box, AppBar, Toolbar } from '@mui/material'
import React from 'react'
import { Link as RouterLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
      <Typography variant='h6' component='div' sx={{flexGrow:1}}>
        <Link component={RouterLink} to='/' underline='none' color='white' >
          OXYGEN PHOTOS
        </Link>
        
      </Typography>
      <Typography variant='h6' component='div'>
        <Link component={RouterLink} to='/favorites' underline='none' color='white'>
          My Photos
        </Link>
      </Typography>
      </Toolbar>
      </AppBar>
      </Box>
    </header>
  )
}

export default Header