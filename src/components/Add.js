import { Box, Button, TextField } from '@mui/material'
import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { useDispatch } from "react-redux"
import {addStudents} from "../store/reducers/studentSlice"

const Add = () => {
    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [roll,setRoll] =useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress] =useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
        e.preventDefault();
        const newStudent = {
            id:uuidv4(),
            name,
            email,
            roll,
            phone,
            address
        }
        dispatch(addStudents(newStudent))

        //Reset
        setName("")
        setEmail("")
        setRoll("")
        setPhone("")
        setAddress("")
    }
    return (
        <div>
            <Box width="600px" boxShadow={5} p={3} mx="auto" mt="50px">
               <form onSubmit={handleSubmit}>
               <TextField fullWidth size="small" color="secondary" placeholder="Enter your name" sx={{marginBottom:"20px"}} onChange={(e)=>setName(e.target.value)} value={name}/>
                <TextField fullWidth size="small" color="secondary"  placeholder="Enter your Email" sx={{marginBottom:"20px"}} onChange={(e)=>setEmail(e.target.value)} value={email}/>
                <TextField fullWidth size="small" color="secondary"  placeholder="Enter your Roll" sx={{marginBottom:"20px"}} onChange={(e)=>setRoll(e.target.value)} value={roll}/>
                <TextField fullWidth size="small" color="secondary"  placeholder="Enter your Phone" sx={{marginBottom:"20px"}} onChange={(e)=>setPhone(e.target.value)} value={phone}/>
                <TextField fullWidth size="small" color="secondary"  placeholder="Enter your Address" sx={{marginBottom:"20px"}} onChange={(e)=>setAddress(e.target.value)} value={address}/>
                <Button color="secondary" fullWidth variant="contained" type="submit">Submit</Button>
               </form>
            </Box>
        </div>
    )
}

export default Add
