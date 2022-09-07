import React from 'react';
import { Box, Container, createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import Header from './components/Header';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Search from './pages/Search';
import Favorites from './pages/Favorites';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
function App() {
  return (
     <ThemeProvider theme={darkTheme}>
    <Box className='app' height='100vh' display='flex' flexDirection='column' justifyContent='space-between'>
      <CssBaseline />
      <Header />
      <main>
        <Container maxWidth='lg'>
          <Routes>
            <Route path='/*' element={<Search />} />
            <Route path='/favorites' element={<Favorites />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Box>
    </ThemeProvider>
  );
}

export default App;
