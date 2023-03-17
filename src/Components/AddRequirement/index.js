import React, { useState, useEffect } from 'react';
import { Box, InputLabel, MenuItem, FormControl, Select, Card } from '@mui/material';
import SelectInputField from "../../Common_Components/InputField/SelectInputField";
import InputField from "../../Common_Components/InputField/InputField";
import { ValidatorForm } from 'react-material-ui-form-validator';
import OutlinedInput from '@mui/material/OutlinedInput';
import Button from '@mui/material/Button';


export default function AddRequirement() {

    const [selectedOption, setSelectedOption] = useState("");
    const [makeselectedOption, setmakeselectedOption] = useState("");
    const [NewPaymentTerms, setNewPaymentTerms] = useState("");
    const [newUomSelectOption, setNewUomSelectOption] = useState("");
    const [RequiredBySelectOption, setRequiredBySelectOption] = useState("");
    const [SelectPaymentTerms, setSelectPaymentTerms] = useState(false);
    const [requiredByInput, setRequiredByInput] = useState(false);
    const [showInput, setShowInput] = useState(false);
    const [makeInput, setMakeInput] = useState(false);
    const [showUomSelect, setShowUomSelect] = useState(false);
    const [requirementType, setRequirementType] = useState([]);
    const [uom, setUom] = useState([]);
    const [make, setMake] = useState([]);
    const [category, setCategory] = useState([]);
    const [grade, setGrade] = useState([]);
    const [finish, setFinish] = useState([]);
    const [paymentTerms, setPaymentTerms] = useState([]);
    const [widthType, setWidthType] = useState([]);
    const [widthUomtType, setWidthUomType] = useState([]);
    const [requiredBy, setRequiredBy] = useState([]);
    const [status, setStatus] = useState([]);



    const [RequiredForm, setRequiredForm] = useState({
        requirementType: "",
        requirementDetails: "",
        requirementImage: "",
        date: "",
        length: "",
        lengthValue: "",
        widthValue: "",
        otherUom: "",
        category: "",
        grade: "",
        finish: "",
        thicknessMm: "",
        widthType: "",
        minimumOrderQuantity: "",
        quantity: "",
        requiredInDays: "",
        inDays: "",
        otherMake: "",
        status: ""
    })


    useEffect(() => {
        RequirementTypeData();
        uomData();
        makeData();
        finishData();
        PaymentTermsData();
        gradeData();
        widthData();
        categoryData();
        widthUomData();
        requiredByData();
        statusData();
    }, []);

    const InputFiledData = (e) => {
        setRequiredForm({ ...RequiredForm, [e.target.name]: e.target.value });
        console.log({ ...RequiredForm, [e.target.name]: e.target.value });
    };


    const AddAllRequirements = async (e) => {
        e.preventDefault();
        console.log(RequiredForm);
        try {
            const response = await fetch(
                "https://steel.smartyerp.in/api/method/steel.api.create_new_requirement",
                {
                    method: "POST",
                    body: JSON.stringify({
                        RequiredForm,
                        selectedOption,
                        makeselectedOption,
                        NewPaymentTerms,
                        newUomSelectOption,
                        RequiredBySelectOption
                    }),
                }
            );
            const data = await response.json();
            console.log(data);
        } catch (error) {
            console.error(error);
        }

        // if (result) {
        //   navigate("/");
        // }


        console.log(RequiredForm,
            selectedOption,
            makeselectedOption,
            NewPaymentTerms,
            newUomSelectOption,
            RequiredBySelectOption
        )
    }
    //all fields api
    const RequirementTypeData = () => {
        fetch('https://steel.smartyerp.in/api/method/steel.api.get_requirement_type')
            .then(response => response.json())
            .then(data => {
                setRequirementType(data.data);
            })
            .catch(error => console.error(error));
    }

    const uomData = () => {
        fetch('https://steel.smartyerp.in/api/method/steel.api.get_uom')
            .then(response => response.json())
            .then(data => {
                setUom(data.data);
            })
            .catch(error => console.error(error));
    }


    const categoryData = () => {
        fetch('https://steel.smartyerp.in/api/method/steel.api.get_category')
            .then(response => response.json())
            .then(data => {
                setCategory(data.data);
            })
            .catch(error => console.error(error));
    }

    const makeData = () => {
        fetch('https://steel.smartyerp.in/api/method/steel.api.get_make')
            .then(response => response.json())
            .then(data => {
                setMake(data.data);
            })
            .catch(error => console.error(error));
    }

    const finishData = () => {
        fetch('https://steel.smartyerp.in/api/method/steel.api.get_finish')
            .then(response => response.json())
            .then(data => {
                setFinish(data.data);
            })
            .catch(error => console.error(error));
    }

    const PaymentTermsData = () => {
        fetch('https://steel.smartyerp.in/api/method/steel.api.get_payment_terms')
            .then(response => response.json())
            .then(data => {
                setPaymentTerms(data.data);
            })
            .catch(error => console.error(error));
    };

    const gradeData = () => {
        fetch('https://steel.smartyerp.in/api/method/steel.api.get_grade')
            .then(response => response.json())
            .then(data => {
                setGrade(data.data);
            })
            .catch(error => console.error(error));
    }

    const widthData = () => {
        fetch('https://steel.smartyerp.in/api/method/steel.api.get_category_type')
            .then(response => response.json())
            .then(data => {
                setWidthType(data.data);
            })
            .catch(error => console.error(error));
    }

    const widthUomData = () => {
        fetch('https://steel.smartyerp.in/api/method/steel.api.get_width_type')
            .then(response => response.json())
            .then(data => {
                setWidthUomType(data.data);
            })
            .catch(error => console.error(error));
    }

    const requiredByData = () => {
        fetch('https://steel.smartyerp.in/api/method/steel.api.get_lead_time')
            .then(response => response.json())
            .then(data => {
                setRequiredBy(data.data);
            })
            .catch(error => console.error(error));
    }
    const statusData = () => {
        fetch('https://steel.smartyerp.in/api/method/steel.api.get_requirement_status')
            .then(response => response.json())
            .then(data => {
                setStatus(data.data);
            })
            .catch(error => console.error(error));
    }

    //end of apis 


    // select the dropdown other value then call

    const handleDropdownChange = (event) => {
        const value = event.target.value;
        setSelectedOption(value);
        setShowInput(value === "Others");
    };

    const PaymentTermsDropdownChange = (event) => {
        const value = event.target.value;
        setNewPaymentTerms(value);
        setSelectPaymentTerms(value === "Others");

    };
    const UomDropdownChange = (event) => {
        const value = event.target.value;
        setNewUomSelectOption(value);
        setShowUomSelect(value === "Others");
    };

    const MakeDropdownChange = (event) => {
        const value = event.target.value;
        setmakeselectedOption(value);
        setMakeInput(value === "Others");
    };
    const RequiredByDropdownChange = (event) => {
        const value = event.target.value;
        setRequiredBySelectOption(value);
        setRequiredByInput(value === "Others");
    };

    return (
        <>

            <Card sx={{ ml: 15, mt: 12, p: 1, width: 1100 }}>
                <h2 style={{ textAlign: "start", fontFamily: "initial", fontWeight: "bold", marginLeft: "20px", marginBottom: "30px", marginTop: "20px" }}>Requirement Form</h2>
                <Box
                    component="form"
                    sx={{
                        '& .MuiTextField-root': { m: 1, width: '25ch' },
                    }}
                    noValidate
                    autoComplete="off"
                >
                    <ValidatorForm>
                        <div><h5 style={{ marginLeft: "20px", marginTop: "25px", color: "gray" }}>Requirement</h5>
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr 1fr",
                            }}>
                                <div style={{
                                    gridRow: "1 / span 1",
                                    gridColumn: "1 / span 1",
                                }}>
                                    <SelectInputField
                                        name="requirementType"
                                        label="Requirement Type"
                                        value={RequiredForm.requirementType}
                                        selectOptions={requirementType.map(option => ({
                                            value: option.type,
                                            label: option.type
                                        }))}
                                        handleInput={InputFiledData}
                                    />

                                </div>
                                <div style={{
                                    gridRow: "1 / span 1",
                                    gridColumn: "2 / span 1",
                                }}>

                                    <InputField
                                        name="requirementDetails"
                                        label="Requirement Details"
                                        value={RequiredForm.requirementDetails}
                                        handleInput={InputFiledData}
                                        type="text"

                                    />
                                </div>
                                <div style={{
                                    gridRow: "1 / span 1",
                                    gridColumn: "3 / span 1",
                                }}>
                                    <InputField
                                        name="requirementImage"
                                        //   label="Requirement Image" 
                                        handleInput={InputFiledData}
                                        value={RequiredForm.requirementImage}
                                        type="file"
                                    />
                                </div>
                                <div style={{
                                    gridRow: "1 / span 1",
                                    gridColumn: "4 / span 1",
                                }}>
                                    <InputField
                                        name="date"
                                        //   label="Requirement Image"
                                        type="date"
                                        handleInput={InputFiledData}
                                        value={RequiredForm.date}

                                    />
                                </div>
                                <div style={{
                                    gridRow: "2 / span 1",
                                    gridColumn: "1 / span 1",
                                }}>

                                    <InputField
                                        name="date"
                                        //   label="Requirement Image"
                                        type="date"
                                        handleInput={InputFiledData}
                                        value={RequiredForm.date}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "2 / span 1",
                                    gridColumn: "2 / span 1",
                                }}>
                                    <SelectInputField
                                        name="status"
                                        label="Status"
                                        value={RequiredForm.status}
                                        selectOptions={status.map(option => ({
                                            value: option.status,
                                            label: option.status
                                        }))}
                                        handleInput={InputFiledData}
                                    />
                                </div>
                            </div>
                        </div>
                        <div><h5 style={{ marginLeft: "20px", marginTop: "25px", color: "gray" }}>Category</h5>
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr 1fr",

                            }}>
                                <div style={{
                                    gridRow: "1 / span 1",
                                    gridColumn: "1 / span 1",
                                }}>

                                    <SelectInputField
                                        name="category"
                                        label="Category"
                                        selectOptions={category.map(option => ({
                                            value: option.name,
                                            label: option.name
                                        }))}
                                        handleInput={InputFiledData}
                                        value={RequiredForm.category}
                                    />

                                </div>
                                <div style={{
                                    gridRow: "1 / span 1",
                                    gridColumn: "2 / span 1",
                                }}>
                                    <SelectInputField
                                        name="widthType"
                                        label="width Type"
                                        selectOptions={widthType.map(option => ({
                                            value: option.type,
                                            label: option.type
                                        }))}
                                        handleInput={InputFiledData}
                                        value={RequiredForm.widthType}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "1 / span 1",
                                    gridColumn: "3 / span 1",
                                }}>
                                    <InputField
                                        name="length"
                                        label="Length"
                                        type="text"
                                        handleInput={InputFiledData}
                                        value={RequiredForm.length}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "1 / span 1",
                                    gridColumn: "4 / span 1",
                                }}>
                                    <SelectInputField
                                        name="finish"
                                        label="Finish"
                                        selectOptions={finish.map(option => ({
                                            value: option.finish,
                                            label: option.finish
                                        }))}
                                        handleInput={InputFiledData}
                                        value={RequiredForm.finish}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "2 / span 1",
                                    gridColumn: "1 / span 1",
                                }}>
                                    <SelectInputField

                                        name="grade"
                                        label="Grade"
                                        selectOptions={grade.map(option => ({
                                            value: option.grade,
                                            label: option.grade
                                        }))}
                                        handleInput={InputFiledData}
                                        value={RequiredForm.grade}
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
                                                onChange={handleDropdownChange}
                                                sx={{
                                                    height: "45px",
                                                    fontSize: "12px",
                                                }}
                                                value={selectedOption}
                                            >
                                                <MenuItem value={selectedOption}>Width UOM</MenuItem>
                                                {widthUomtType.map((option) => (
                                                    <MenuItem key={option.type} value={option.type}>
                                                        {option.type}
                                                    </MenuItem>
                                                ))}
                                            </Select>
                                        </FormControl>
                                        {showInput && (
                                            <>
                                                <div style={{
                                                    gridRow: "2 / span 1",
                                                    gridColumn: "4 / span 1",
                                                }}>
                                                    <InputField
                                                        name="widthValue"
                                                        label="Width Value"
                                                        value={RequiredForm.widthValue}
                                                        handleInput={InputFiledData}
                                                        type="text"
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
                                            </>
                                        )}
                                    </div>

                                </div>
                                <div style={{
                                    gridRow: "2 / span 1",
                                    gridColumn: "3 / span 1",
                                }}>
                                    <InputField
                                        name="lengthValue"
                                        label="Length Value"
                                        type="text"
                                        value={RequiredForm.lengthValue}
                                        handleInput={InputFiledData}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "2 / span 1",
                                    gridColumn: "4 / span 1",
                                }}>
                                    <InputField
                                        name="thicknessMm"
                                        label="Thickness MM"
                                        type="text"
                                        value={RequiredForm.thicknessMm}
                                        handleInput={InputFiledData}
                                    />
                                </div>

                            </div>
                        </div>
                        <div><h5 style={{ marginLeft: "20px", marginTop: "25px", color: "gray" }}>Product Details</h5>
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: "1fr 1fr 1fr 1fr",

                            }}>

                                <div style={{
                                    gridRow: "2 / span 1",
                                    gridColumn: "1 / span 1",
                                }}>
                                    <FormControl sx={{ m: 1, width: 225 }}>
                                        <InputLabel id="demo-multiple-name-label" style={{ fontSize: "11px", fontWeight: "bold" }}>UOM</InputLabel>
                                        <Select
                                            input={<OutlinedInput label="UOM" />}
                                            onChange={UomDropdownChange}
                                            value={newUomSelectOption}

                                            sx={{
                                                height: "45px",
                                                fontSize: "12px",
                                            }}
                                        >
                                            <MenuItem value={newUomSelectOption}>UOM</MenuItem>
                                            {uom.map((option) => (
                                                <MenuItem key={option.uom} value={option.uom}>
                                                    {option.uom}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    {showUomSelect && (
                                        <>
                                            <div style={{
                                                gridRow: "2 / span 1",
                                                gridColumn: "1 / span 1",
                                            }}>
                                                <InputField
                                                    name="otherUom"
                                                    label="Other UOM"
                                                    type="text"
                                                    value={RequiredForm.otherUom}
                                                    handleInput={InputFiledData}
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
                                        </>
                                    )}
                                </div>

                                <div style={{
                                    gridRow: "1 / span 1",
                                    gridColumn: "2 / span 1",
                                }}>
                                    <InputField
                                        name="quantity"
                                        label="Quantity"
                                        type="text"
                                        value={RequiredForm.quantity}
                                        handleInput={InputFiledData}

                                    />
                                </div>
                                <div style={{
                                    gridRow: "2 / span 1",
                                    gridColumn: "4 / span 1",
                                }}>
                                    <FormControl sx={{ m: 1, width: 225 }}>
                                        <InputLabel id="demo-multiple-name-label" style={{ fontSize: "11px", fontWeight: "bold" }}>Make</InputLabel>
                                        <Select
                                            input={<OutlinedInput label="Make" />}
                                            onChange={MakeDropdownChange}
                                            value={makeselectedOption}

                                            sx={{
                                                height: "45px",
                                                fontSize: "12px",
                                            }}
                                        >
                                            <MenuItem value={makeselectedOption}>Make</MenuItem>
                                            {make.map((option) => (
                                                <MenuItem key={option.make} value={option.make}>
                                                    {option.make}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    {makeInput && (
                                        <>
                                            <div style={{
                                                gridRow: "2 / span 1",
                                                gridColumn: "4 / span 1",
                                            }}>
                                                <InputField
                                                    name="otherMake"
                                                    label="Other Make"
                                                    type="text"
                                                    value={RequiredForm.otherMake}
                                                    handleInput={InputFiledData}
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
                                        </>
                                    )}
                                </div>
                                <div style={{
                                    gridRow: "1 / span 1",
                                    gridColumn: "1 / span 1",
                                }}>

                                    <InputField
                                        name="minimumOrderQuantity"
                                        label="Minimum Order Quantity"
                                        type="text"
                                        handleInput={InputFiledData}
                                        value={RequiredForm.minimumOrderQuantity}
                                    />
                                </div>
                                <div style={{
                                    gridRow: "2 / span 1",
                                    gridColumn: "3 / span 1",
                                }}>
                                    <FormControl sx={{ m: 1, width: 225 }}>
                                        <InputLabel id="demo-multiple-name-label" style={{ fontSize: "11px", fontWeight: "bold" }}>Payment Terms</InputLabel>
                                        <Select
                                            input={<OutlinedInput label="Payment Terms" />}
                                            onChange={PaymentTermsDropdownChange}
                                            value={NewPaymentTerms}

                                            sx={{
                                                height: "45px",
                                                fontSize: "12px",
                                            }}
                                        >
                                            <MenuItem value={NewPaymentTerms}>Payment Terms</MenuItem>
                                            {paymentTerms.map((option) => (
                                                <MenuItem key={option.payment_term} value={option.payment_term}>
                                                    {option.payment_term}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    {SelectPaymentTerms && (
                                        <>
                                            <div style={{
                                                gridRow: "2 / span 1",
                                                gridColumn: "4 / span 1",
                                            }}>
                                                <InputField
                                                    name="inDays"
                                                    label="In Days"
                                                    type="text"
                                                    value={RequiredForm.inDays}
                                                    handleInput={InputFiledData}


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
                                        </>
                                    )}
                                </div>

                                <div style={{
                                    gridRow: "2 / span 1",
                                    gridColumn: "2 / span 1",
                                }}>
                                    <FormControl sx={{ m: 1, width: 225 }}>
                                        <InputLabel id="demo-multiple-name-label" style={{ fontSize: "11px", fontWeight: "bold" }}>Required By</InputLabel>
                                        <Select
                                            input={<OutlinedInput label="Required By" />}
                                            onChange={RequiredByDropdownChange}
                                            value={RequiredBySelectOption}

                                            sx={{
                                                height: "45px",
                                                fontSize: "12px",
                                            }}
                                        >
                                            <MenuItem value={RequiredBySelectOption}>Required By</MenuItem>
                                            {requiredBy.map((option) => (
                                                <MenuItem key={option.lead_time} value={option.lead_time}>
                                                    {option.lead_time}
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                    {requiredByInput && (
                                        <>
                                            <div style={{
                                                gridRow: "2 / span 1",
                                                gridColumn: "2 / span 1",
                                            }}>
                                                <InputField
                                                    name="requiredInDays"
                                                    label="Required In Days"
                                                    type="text"
                                                    value={RequiredForm.requiredInDays}
                                                    handleInput={InputFiledData}
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
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                        <Button type="submit" onClick={AddAllRequirements} variant="contained" sx={{ mt: 2, ml: 1 }}>Add Requirement</Button>
                    </ValidatorForm>

                </Box>
            </Card>
        </>
    );
}