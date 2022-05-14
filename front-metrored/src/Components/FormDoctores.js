import { Box, Card, Container, Toolbar, Typography, Button, Grid, CardContent, TextField } from "@mui/material";
import { Link, useNavigate, use, useParams } from 'react-router-dom';
import { useState, useEffect } from 'react'

export default function FormDoctores() {

    const [doctor, setDoctor] = useState({
        doc_nombre:"",
        doc_cedula:'',
        doc_foto:'',
        doc_ciudad:'',
        doc_especialidad:'',

    });

    const [editing, setEditing] = useState(false);

    const navigate = useNavigate();
    const params = useParams();

    const sendForm = async (e) => {
        e.preventDefault();


        if (editing) {

            await fetch(`http://localhost:4000/doctor/update/${params.id}`, {
                method: "PUT",
                body: JSON.stringify(doctor),
                headers: { "Content-Type": "application/json" },
            })
        } else {
            console.log(JSON.stringify(doctor))
            await fetch('http://localhost:4000/doctor/create', {
                method: 'POST',
                body: JSON.stringify(doctor),
                headers: { "Content-Type": "application/json" }
            })
        }
        setEditing(true)
        navigate('/listDoctores')
    };

    const addDatos = e => {
        console.log (e.target.name, e.target.value)
        setDoctor({ ...doctor, [e.target.name]: e.target.value });

    }

    const loadDoctor = async (id) => {
        const res = await fetch(`http://localhost:4000/doctor/listOne/${id}`)
        const data = await res.json()
        const nombre = data.doc_nombre;
        console.log(data)
        setDoctor({
            value:'',
             doc_nombre:data.doc_nombre,
             doc_cedula:data.doc_cedula,
             doc_foto:data.doc_foto,
             doc_ciudad:data.doc_ciudad,
             doc_especialidad:data.doc_especialidad
            
            });
        setEditing(true)
    };

    useEffect(() => {
        if (params.id) {
            loadDoctor(params.id)
        }

    }, [params.id])

    return (
        <Grid container direction="colum" alignItems="center" justifyContent="center">
            <Grid item xs={3}>
                <Card sx={{ mt: 3 }}>
                    <CardContent>
                        <form onSubmit={sendForm}>
                            <label>Ingrese los siguientes datos</label>
                            <TextField
                                variant='filled'
                                name="doc_nombre"
                                label='Nombre'
                                value={doctor.doc_nombre}
                                onChange={addDatos}
                                sx={{
                                    display: 'blok',
                                    margin: '.5rem 0'
                                }}
                            />
                            <TextField
                                variant='filled'
                                placeholder={doctor.doc_cedula}
                                name="doc_cedula"
                                label='Cédula'
                                onChange={addDatos}
                                value= {doctor.doc_cedula}
                                
                                sx={{
                                    display: 'blok',
                                    margin: '.5rem 0'
                                }}
                            />
                            <TextField
                                variant='filled'
                                name="doc_ciudad"
                                label='Ciudad'
                                onChange={addDatos}
                                value= {doctor.doc_ciudad}
                                sx={{
                                    display: 'blok',
                                    margin: '.5rem 0'
                                }}
                            />

                            <TextField
                                variant='filled'
                                name="doc_especialidad"
                                label='Especialidad'
                                onChange={addDatos}
                                value={doctor.doc_especialidad}
                                sx={{
                                    display: 'blok',
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
