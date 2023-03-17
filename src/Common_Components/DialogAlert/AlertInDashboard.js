import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import { Link } from "react-router-dom";


export default function AlertInDashBoard({
  dialogText,
  setOpen,
  open,
  successTitle,
  successResult,
  errorTitle,
  errorResult,
}) {
 
  const handleClose = () => {
    setOpen(false);
  
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        sx={{ textAlign: "center" }}
      >
        {dialogText == true ? (
          <>
            <DialogTitle>
              <CheckCircleOutlineIcon
                color="success"
                sx={{ width: "60px", height: "60px" }}
              />
              <br />
              {successTitle}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {successResult}
              </DialogContentText>
              <br />
              <DialogActions>
               
                <Link to='/' style={{textDecoration:'none', marginRight:'10px'}} >
                <Button
                  variant="contained"
                  color="success"
                >
                  Go to dashboard
                </Button></Link>
                <Button variant="contained" onClick={handleClose}>
                  Ok
                </Button>
             
              </DialogActions>
            </DialogContent>
          </>
        ) : (
          <>
            <DialogTitle>
              <ErrorOutlineIcon
                color="error"
                sx={{ width: "60px", height: "60px" }}
              />
              <br />
              {errorTitle}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                {errorResult}
              </DialogContentText>
              <DialogActions>
                <Button variant="contained" color="error" onClick={handleClose}>
                  {" "}
                  Try Again
                </Button>
              </DialogActions>
            </DialogContent>
          </>
        )}
      </Dialog>
    </div>
  );
}
