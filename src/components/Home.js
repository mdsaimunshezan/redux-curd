import { Box, Button, Typography } from '@mui/material';
import React, { useState ,useEffect} from 'react';

const Home = () => {
  

    return (
        <div>
            <Box bgcolor="lightgray" width="700px" mx="auto" p="30px" mt="150px" textAlign="center">
                <Typography color="deeppink" variant="h3" fontWeight="bold" marginBottom="20px"> Welcome to Student App</Typography>
                <Typography variant="title" mt="20px">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim dicta ducimus sit, reiciendis error nihil sed, quia recusandae impedit cupiditate mollitia exercitationem optio unde et eum.
                </Typography>
                <Button variant="contained" sx={{background:"deeppink",marginTop:"30px"}}>Learn More</Button>
            </Box>
        </div>
    )
}

export default Home
