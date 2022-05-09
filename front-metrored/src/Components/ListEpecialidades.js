import { Box, CardContent, Container, Toolbar, Typography, Button, Card } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'


export default function ListEspecialidades() {
  const navigate = useNavigate();
  const [especialidad, setEspecialidad] = useState([])

  const cargarEspecialidades = async () => {
    const response = await fetch('https://backendmetrored.herokuapp.com/list')
    const data = await response.json()
    setEspecialidad(data);
  }

  const eliminarEspecialidad = async (id) => {
    console.log(id)
    const res = await fetch('https://backendmetrored.herokuapp.com/delete/' + id, {
      method: "DELETE",

    })
    setEspecialidad(especialidad.filter (especialidad => especialidad.esp_id != id));
    
  }

  useEffect(() => {
    cargarEspecialidades()
  }, []);

  return (
    <>
      <conteiner>
        <Button sx={{ margin: 2 }} variant="outlined" onClick={() => navigate("/createEspecialidades")} >
          Nuevo
        </Button>
      </conteiner>
      {
        especialidad.map(especialidad => (
          <Card style={{
            marginBottom: "0.7rem",
            backgroundColor: '#ADD8E6'
          }}
          key = {especialidad.esp_id}
          >
          
            <CardContent style={{
              display: "flex",
              justifyContent: "space-between"
            }}>
              <div>
                <Typography style={{ color: "black" }}>{especialidad.esp_nombre}</Typography>
              </div>
              <div>
                <Button variant='contained' color='info' onClick={() => navigate("/editEspecialidades/"+especialidad.esp_id)} >
                  Edit
                </Button>
                <Button variant='contained' color='warning' onClick={() => eliminarEspecialidad(especialidad.esp_id)} style={{ marginLeft: "0.5rem" }}>
                  Delete
                </Button>
              </div>

            </CardContent>
          </Card>

        ))
      }
    </>
  )

}  
