import { Box, Container, Grid, Typography ,Button} from '@mui/material'
import React from 'react'
import { useSelector,useDispatch } from "react-redux"
import {deleteSutdent} from "../store/reducers/studentSlice"
import {Link} from "react-router-dom"



const Delete = () => {

    const student = useSelector(state => state.student.students)
    const dispatch = useDispatch();

    const deleteItem = (id)=>{
        dispatch(deleteSutdent(id))
    }
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
                                  
                                   <Button variant="contained" fullWidth onClick={()=>deleteItem(student.id)} sx={{background:"deeppink"}}>Delete</Button>
                             
                                  
                                  
                                   
                                </Box>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>

        </div>
    )
}

export default Delete;
