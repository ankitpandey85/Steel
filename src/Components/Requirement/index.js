// import { useState, useEffect } from 'react';
// import { Card, CardContent, Typography } from '@mui/material';
// import Button from '@mui/material/Button';
// import { Box } from '@mui/system';


// export default function Requirement() {
//   const [requirementData, setRequirementData] = useState([]);
//   const [inputData, setInputData] = useState("");

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await fetch("https://steel.smartyerp.in/api/method/steel.api.get_requirement");
//       const res = await result.json();
//       setRequirementData(res.data);

//     };
//     fetchData();
//   }, []);

// const InputFieldData = (e) => { 
//   console.log("console:", e.target.value);
//   setInputData(e.target.value);
// };

// const BidNewData = async (amount) => {
//   console.log("console:", amount);

//   try {
//     const response = await fetch(
//       "https://steel.smartyerp.in/api/method/steel.api.create_new_bid",
//       {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           amount: amount
//         }),
//       }
//     );
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// };
//   return (
//     <Box>
//       <Card sx={{ ml:12, mb:1, pb:5, pl:3, pr:3, width:"1100px"}}>
//         <div style={{ display: "flex", flexWrap: "wrap" }}>
//           {requirementData.map((row) => (
//             <div key={row.name} style={{ flex: "1", display: "flex", flexWrap: "wrap" }}>
//               <Card sx={{ width: "300px", mt:3,ml:3,background:"aliceBlue" }}>
//                 <CardContent>
//                   <Typography variant="h6" component="div">
//                     {row.name}
//                   </Typography>
//                   <Typography variant="body2">
//                     {row.requirement_type}
//                   </Typography>
//                   <Typography variant="body2">
//                     Uom: {row.uom}
//                   </Typography>
//                   <Typography variant="body2">
//                     Status: {row.status}
//                   </Typography>
//                   <Typography variant="body2">
//                     Date: {row.date}
//                   </Typography>
//                   <Typography variant="body2">
//                     Validity: {row.expiration_date}
//                   </Typography>
//                   <form onSubmit={BidNewData}>
//                     <Typography variant="body2" style={{display:"inline"}}>
//                   <Button type='submit' style={{textDecoration:"none",marginTop:"10px", float:"right"}} variant="contained">Bid</Button>
//                       <input
//                         onChange={InputFieldData}
//                         placeholder="Amount"
//                         type="text"
//                         style={{float:"left",marginTop:"10px", border:"none", width:"120px", height:"25px"}} />
//                     </Typography>
//                   </form>
//                 </CardContent>
//               </Card>
//             </div>
//           ))}
//         </div>
//       </Card>
//     </Box>
//   );
// }



import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { Box } from '@mui/system';
import { useNavigate, Link } from 'react-router-dom';

export default function Requirement() {
  const [requirementData, setRequirementData] = useState([]);
  const [bid_amount, setBid_Amount] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetch("https://steel.smartyerp.in/api/method/steel.api.get_requirement");
      const res = await result.json();
      setRequirementData(res.data);
    };
    fetchData();
  }, []);

  const InputFieldData = (e) => { 
    setBid_Amount(e.target.value);
  };

  const BidNewData = async (e, row) => {
    e.preventDefault();
    console.log(bid_amount);
    try {
      const response = await fetch(
        "https://steel.smartyerp.in/api/method/steel.api.create_new_bid",
        {
          method: "POST",
          body: JSON.stringify({
            bid_amount: bid_amount,
            requirement: row.name,
            bid_time_date: row.date,
            user : "ca.mohit.chechani@gmail.com",
            profile:8875627151,
          }),
          headers: {
            "Content-Type": "application/json"
          } 
        }

      );
      const data = await response.json();
      console.log(data);
      navigate('/biding');

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box sx={{ mt:10,ml:12, mb:1, pb:5, pl:3, pr:3, width:"1100px"}}>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        {requirementData.map((row) => (
          <div key={row.name} style={{ flex: "1", display: "flex", flexWrap: "wrap", margin: "10px" }}>
            <div style={{ background: "aliceBlue", padding: "10px", borderRadius: "5px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)", width: "300px" }}>
              <h3 style={{ margin: "0" }}>{row.name}</h3>
              <p>{row.requirement_type}</p>
              <p>Uom: {row.uom}</p>
              <p>Status: {row.status}</p>
              <p>Date: {row.date}</p>
              <p>Validity: {row.expiration_date}</p>
              <form onSubmit={(e) => BidNewData(e, bid_amount)}>
                <input
                  onChange={InputFieldData}
                  placeholder="Amount"
                  type="text"
                  style={{marginTop:"10px", border:"none", width:"120px", height:"30px" }} />
                <Button type='submit' style={{textDecoration:"none",marginTop:"10px", float:"right"}} variant="contained" onClick={(e) => BidNewData(e, row)}>Bid</Button>
                <Link to={"/viewbiding/"+row.name} style={{textDecoration:"none"}}><Button style={{marginLeft:"100px",marginTop:"15px"}} variant="contained">All Bids</Button></Link>
              </form>
            </div>
          </div>
        ))}
      </div>
    </Box>
  );
}
