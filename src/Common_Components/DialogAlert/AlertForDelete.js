import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

export default function AlertForDelete({
  dialogText,
  setOpen,
  open,
  getId,
}) {
  // console.log(`get id is ${getId}`)
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
              Successful
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                User Credentials deleted successfully with ID {getId}.
              </DialogContentText>
              <br />
              <DialogActions>
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
              Error
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                User credentials are not deleted with ID {getId}.<br />
                Please Try Again.
              </DialogContentText>
              <DialogActions>
                <Button variant="contained" color="error" onClick={handleClose}>
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
