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
       I am maintainer of codefoss and Ueats. </Typography>
       <Typography variant="body1" color="white" gutterBottom>
       <ul><li>
       <MLink href="https://github.com/codnap" underline="always">
          {" "}
          Github.com/codefoss{" "}
        </MLink>{" "}</li>
        
        <li>  <MLink href="https://github.com/streetsfoods" underline="always">
          {" "}
          Github.com/Ueats
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
  <Link href="https://codefoss.github.io/">
    <Card
      sx={{  boxShadow: 3,height: '100%', display: 'flex', flexDirection: 'column' }}
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
          codefoss
        </Typography>
        <Typography>
        Open & Decentralized platform made with Nextjs 13.4 + MUI.
        </Typography>
      </CardContent>
      <CardActions>
      
      <Link href="https://github.com/codefoss/codefoss.github.io">   <Button size="small">Source Code</Button></Link>
        <Button size="small">visit</Button>
      </CardActions>
    </Card>

  </Link>
  </Grid>
<Grid item xs={12} sm={6} md={6}>
<Link href="https://ueats.github.io/">
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
        Open & Decentralized food delivery platform made with nextjs 13.4 + MUI.
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
  <Link href="https://github.com/ueats/ueatsmobile">
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
  <Link href="https://github.com/codefoss/codefossmobile">
    <Card
      sx={{  boxShadow: 3,height: '100%', display: 'flex', flexDirection: 'column' }}
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
        codefoss
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
