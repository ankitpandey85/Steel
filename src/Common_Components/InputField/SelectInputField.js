import React from "react";
import { TextValidator } from "react-material-ui-form-validator";
import MenuItem from "@mui/material/MenuItem";
export default function SelectInputField({
  label,
  type,
  name,
  handleInput,
  value,
  passwordIcon,
  selectOptions,
}) {
  return (
    <>
      <TextValidator
        onChange={(e) => {
          handleInput(e);
        }}
        type={type}
        value={value}
        sx={{ m: 1, width: "40ch" }}
        id={name}
        // required
        label={label}
        name={name}
        InputProps={{
          sx: {
            height: "45px",
            fontSize: "12px",
          },
          endAdornment: passwordIcon,
        }}
        InputLabelProps={{ style: { fontSize: 11, fontWeight: "bolder" } }}
        select
        
      >
      {selectOptions.map((option) => (
            <MenuItem value={option.value}>{option.label}</MenuItem>
          ))}
          </TextValidator>
    </>
  );
}
