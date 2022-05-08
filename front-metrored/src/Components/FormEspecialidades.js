import { Box, Card, Container, Toolbar, Typography, Button, Grid, CardContent, TextField } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import {useState,useEfect} from 'react'

export default function FormEspecialidades() {

  const [name, setName] = useState({
   

  })

  const sendForm = e =>{
    console.log(name)
    e.preventDefault();
    
  }

  const addDatos = e =>{
    setName ({...name,[e.target.name]:e.target.value});
  }

  return (
    <Grid container direction="colum" alignItems="center" justifyContent="center">
      <Grid item xs={3}>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <form onSubmit={sendForm}>
              <TextField
                variant='filled'
                label="Nombre de especialidad"
                name="nombre"
                onChange={addDatos}
                sx={{
                  display : 'blok',
                  margin: '.5rem 0' 
                }}
  
              />
              <Button type="submit">
                Guardar
              </Button>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  )
}
