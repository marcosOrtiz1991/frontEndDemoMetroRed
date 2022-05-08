import {BrowserRouter,Routes,Route} from 'react-router-dom'
import FormEspecialidades from './Components/FormEspecialidades'
import ListEpecialidades from './Components/ListEpecialidades'
import Container from '@mui/material/Container';
import Menu from './Components/Navbar'

function App() {
  return (
   <BrowserRouter>
   <Menu />
   <Container>
     <Routes>
      <Route path='/' element={<ListEpecialidades />} /> 
      <Route path='/create' element={<FormEspecialidades />} /> 
    </Routes>
    </Container>
   </BrowserRouter>
  )
}

export default App
