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
    <Toolbar>
        
          <Typography variant="h6" color="inherit" noWrap>
            Portfolio
          </Typography>
        </Toolbar>
    <div className={styles.one}>
     
     
     
      <Typography variant="h5" gutterBottom>
        Email : KSinghofficial@proton.me
      </Typography>
 
      <Typography variant="body1" gutterBottom>
       Hi there,
       I am founder of codnap and SFI.<br/>
       <MLink href="https://github.com/codnap" underline="always">
          {" "}
          Github.com/codnap{" "}
        </MLink>{" "}
        <br/>
        <MLink href="https://github.com/streetsfoods" underline="always">
          {" "}
          Github.com/streetsfoods
        </MLink>{" "}<br/>
        <MLink href="https://github.com/ksinghofficial" underline="always">
          {" "}
          Github.com/ksinghofficial
        </MLink>
        
      </Typography>
      <Container sx={{ py: 8 }} maxWidth="md">

<Grid container spacing={4}>
<Grid item xs={12} sm={6} md={6}>
  <Link href="https://www.freelancer.com/u/ksinghofficial">
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '40.25%',
        }}
        image="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcustomercarecontacts.com%2Fwp-content%2Fuploads%2F2017%2F07%2Ffreelancer-logo.jpg&f=1&nofb=1&ipt=a46861a67f5bab20a0261300d1cd8817b9916618fed7cf745bc6aa8c95d5729b&ipo=images"
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
        <Button size="small">Source Code</Button>
        <Button size="small">visit</Button>
      </CardActions>
    </Card>

  </Link>
  </Grid>
<Grid item xs={12} sm={6} md={6}>
<Link href="https://www.fiverr.com/officialksingh">
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '40.25%',
        }}
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fnpm-assets.fiverrcdn.com%2Fassets%2Flayout%2Ffiverr-og-logo.99c4dbf.png&f=1&nofb=1&ipt=82f0966a0a5f703bb603911e3e1be70908326b78149dc8151164dd1170fee4cb&ipo=images"
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
        <Button size="small">Source Code</Button>
        <Button size="small">visit</Button>
      </CardActions>
    </Card>

  </Link>
  </Grid>

  
  
  <Grid item xs={12} sm={6} md={6}>
  <Link href="https://www.upwork.com/freelancers/~012f635da79c04b0f1">
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2021%2F04%2FUpwork-Symbol.png&f=1&nofb=1&ipt=e1f5bc3fb57a6e3da870c0c8d51be63256901555085ac82858810efb7b9a2944&ipo=images"
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
  <Link href="https://www.upwork.com/freelancers/~012f635da79c04b0f1">
    <Card
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      <CardMedia
        component="div"
        sx={{
          // 16:9
          pt: '56.25%',
        }}
        image="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Flogos-world.net%2Fwp-content%2Fuploads%2F2021%2F04%2FUpwork-Symbol.png&f=1&nofb=1&ipt=e1f5bc3fb57a6e3da870c0c8d51be63256901555085ac82858810efb7b9a2944&ipo=images"
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
