import React from 'react';
import { Typography, TextField, Button } from '@mui/material';

const CheckoutForm = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Checkout</Typography>
      <form>
        <TextField
          label="Name"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Address"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Credit Card"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <Button
          variant="contained"
          color="primary"
          type="submit"
          style={{ marginTop: '20px' }}
        >
          Complete Purchase
        </Button>
      </form>
    </div>
  );
};

export default CheckoutForm;