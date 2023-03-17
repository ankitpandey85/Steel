import { ValidatorForm } from "react-material-ui-form-validator";

const PasswordValidation = (isPasswordMatch, value, password) => {
  ValidatorForm.addValidationRule(isPasswordMatch, (value) => {
    console.log(value);
    console.log(password);
    if (value !== password) {
      return false;
    }
    return true;
  });
};

const TextValidation = (isText, value) => {
  ValidatorForm.addValidationRule(isText, (value) => {
    console.log(value);
    if (!isNaN(value) || !/^[a-z,' ',A-Z]*$/g.test(value)) {
      return false;
    }
    return true;
  });
};



export { PasswordValidation, TextValidation};
