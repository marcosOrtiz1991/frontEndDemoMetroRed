import { BrowserRouter, Routes, Route } from 'react-router-dom'
import FormEspecialidades from './Components/FormEspecialidades'
import ListEpecialidades from './Components/ListEpecialidades'
import ListDoctores from './Components/ListDoctores'
import Container from '@mui/material/Container';
import Menu from './Components/Navbar'
import Footer from './Components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Container>
        <Routes>
          <Route path='/' element={<ListEpecialidades />} />
          <Route path='/createEspecialidades' element={<FormEspecialidades />} />
          <Route path='/listEspecialidades' element={<ListEpecialidades />} />
          <Route path='/editEspecialidades/:id' element={<FormEspecialidades />} />
          <Route path='/listDoctores' element={<ListDoctores />} />
        </Routes>
      </Container>
    </BrowserRouter>
    
  )
}

export default App
