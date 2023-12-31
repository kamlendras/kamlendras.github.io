import Link from "next/link";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import * as React from "react";
const Social = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Stack direction="row" spacing={2}>
      <a
        href="mailto:kamlendras@proton.me?Subject=Hello%20User"
        onClick={handleClickOpen}
      >
        <img src="/social//mail.svg" height={35} width={35} />
      </a>

      <Link href="https://matrix.to/#/@kamlendras:matrix.org" >
        <img src="/social/matrix.svg" height={35} width={35} />
      </Link>
    <Link href="https://www.linkedin.com/in/kamlendras" >
        <img src="/social/linkedin.svg" height={35} width={35} />
      </Link>

      <Link href="https://www.github.com/kamlendras/" >
        <img src="/social/githubwhite.svg" height={35} width={35} />
      </Link>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Email"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           kamlendras@proton.me
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </Stack>
  );
};
export default Social;
