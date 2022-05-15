import { Box, Card, Container, Toolbar, Typography, Button, Grid, CardContent, TextField } from "@mui/material";
import { Link, useNavigate, use , useParams} from 'react-router-dom';
import {useState,useEffect} from 'react'

export default function FormEspecialidades() {

  const [name, setName] = useState({
  });

  const [editing, setEditing]= useState(false);

  const navigate = useNavigate();
  const params = useParams();

  const sendForm = async (e) =>{
    e.preventDefault();

    
if(editing){
  
await fetch (`https://back-end-metrored.herokuapp.com/update/${params.id}`,{
  method: "PUT",
  headers: {"Content-Type":"application/json"},
  body: JSON.stringify(name),
})
}else{
  console.log(JSON.stringify(name))
   await fetch ('https://back-end-metrored.herokuapp.com/create',{
    method: 'POST',
    body: JSON.stringify(name),
    headers: {"Content-Type":"application/json"}
  })
}
    setEditing(true)
    navigate('/')
  };

  const addDatos = e =>{
    setName ({...name,[e.target.name]:e.target.value});
    
  }

  const loadEspecialidad = async (id) =>{
    const res = await fetch (`https://back-end-metrored.herokuapp.com/listOne/${id}`)
    const data = await res.json()
    const nombre = data[0].esp_nombre;

    setName ({name: nombre});
    setEditing(true)
  };

  useEffect (()=>{
    if(params.id){
      loadEspecialidad(params.id)
    }
    
  },[params.id])

  return (
    <Grid container direction="colum" alignItems="center" justifyContent="center">
      <Grid item xs={3}>
        <Card sx={{ mt: 3 }}>
          <CardContent>
            <form onSubmit={sendForm}>
              <label>Nombre de la especialidad</label>
              <TextField
                variant='filled'
                placeholder={name.name}
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
