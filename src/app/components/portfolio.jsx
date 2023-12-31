"use client"
import React   from "react";
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import MLink from "@mui/material/Link";
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Lottie from "lottie-react";
import bird from "./bird.json";
import Link from 'next/link'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
const style = {
  height: 200,
};

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});
export default function Types() {
  return (
    <div id="portfolio">
    <Toolbar/>
    <div className="two">
     
     
     
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
 
      <Typography color="white" variant="h4"  gutterBottom>
       Hi there,<br/>
       </Typography><Typography variant="h6" color="white" gutterBottom>
       I'm creator of fosstube | ueats. </Typography>
       <Typography variant="body1" color="white" gutterBottom>
       <ul>
         
         <li> 
        <MLink href="https://github.com/kamlendras" underline="always">
          {" "}
           Github.com/kamlendras
        </MLink>
        </li>
        </ul>
      </Typography>
      <Container sx={{ py: 8 }} maxWidth="md">

<Grid container spacing={4}>
<Grid item xs={12} sm={6} md={6}>
  <Link href="https://fosstube.web.app/">
    <Card
      sx={{  boxShadow: 3,height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '40.25%',
        }}
        image="/fosstubewhite.png"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
          FossTube
        </Typography>
        <Typography>
        Open & Decentralized platform made with Nextjs Latest + MUI.
        </Typography>
      </CardContent>
      <CardActions>
      
      <Link href="https://github.com/kamlendras/fosstube/">   <Button size="small">Source Code</Button></Link>
        <Button size="small">visit</Button>
      </CardActions>
    </Card>

  </Link>
  </Grid>
<Grid item xs={12} sm={6} md={6}>
<Link href="https://ueats.vercel.app">
    <Card
      sx={{  boxShadow: 3, height: '100%', display: 'flex', flexDirection: 'column' }}
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
       Ueats
        </Typography>
        <Typography>
        Open & Decentralized food delivery platform made with Nextjs Latest + MUI.
        </Typography>
      </CardContent>
      <CardActions>
      <Link href="https://github.com/kamlendras/ueats"> 
        <Button size="small">Source Code</Button></Link>
        <Button size="small">visit</Button>
      </CardActions>
    </Card>

  </Link>
  </Grid>

  
  
  <Grid item xs={12} sm={6} md={6}>
  <Link href="https://github.com/kamlendras/ueats/">
    <Card
      sx={{  boxShadow: 3,height: '100%', display: 'flex', flexDirection: 'column' }}
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
       Ueats
        </Typography>
        <Typography>
          App for Android & IOS made with React Native + Paper.
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
  <Link href="https://github.com/kamlendras/fosstube/">
    <Card
      sx={{  boxShadow: 3,height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image="/cfm.png"
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="h2">
        FossTube
        </Typography>
        <Typography>
          App for Android & IOS made with React Native + Paper.
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
</ThemeProvider>
    <Lottie animationData={bird} loop={true} style={style} />
    </div>
    </div>
  );
}
