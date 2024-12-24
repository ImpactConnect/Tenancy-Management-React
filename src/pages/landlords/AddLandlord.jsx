import { useState } from 'react';
import {
  Box,
  Paper,
  Typography,
  Grid,
  Button
} from '@mui/material';
import { useForm } from 'react-hook-form';
import PersonalDetails from './forms/PersonalDetails';
import BankDetails from './forms/BankDetails';

function AddLandlord() {
  const { control, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    // TODO: Submit to backend
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Add New Landlord
      </Typography>

      <Paper sx={{ p: 4 }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={4}>
            <Grid item xs={12}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Personal Details
              </Typography>
              <PersonalDetails control={control} errors={errors} />
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h6" sx={{ mb: 2 }}>
                Bank Details
              </Typography>
              <BankDetails control={control} errors={errors} />
            </Grid>

            <Grid item xs={12}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                <Button
                  variant="contained"
                  type="submit"
                  color="primary"
                  size="large"
                >
                  Register Landlord
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Box>
  );
}

export default AddLandlord; 