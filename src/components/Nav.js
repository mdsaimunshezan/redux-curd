import React from 'react';
import { AppBar, Box, Button, Toolbar, Typography } from "@mui/material"
import { Link } from "react-router-dom"


const Nav = () => {
    return (
        <div>
         
                <AppBar position="static">
                    <Toolbar>
                        <Typography sx={{flexGrow:1}}>Student Management</Typography>
                        <Button color="inherit" as={Link} to="/home" sx={{textDecoration:"none"}}>Home</Button>
                        <Button color="inherit"  as={Link} to="/added" sx={{textDecoration:"none"}}>Add</Button>
                        <Button color="inherit"  as={Link} to="/show" sx={{textDecoration:"none"}}>Show</Button>
                        <Button color="inherit"  as={Link} to="/edit" sx={{textDecoration:"none"}}>Edit</Button>
                        <Button color="inherit"  as={Link} to="/delete" sx={{textDecoration:"none"}}>Delete</Button>
                        <Button color="inherit"  as={Link} to="/search" sx={{textDecoration:"none"}}>Search</Button>
                    </Toolbar>

                </AppBar>
              
        </div>
    )
}

export default Nav
