import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function Message() {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Message
      </Typography>
      <Grid item xs={12}>
      <TextField
      color="success"
          id="standard-multiline-static"
          label="Type Something Here."
          multiline
          rows={4}
          fullWidth
          // defaultValue="Default Value"
          variant="standard"
        />
        </Grid>
    </React.Fragment>
  );
}
