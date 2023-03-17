import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

const Biding = () => {

  const [BidData, setBidData] = useState([]);
    useEffect(() => {
        userprofile();
    }, []);

    const userprofile = async () => {
        let result = await fetch("https://steel.smartyerp.in/api/method/steel.api.get_biding");
        let res = await result.json();
        console.log(res.data);
        setBidData(res.data);
    }

    return (
        <>
        <Card sx={{ ml: 15, mt: 12, pl: 3, pr: 3, width: 1100 }}>
  <Box style={{ display: "inline" }}>
  </Box>

  <Box sx={{ flexGrow: 1 }}>
    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

      {BidData.map((row, index) => (
        <Grid item xs={4} sm={4} md={4} key={index}>
          <div key={row.id} style={{ margin:"20px" }}>
            <Card variant="outlined" sx={{ width: 300 }}>
              <CardContent sx={{ textAlign: "center" }}>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                {row.requirement}
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
                  {row.bid_amount}
                </Typography>
                  <Typography color="text.secondary">
                  {row.bid_type}
                </Typography>
                <Typography variant="body2">
                  {row.bid_time_date}
                </Typography>
                <Typography variant="body2">
                 {row.user}
                </Typography>
                <Typography variant="body2">
                  {row.profile}
                </Typography> 
                {/* <Typography color="text.secondary">
                  {item.biding_uom}
                </Typography> */}
                {/* <Typography variant="body2">
                  {item.winning_bid}
                </Typography> */}
              </CardContent>
            </Card>
          </div>
        </Grid>
      ))}
    </Grid>
  </Box>
</Card>

        </>
    )
}

export default Biding;
