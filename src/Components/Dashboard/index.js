import React from "react";
import Box from '@mui/material/Box';
import {Card } from "@mui/material";




const Dashboard =()=>{

    return(
        <Card  maxWidth="lg"  sx={{ ml: 15, mt:12, p:1}}>
        <Box style={{display:"inline"}}>
        <h2 style={{ textAlign: "start", fontFamily: "initial",fontWeight:"bold",float:"left", margin:"15px"}}>Dashboard Page</h2>
   
       </Box>
       
        </Card>
    )
}

export default Dashboard;