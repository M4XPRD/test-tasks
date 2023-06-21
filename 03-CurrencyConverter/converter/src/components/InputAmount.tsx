import { Grid, InputAdornment, TextField } from '@mui/material';

const InputAmount = () => (
  <Grid item xs={12} md={3}>
    <TextField
      label="Количество"
      fullWidth
      InputProps={{
        type: 'number',
        startAdornment: <InputAdornment position="start">$</InputAdornment>,
      }}
    />
  </Grid>
);

export default InputAmount;
