import { Box, AppBar, Container, Toolbar, Typography, Button } from "@mui/material";
import {Link, useNavigate} from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate()
  return (
    <Box sx={{flexGrow:1}}>
        <AppBar position='static' color='transparent'>
            <Container>
                <Toolbar>
                    <Typography sx={{flexGrow:1}}>
                    <Button  variant="contained" onClick={()=>navigate("/")}>
                        Inicio
                    </Button> 
                    </Typography>
                    
                    <Button  variant="contained" onClick={()=>navigate("/create")}>
                        Nuevo
                    </Button>
                </Toolbar>
            </Container> 
        </AppBar>
    </Box>
  )
}
