import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { useParams } from "react-router-dom";

const ViewBiding = () => {
  const params = useParams();

  const [BidData, setBidData] = useState([]);
    useEffect(() => {
        userprofile();
    }, []);

    const userprofile = async () => {
        let result = await fetch(`https://steel.smartyerp.in/api/method/steel.api.get_bids_by_requirement?requirement=${params.id}`);
        let res = await result.json();
        console.log(res.message);
        setBidData(res.message);
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
                {row.bid_amount}
                </Typography>
                <Typography sx={{ mb: 1.5 }} variant="h5" component="div">
                  {row.name}
                </Typography>
                  <Typography color="text.secondary">
                  {row.status}
                </Typography>
                <Typography variant="body2">
                  {row.biding_uom}
                </Typography>
                <Typography variant="body2">
                 {row.winning_bid}
                </Typography>
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

export default ViewBiding;
