import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function Types() {
  return (
    <Box sx={{ width: '100%', maxWidth :'100%', }}>
      <Typography variant="h1" gutterBottom>
        Founder of codnap , STREETSFOODS
      </Typography>
      <Typography variant="h2" gutterBottom>
    An open source organisations on GitHub.
      </Typography>
      <Typography variant="h3" gutterBottom>
        codnap : GitHub.com/codnap
      <br/>  STREETSFOODS : GitHub.com/STREETSFOODS
      </Typography>
      <Typography variant="h4" gutterBottom>
        ksingh : GitHub.com/KSinghofficial
      </Typography>
      <Typography variant="h5" gutterBottom>
        Email : KSinghofficial@proton.me
      </Typography>
      <Typography variant="h6" gutterBottom>
        Birthday 🥮 : 18 Aug 
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
        subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="subtitle2" gutterBottom>
        subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur
      </Typography>
      <Typography variant="body1" gutterBottom>
        body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="body2" gutterBottom>
        body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
        blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
        neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
        quasi quidem quibusdam.
      </Typography>
      <Typography variant="button" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        caption text
      </Typography>
      <Typography variant="overline" display="block" gutterBottom>
        overline text
      </Typography>
    </Box>
  );
}
