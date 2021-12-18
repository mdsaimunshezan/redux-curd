import { Box, Container, Grid, Typography ,Button} from '@mui/material'
import React from 'react'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"


const Show = () => {

    const student = useSelector(state => state.student.students)
    return (
        <div>
            <Container maxWidth="xl" sx={{marginTop:"50px"}}>
                <Grid container spacing={2}>
                { 
                        student.map(student => <Grid itme md={4} >
                                <Box border="1px solid deeppink" p={3}>
                                    <Typography variant="h5" color="deeppink">{student.name}</Typography>
                                    <Typography variant="h6">{student.email}</Typography>
                                    <Typography variant="h6">{student.roll}</Typography>
                                    <Typography variant="h6">{student.phone}</Typography>
                                    <Typography variant="h6" mb="20px">{student.address}</Typography>
                                    <Link to={`/detalse/${student.id}`}>
                                    <Button variant="contained" fullWidth sx={{background:"deeppink"}}>DETALSE</Button>
                                    </Link>
                                   
                                </Box>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>

        </div>
    )
}

export default Show
