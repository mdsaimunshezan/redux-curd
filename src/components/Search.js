import { Box, Container, Grid, Typography ,Button,TextField} from '@mui/material'
import React, { useState } from 'react'
import { useSelector,useDispatch } from "react-redux"
import { searchStudetn } from "../store/reducers/studentSlice"



const Search = () => {
    const [search,setSeatch] =useState("");

    const student = useSelector(state => state.student.userContainer)
    const dispatch = useDispatch();

    const filterItem = (e)=>{
        dispatch(searchStudetn(e.target.value))
    }
    return (
        <div>
            <Container maxWidth="md" sx={{marginTop:"50px"}}>
                <TextField placeholder="Seatch your item" color="secondary" fullWidth sx={{marginBottom:"50px"}} onChange={filterItem}/>
                <Grid container spacing={2} >
                { 
                        student.map(student => <Grid itme md={4}>
                                <Box border="1px solid deeppink" p={3}>
                                    <Typography variant="h5" color="deeppink">{student.name}</Typography>
                                    <Typography variant="h6">{student.email}</Typography>
                                    <Typography variant="h6">{student.roll}</Typography>
                                    <Typography variant="h6">{student.phone}</Typography>
                                    <Typography variant="h6" mb="20px">{student.address}</Typography>
                                    
                                   
                                </Box>
                            </Grid>
                        )
                    }
                </Grid>
                {search}
            </Container>

        </div>
    )
}

export default Search
