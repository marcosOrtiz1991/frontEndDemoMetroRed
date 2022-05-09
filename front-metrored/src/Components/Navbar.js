import { Box, AppBar, Container, Toolbar, Typography, Button } from "@mui/material";
import {Link, useNavigate} from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate()
  return (
    <Box >
        <AppBar position='static' color='transparent'>
            <Container>
                <Toolbar>
                    <Button sx={{margin:2}} variant="outlined" onClick={()=>navigate("/")} >
                        Inicio
                    </Button> 
                    <Button sx={{margin:2}} variant="outlined" onClick={()=>navigate("/listEspecialidades")}>
                        Especialidades
                    </Button>
                    <Button sx={{margin:2}} variant="outlined" onClick={()=>navigate("/listDoctores")}>
                        Doctores
                    </Button>
                </Toolbar>
            </Container> 
        </AppBar>
    </Box>
  )
}
