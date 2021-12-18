import React, { useEffect,useState } from 'react'
import { Box, Button, TextField } from '@mui/material'
import { useParams } from "react-router-dom"
import { useSelector,useDispatch } from "react-redux"
import { getStudent,upadteStudent,clearStudent } from "../store/reducers/studentSlice"
import { v4 as uuidv4 } from 'uuid';


const MyEdit = () => {
    const { id } = useParams(); 
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(getStudent(id))
        return ()=> {
            dispatch(clearStudent())
        }
    },[])

  

        const student = useSelector(state => state.student.student)
   
    

    const [name,setName] =useState("");
    const [email,setEmail] =useState("");
    const [roll,setRoll] =useState("");
    const [phone,setPhone]=useState("");
    const [address,setAddress] =useState("");

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
        dispatch(upadteStudent(newStudent))

        //Reset
        // setName("")
        // setEmail("")
        // setRoll("")
        // setPhone("")
        // setAddress("")
    }

    return (
        <div>
             <Box width="600px" boxShadow={5} p={3} mx="auto" mt="50px">
               <form onSubmit={handleSubmit}>
               <TextField fullWidth size="small" color="secondary" placeholder="Enter your name" sx={{marginBottom:"20px"}} d onChange={(e)=>setName(e.target.value)} defaultValue={student?.name}/>
                <TextField fullWidth size="small" color="secondary"  placeholder="Enter your Email" sx={{marginBottom:"20px"}}  defaultValue={student?.email}  onChange={(e)=>setEmail(e.target.value)} />
                <TextField fullWidth size="small" color="secondary"  placeholder="Enter your Roll" sx={{marginBottom:"20px"}} onChange={(e)=>setRoll(e.target.value)} defaultValue={student?.roll}/>
                <TextField fullWidth size="small" color="secondary"  placeholder="Enter your Phone" sx={{marginBottom:"20px"}} onChange={(e)=>setPhone(e.target.value)} defaultValue={student?.phone}/>
                <TextField fullWidth size="small" color="secondary"  placeholder="Enter your Address" sx={{marginBottom:"20px"}} onChange={(e)=>setAddress(e.target.value)} defaultValue={student?.address}/>
                <Button color="secondary" fullWidth variant="contained" type="submit">Submit</Button>
               </form>
            </Box>
            {name}
        </div>
    )
}

export default MyEdit
