import React, { useEffect } from 'react'
import {useParams} from "react-router-dom"
import { useDispatch,useSelector } from "react-redux"
import { getStudent,clearStudent } from "../store/reducers/studentSlice"
import { Box, Button, Typography } from '@mui/material'
import { useNavigate,Link } from "react-router-dom"

const Detalse = () => {
    const {id} =useParams()
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(()=>{
        dispatch(getStudent(id))

        return ()=> {
            dispatch(clearStudent())
        }
    },[])

    const goBack = ()=>{
        navigate("/show")
    }

    const student = useSelector(state => state.student.student)
    const { name,email,roll,phone,address } = student;

    return (
        <div>
            <Box width="600px" boxShadow={5} padding={3} mx="auto" textAlign="center" mt="100px">
                <Typography variant="h3" color="deeppink">{name}</Typography>
                <Typography variant="h5">{email}</Typography>
                <Typography variant="h5">{roll}</Typography>
                <Typography variant="h5">{phone}</Typography>
                <Typography variant="h5" marginBottom="20px">{address}</Typography>
             
                <Button variant="contained" fullWidth onClick={goBack}>GO Back</Button>
            </Box>
        </div>
    )
}

export default Detalse
