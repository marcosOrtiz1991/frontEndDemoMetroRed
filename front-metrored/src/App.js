import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FormEspecialidades from './Components/FormEspecialidades'
import FormDoctores from './Components/FormDoctores'
import ListEpecialidades from './Components/ListEpecialidades'
import ListDoctores from './Components/ListDoctores'
import Container from '@mui/material/Container';
import Menu from './Components/Navbar'
import Footer from './Components/Footer'
import { useEffect, useState } from 'react'



function App() {
  const [url, setUrl] = useState({
  });
const loadEspecialidad = async (id) =>{
  const res = await fetch (`https://api.nasa.gov/planetary/apod?api_key=ZbRnfmI8LNcF6MzFVVVZVCmb5xEkLnxag0q8Uc6W`)
  const data = await res.json()
  setUrl(data)

};
const styles = {
  paperContainer: {
      backgroundImage: 'url('+url.hdurl+')'
  }
};
  useEffect(() => {
    loadEspecialidad()
  }, []);
  return (
    <Container style={styles.paperContainer} >
    <BrowserRouter >
      <Menu />
      <Container >
        <Routes>
          <Route path='/' element={<ListEpecialidades />} />
          <Route path='/listEspecialidades' element={<ListEpecialidades />} />
          <Route path='/createEspecialidades' element={<FormEspecialidades />} />
          <Route path='/editEspecialidades/:id' element={<FormEspecialidades />} />
          <Route path='/createDoctores' element={<FormDoctores />} />
          <Route path='/listDoctores' element={<ListDoctores />} />
          <Route path='/editDoctores/:id' element={<FormDoctores />} />
        </Routes>
      </Container>
    </BrowserRouter>
     </Container>
  )
}

export default App
