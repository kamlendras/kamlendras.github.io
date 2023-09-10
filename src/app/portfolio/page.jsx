"use client"
import React   from "react";
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MLink from "@mui/material/Link";
import styles from '../styles/support.module.css'
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Lottie from "lottie-react";
import bird from "./bird.json";
import Link from 'next/link'
const style = {
  height: 200,
};
export default function Types() {
  return (
    <div>
     <AppBar position="relative">
        <Toolbar>
          {/* <CameraIcon sx={{ mr: 2 }} /> */}
          <Typography variant="h6" color="inherit" noWrap>
          Portfolio
          </Typography>
        </Toolbar>
      </AppBar>
    <div className={styles.two}>
     
     
     
      {/* <Typography variant="h5" gutterBottom>
        Email : KSinghofficial@proton.me
      </Typography> */}
 
      <Typography variant="body1" gutterBottom>
       Hi there,<br/>
       I am founder of codnap and SFI.
       <ul><li>
       <MLink href="https://github.com/codnap" underline="always">
          {" "}
          Github.com/codnap{" "}
        </MLink>{" "}</li>
        
        <li>  <MLink href="https://github.com/streetsfoods" underline="always">
          {" "}
          Github.com/streetsfoods
        </MLink>{" "}</li> <li> 
        <MLink href="https://github.com/ksinghofficial" underline="always">
          {" "}
           Github.com/ksinghofficial
        </MLink>
        </li>
        </ul>
      </Typography>
      <Container sx={{ py: 8 }} maxWidth="md">

<Grid container spacing={4}>
<Grid item xs={12} sm={6} md={6}>
  <Link href="https://codnap.github.io/">
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '40.25%',
        }}
        image="/codnap1.png"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          codnap
        </Typography>
        <Typography>
        A website made with Nextjs 13.4 + MUI.
        </Typography>
      </CardContent>
      <CardActions>
      
      <Link href="https://github.com/codnap/codnap.github.io">   <Button size="small">Source Code</Button></Link>
        <Button size="small">visit</Button>
      </CardActions>
    </Card>

  </Link>
  </Grid>
<Grid item xs={12} sm={6} md={6}>
<Link href="https://streetsfoods.github.io/">
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '40.25%',
        }}
        image="/sf.png"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
        STREETSFOODS (SFI)
        </Typography>
        <Typography>
         An open source food delivery website made with nextjs 13.4 + MUI.
        </Typography>
      </CardContent>
      <CardActions>
      <Link href="https://github.com/streetsfoods/streetsfoods.github.io"> 
        <Button size="small">Source Code</Button></Link>
        <Button size="small">visit</Button>
      </CardActions>
    </Card>

  </Link>
  </Grid>

  
  
  <Grid item xs={12} sm={6} md={6}>
  <Link href="https://github.com/streetsfoods/streetsfoodsmobile">
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image="/sfm.png"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
        STREETSFOODS (SFI)
        </Typography>
        <Typography>
          App for (Android & IOS) made with React Native + Paper.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Source Code</Button>
        <Button size="small">visit</Button>
      </CardActions>
    </Card>
    </Link>
  </Grid>
  <Grid item xs={12} sm={6} md={6}>
  <Link href="https://github.com/codnap/codnapmobile">
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image="/codnap2.png"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
        codnap
        </Typography>
        <Typography>
          App for (Android & IOS) made with React Native + Paper.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Source Code</Button>
        <Button size="small">visit</Button>
      </CardActions>
    </Card>
    </Link>
  </Grid>
</Grid>


</Container>
   
    </div>
    <Lottie animationData={bird} loop={true} style={style} />
    </div>
  );
}
