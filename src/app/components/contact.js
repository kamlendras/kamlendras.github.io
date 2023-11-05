"use client"
import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import You from './you';
import Message from './message';
import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});



const steps = ['You', 'Message'];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <You />;
    case 1:
      return <Message />;
    case 2:
      return <x />;
    default:
      throw new Error('Unknown step');
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  return (
    <div id="contact">
<Toolbar/>
<ThemeProvider theme={darkTheme}>
      <CssBaseline />

      <Container component="main" maxWidth="sm" sx={{  boxShadow: 3, mb: 4 }}>
        <Paper variant="outlined" sx={{   boxShadow: 3,  my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
        <Typography component="h1" variant="h4" align="center">
            Contact Me
          </Typography>
          <Stepper  activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <React.Fragment>
              <Typography variant="h5" gutterBottom>
                Thank you for your Message <img src="/cele.svg" height={29} width={29} />.
              </Typography>
              <Typography variant="subtitle1">
               {/* I will replay you as soon as I read your Message :) */}
               Note : Your message is not sent because i have not connected backend server till now.<br/>
               kindly email at kamlendras@proton.me
              </Typography>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button color="success" onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Back
                  </Button>
                )}

                <Button color="success"
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                >
                  {activeStep === steps.length - 1 ? 'send' : 'Next'}
                </Button>
              </Box>
            </React.Fragment>
          )}
        </Paper>
      
      </Container>
      </ThemeProvider>
    </div>
  );
}
