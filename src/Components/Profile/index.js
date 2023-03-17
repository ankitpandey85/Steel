import React, { useState, useEffect } from 'react';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBBreadcrumb,
    MDBBreadcrumbItem,
    MDBProgress,
    MDBProgressBar,
    MDBIcon,
    MDBListGroup,
    MDBListGroupItem
} from 'mdb-react-ui-kit';
import { Card } from '@mui/material';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';


export default function Profile() {
    const [profileData, setprofileData] = useState([]);

    useEffect(() => {
        userprofile();
    })


    const userprofile = async () => {
        let result = await fetch("https://steel.smartyerp.in/api/method/steel.api.get_profile");
        let res = await result.json();
        setprofileData(res.data[3]);
    }
    return (
  <> 
  
        <Card sx={{ ml: 15, mt:12, p: 1, width:1100}}>
        <Box style={{display:"inline"}}>
        <h2 style={{ textAlign: "start", fontFamily: "initial",fontWeight:"bold", float:"left", margin:"15px"}}>Profile</h2>
        <div className="d-flex justify-content-center mb-2" style={{float:"right",margin:"15px"}}>
                               <Link to={"/editprofile/"+profileData.full_name} style={{textDecoration:"none"}}>
                               <Button variant="contained">Edit Profile</Button>
                               </Link>
                            </div>
                            </Box>
            <section>
                <MDBContainer className="py-5 mt-4">
                    <MDBRow>
                        <MDBCol lg="4">
                            <MDBCard className="mb-4">
                                <MDBCardBody className="text-center">
                                    <MDBCardImage
                                        src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp"
                                        alt="avatar"
                                        className="rounded-circle"
                                        style={{ width: '120px' }}
                                        fluid />
                                    <p className="text-muted mb-1">{profileData.full_name}</p>
                                    <p className="text-muted mb-4">{profileData.user}</p>
                                </MDBCardBody>
                            </MDBCard>

                            <MDBCard className="mb-4 mb-lg-0">
                                <MDBCardBody className="p-0">
                                    <MDBListGroup flush className="rounded-3">
                                        {[
                                            {
                                                icon: "globe fa-lg text-warning",
                                                text: "https://mdbootstrap.com"
                                            },
                                            {
                                                icon: "github fa-lg",
                                                text: "mdbootstrap",
                                                style: { color: '#333333' }
                                            },
                                            {
                                                icon: "twitter fa-lg",
                                                text: "@mdbootstrap",
                                                style: { color: '#55acee' }
                                            },
                                            {
                                                icon: "instagram fa-lg",
                                                text: "mdbootstrap",
                                                style: { color: '#ac2bac' }
                                            },
                                            {
                                                icon: "facebook fa-lg",
                                                text: "mdbootstrap",
                                                style: { color: '#3b5998' }
                                            }
                                        ].map((item, index) => (
                                            <MDBListGroupItem key={index} style={{ textAlign: "center" }}>
                                                <MDBIcon fab icon={item.icon} style={item.style} />
                                                <MDBCardText>{item.text}</MDBCardText>
                                            </MDBListGroupItem>
                                        ))}
                                    </MDBListGroup>
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                        <MDBCol lg="8">
                            <MDBCard className="mb-4">
                                <MDBCardBody>
                                    {[
                                        { label: "First Name", value: profileData.first__name },
                                        { label: "Last Name", value: profileData.last_name },
                                        { label: "Com. Name", value: profileData.company_name },
                                        { label: "Email", value: profileData.email },
                                        { label: "Account Type", value: profileData.account_type },
                                        { label: "Mobile", value: profileData.mobile },
                                        { label: "City", value: profileData.city },
                                        { label: "GST NO", value: profileData.gst_no },
                                        { label: "Nature Of Business", value: profileData.nature_of_business }
                                    ].map((item, index) => (
                                        <React.Fragment key={index}>
                                            <MDBRow>
                                                <MDBCol sm="3">
                                                    <MDBCardText>{item.label}</MDBCardText>
                                                </MDBCol>
                                                <MDBCol sm="9">
                                                    <MDBCardText className="text-muted">{item.value}</MDBCardText>
                                                </MDBCol>
                                            </MDBRow>
                                            <hr />
                                        </React.Fragment>
                                    ))}
                                </MDBCardBody>
                            </MDBCard>
                        </MDBCol>
                    </MDBRow>
                </MDBContainer>
            </section>
        </Card>
        </>
    );
}