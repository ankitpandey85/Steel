import React, { useState, useEffect } from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select, Card } from '@mui/material';
import { TextValidation } from "../../Common_Components/Validation/Validation";
import SelectInputField from "../../Common_Components/InputField/SelectInputField";
import InputField from "../../Common_Components/InputField/InputField";
import { ValidatorForm } from 'react-material-ui-form-validator';
import { RequirementType } from '../LocalData';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';





export default function AddBiding() {

    const [options, setOptions] = useState([]);
    const [selectedOption, setSelectedOption] = useState("");
    const [showInput, setShowInput] = useState(false);


    const handleDropdownChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        setShowInput(value === "last");
    };

    const [CreateUser, setCreateUser] = React.useState({

    });


    useEffect(() => {
        TextValidation("isText", CreateUser.name);
    }, [CreateUser]);

    const InputFiledData = (e) => {
        setCreateUser({ ...CreateUser, [e.target.name]: e.target.value });
    };

    return (
        <>

            <Card sx={{ ml: 15, mt: 12, p: 1, width: 1100 }}>
                <h2 style={{ textAlign: "start", fontFamily: "initial", fontWeight: "bold", marginLeft: "15px", marginBottom: "30px", marginTop: "20px" }}>Add Biding</h2>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <ValidatorForm>    
                        <div><h5 style={{ marginLeft: "20px", color: "gray" }}>Category</h5>
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr 1fr",

                            }}>
                                <div style={{
                                    gridRow: "1 / span 1",
                                    gridColumn: "1 / span 1",
                                }}>

                                    <SelectInputField
                                        handleInput={InputFiledData}
                                        name="category"
                                        label="Category"
                                        value={CreateUser.category}
                                        selectOptions={RequirementType}
                                    />

                                </div>
                                <div style={{
                                    gridRow: "1 / span 1",
                                    gridColumn: "2 / span 1",
                                }}>
                                    <SelectInputField
                                        handleInput={InputFiledData}
                                        name="type"
                                        label="Type"
                                        value={CreateUser.type}
                                        selectOptions={RequirementType}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "1 / span 1",
                                    gridColumn: "3 / span 1",
                                }}>
                                    <InputField
                                        name="length"
                                        label="Length"
                                        value={CreateUser.length}
                                        type="text"
                                        handleInput={InputFiledData}
                                        validators={["required", "isText"]}
                                        errorMessages={[
                                            "this field is required",
                                            "Only Characters are allow!",
                                        ]}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "1 / span 1",
                                    gridColumn: "4 / span 1",
                                }}>
                                    <SelectInputField
                                        handleInput={InputFiledData}
                                        name="finish"
                                        label="Finish"
                                        value={CreateUser.finish}

                                        selectOptions={RequirementType}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "2 / span 1",
                                    gridColumn: "1 / span 1",
                                }}>
                                    <SelectInputField
                                        handleInput={InputFiledData}
                                        name="grade"
                                        label="Grade"
                                        value={CreateUser.grade}

                                        selectOptions={RequirementType}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "2 / span 1",
                                    gridColumn: "2 / span 1",
                                }}>



                                    <div style={{
                                        gridRow: "2 / span 1",
                                        gridColumn: "3 / span 1",
                                    }}>
                                        <FormControl sx={{ m: 1, width: 225 }}>
                                            <InputLabel id="demo-multiple-name-label" style={{ fontSize: "11px", fontWeight: "bold" }}>Width UOM</InputLabel>
                                            <Select
                                                input={<OutlinedInput label="Width UOM" />}
                                                value={selectedOption}
                                                onChange={handleDropdownChange}

                                                sx={{
                                                    height: "45px",
                                                    fontSize: "12px",
                                                }}
                                            >
                                                <MenuItem value="">Width UOM</MenuItem>
                                                {options.map((option,index) => (
                                                    <MenuItem key={option.index} value={option.value}>
                                                        {option.label}
                                                    </MenuItem>
                                                ))}
                                                <MenuItem value="last">Other</MenuItem>
                                            </Select>
                                        </FormControl>
                                        {showInput && (
                                            <>
                                                <div style={{
                                                    gridRow: "2 / span 1",
                                                    gridColumn: "4 / span 1",
                                                }}>
                                                    <InputField
                                                        name="width_value"
                                                        label="Width Value"
                                                        value={CreateUser.widthValue}
                                                        type="text"
                                                        handleInput={InputFiledData}
                                                        validators={["required", "isText"]}
                                                        errorMessages={[
                                                            "this field is required",
                                                            "Only Characters are allow!",
                                                        ]}
                                                        sx={{ m: 1, width: "40ch" }}
                                                        InputProps={{
                                                            sx: {
                                                                height: "45px",
                                                                fontSize: "12px",
                                                            },

                                                        }}
                                                        InputLabelProps={{ style: { fontSize: 11, fontWeight: "bolder" } }}
                                                    />
                                                </div>
                                                <div style={{
                                                    gridRow: "3 / span 1",
                                                    gridColumn: "2 / span 1",
                                                }}>
                                                    <InputField
                                                        name="other_Width_type"
                                                        label="Other Width Type"
                                                        value={CreateUser.otherWidthType}
                                                        type="text"
                                                        handleInput={InputFiledData}
                                                        validators={["required", "isText"]}
                                                        errorMessages={[
                                                            "this field is required",
                                                            "Only Characters are allow!",
                                                        ]}
                                                    />
                                                </div>
                                            </>
                                        )}
                                    </div>

                                </div>
                                <div style={{
                                    gridRow: "2 / span 1",
                                    gridColumn: "3 / span 1",
                                }}>
                                    <InputField
                                        name="length_value"
                                        label="Length Value"
                                        value={CreateUser.lengthValue}
                                        type="text"
                                        handleInput={InputFiledData}
                                        validators={["required", "isText"]}
                                        errorMessages={[
                                            "this field is required",
                                            "Only Characters are allow!",
                                        ]}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "2 / span 1",
                                    gridColumn: "4 / span 1",
                                }}>
                                    <InputField
                                        name="thickness_mm"
                                        label="Thickness MM"
                                        value={CreateUser.thicknessMM}
                                        type="text"
                                        handleInput={InputFiledData}
                                        validators={["required", "isText"]}
                                        errorMessages={[
                                            "this field is required",
                                            "Only Characters are allow!",
                                        ]}
                                    />
                                </div>

                            </div>
                        </div>
                    </ValidatorForm>
                    <Button variant="contained" sx={{mt:2,ml:1,mb:2}}>Add Biding</Button>
                </Box>
            </Card>
        </>
    );
}