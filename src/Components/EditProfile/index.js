import React, { useState, useEffect } from 'react';
import { Box, Card } from '@mui/material';
import { TextValidation } from "../../Common_Components/Validation/Validation";
import InputField from "../../Common_Components/InputField/InputField";
import { ValidatorForm } from 'react-material-ui-form-validator';
import Button from '@mui/material/Button';
import { useParams } from 'react-router-dom';


const EditProfile = () => {
    const [updateUserForm, setUpdateUserForm] = useState({
        accountType:"",
        firstName:"",
        lastName:"",
        companyName:"",
        email:"",
        mobile:"",
        city:"",
        gstNo:"",
        natureOfBusiness:"",
        user:""
    });
    const params = useParams();


    useEffect(()=>{
        updateProfile();
    },[])

    const updateProfile = async()=>{
        console.log(params);
        let result = await fetch(`${params.id}`); //params.id before add the url
        result = await result.json();
        console.log(result);
        // setUpdateUserForm(updateUserForm.accountType);
        // setUpdateUserForm(updateUserForm.firstName);
        // setUpdateUserForm(updateUserForm.lastName);
        // setUpdateUserForm(updateUserForm.companyName);
        // setUpdateUserForm(updateUserForm.email);
        // setUpdateUserForm(updateUserForm.mobile);
        // setUpdateUserForm(updateUserForm.city);
        // setUpdateUserForm(updateUserForm.gstNo);
        // setUpdateUserForm(updateUserForm.natureOfBusiness);
        // setUpdateUserForm(updateUserForm.user);
    }

    const InputFiledData = (e) => {
        setUpdateUserForm({ ...updateUserForm, [e.target.name]: e.target.value });
        console.log({ ...updateUserForm, [e.target.name]: e.target.value });
    };


    return (
        <>

            <Card  maxWidth="lg"  sx={{ ml: 15, mt: 12, p: 5, width: 1100 }}>
            <h2 style={{ textAlign: "start", marginBottom: "40px", fontFamily: "initial", fontWeight:"bold",marginLeft:"20px", marginBottom:"25px"}}>Edit Profile</h2>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <ValidatorForm>
                        <div>
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                            }}>
 <div style={{
                                    gridRow: "1 / span 1",
                                    gridColumn: "1 / span 1",
                                }}>
                                    <InputField
                                        name="accountType"
                                        label="Account Type"
                                        value={updateUserForm.accountType}
                                        type="text"
                                        handleInput={InputFiledData}
                                    />
                                </div>



                                <div style={{
                                    gridRow: "1 / span 1",
                                    gridColumn: "2 / span 1",
                                }}>
                                    <InputField
                                        name="firstName"
                                        label="First Name"
                                        value={updateUserForm.firstName}
                                        type="text"
                                        handleInput={InputFiledData}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "1 / span 1",
                                    gridColumn: "3 / span 1",
                                }}>

                                    <InputField
                                        name="lastName"
                                        label="Last Name"
                                        value={updateUserForm.lastName}
                                        type="text"
                                        handleInput={InputFiledData}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "2 / span 1",
                                    gridColumn: "1 / span 1",
                                }}>
                                    <InputField
                                        name="companyName"
                                        label="Company Name"
                                        value={updateUserForm.companyName}
                                        type="text"
                                        handleInput={InputFiledData}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "2 / span 1",
                                    gridColumn: "2 / span 1",
                                }}>
                                    <InputField
                                        name="email"
                                        label="Email"
                                        value={updateUserForm.email}
                                        type="text"
                                        handleInput={InputFiledData}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "2 / span 1",
                                    gridColumn: "3 / span 1",
                                }}>
                                    <InputField
                                        name="mobile"
                                        label="Mobile"
                                        value={updateUserForm.mobile}
                                        type="text"
                                        handleInput={InputFiledData}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "3 / span 1",
                                    gridColumn: "1 / span 1",
                                }}>
                                    <InputField
                                        name="city"
                                        label="City"
                                        value={updateUserForm.city}
                                        type="text"
                                        handleInput={InputFiledData}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "3 / span 1",
                                    gridColumn: "2 / span 1",
                                }}>
                                    <InputField
                                        name="gstNo"
                                        label="Gst Number"
                                        value={updateUserForm.gstNo}
                                        type="text"
                                        handleInput={InputFiledData}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "3 / span 1",
                                    gridColumn: "3 / span 1",
                                }}>
                                    <InputField
                                        name="natureOfBusiness"
                                        label="Nature Of Business"
                                        value={updateUserForm.natureOfBusiness}
                                        type="text"
                                        handleInput={InputFiledData}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "4 / span 1",
                                    gridColumn: "1 / span 1",
                                }}>
                                    <InputField
                                        name="user"
                                        label="User"
                                        value={updateUserForm.user}
                                        type="text"
                                        handleInput={InputFiledData}
                                    />
                                </div>
                            </div>
                        </div>
                    </ValidatorForm>
                    <Button variant="contained" sx={{mt:2,ml:1}}>Update Profile</Button>
                </Box>
            </Card>
        </>
    )

}

export default EditProfile;