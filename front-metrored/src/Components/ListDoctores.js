import { Box, CardContent, Container, Toolbar, Typography, Button, Card } from "@mui/material";
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'


export default function ListEspecialidades() {
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState([])
  const [especilidad, setEspecilidad] = useState([])

  const cargarDoctor = async () => {
    const response = await fetch('http://localhost:4000/doctor/list')
    const data = await response.json()
    setDoctor(data);
  }

  const loadEspecialidad = async (id) =>{
    const res = await fetch (`http://localhost:4000/doctor/listOne/${id}`)
    const data = await res.json()
    const nombre = data[0].esp_nombre;

    setEspecilidad ({especilidad: nombre});
  };

  const eliminarDoctor = async (id) => {
    const res = await fetch('http://localhost:4000/doctor/delete/' + id, {
      method: "DELETE",

    })
    setDoctor(doctor.filter (doctor => doctor.doc_id != id));
    
  }

  useEffect(() => {
    cargarDoctor()
  }, []);

  return (
    <>
      <conteiner>
        <Button sx={{ margin: 2 }} variant="outlined" onClick={() => navigate("/createDoctores")} >
          Nuevo
        </Button>
      </conteiner>
      {
        doctor.map(doctor => (
            
          <Card style={{
            marginBottom: "0.7rem",
            backgroundColor: '#ADD8E6'
          }}
          key = {doctor.doc_id}
          >
          
            <CardContent style={{
              display: "flex",
              justifyContent: "space-between"
            }}>
              <div>
                <Typography style={{ color: "black" }}>{doctor.doc_nombre}</Typography>
                <Typography style={{ color: "black" }}>{doctor.doc_cedula}</Typography>
                <Typography style={{ color: "black" }}>{doctor.doc_ciudad}</Typography>
                <Typography style={{ color: "black" }}  > {doctor.doc_especialidad}</Typography>
              </div>
              <div>
                <Button variant='contained' color='info' onClick={() => navigate("/editDoctores/"+doctor.doc_id)} >
                  Edit
                </Button>
                <Button variant='contained' color='warning' onClick={() => eliminarDoctor(doctor.doc_id)} style={{ marginLeft: "0.5rem" }}>
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
