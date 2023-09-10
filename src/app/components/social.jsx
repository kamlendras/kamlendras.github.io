import styles from "../styles/Footer.module.scss";
import Link from 'next/link'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from 'react';
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
{/*     
 <Link href="https://liberapay.com/KSingh" >
<img src="/social/libra.svg" height={35} width={35} />


</Link> */}

  <div onClick={handleClickOpen} >
  
    <img src="/mail.svg" 
    height={35} width={35} 
    />
    
</div>
<Link href="https://matrix.to/#/@ksingh:matrix.org" >
<img src="/social/matrix.svg" height={35} width={35} />


</Link>
 <Link href="https://mstdn.social/@ksingh" >
    <img src="/social/mastodon.svg" height={35} width={35} />

</Link>

<Link href="https://www.github.com/ksinghofficial/" >
  
    
      <img src="/social/githubwhite.svg" height={35} width={35} />
      
</Link>
{/* <Link href="https://www.patreon.com/KSingh" >
  
  <img src="/social/pato.svg" height={35} width={35} />
  
</Link> */}



<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Email"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
          ksinghofficial@proton.me
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button onClick={handleClose} autoFocus>
            okay
          </Button>
        </DialogActions>
      </Dialog>

</Stack>
  );
};
      export default Social;