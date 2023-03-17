// import { useState, useEffect } from 'react';
// import { Card, CardContent, Typography } from '@mui/material';
// import Button from '@mui/material/Button';
// import { Box } from '@mui/system';
// import { Link ,useParams} from 'react-router-dom';

// function Test1() {

// const [data, setData]= useState({
//     userId:"",
//     title:"",
//      body:""
// });
// const [userId, setUserId] = useState("");
// const [title, setTitgle] = useState("");
// const [body, setBody] = useState("");

//     const params = useParams();

//     useEffect(()=>{
//          getBidData();
//     },[])

//     const getBidData = async()=>{
//         let result = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`);
//         result = await result.json();
//         console.log(result);
//         setUserId(result.userId);
//         setTitgle(result.title);
//         setBody(result.body);

            

//     }
   

      
//     return(
//         <>
//             <div>
//             <Card sx={{ m:10, mb:1, pb:5, pl:3, pr:3, width:"1100px"}}>
//         <div style={{ display: "flex", flexWrap: "wrap" }}>
//         <h5>new Data</h5>
//             <div style={{ flex: "1", display: "flex", flexWrap: "wrap" }}>
//               <Card sx={{ width: "300px", mt:3,ml:3,background:"aliceBlue" }}>
//                 <CardContent>
//                   <Typography variant="h6" component="div">
//                     {userId}
//                   </Typography>
//                   <Typography variant="body2">
//                     {title}
//                   </Typography>
//                   <Typography variant="body2">
//                     {body}
//                   </Typography>
//                 </CardContent>
//               </Card>
//             </div>
//         </div>
//       </Card>
            
//             </div>
//         </>
//     )
// }

// export default Test1;
