import { Box, AppBar, Container, Toolbar, Typography, Button, Grid } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';

export default function ListEspecialidades() {
  const navigate = useNavigate()
  return (
    <conteiner>
      <Button sx={{ margin: 2 }} variant="outlined" onClick={() => navigate("/createEspecialidades")} >
        Nuevo
      </Button>
    </conteiner>
  )
}
