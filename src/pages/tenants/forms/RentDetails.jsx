import { Grid, TextField, MenuItem } from '@mui/material';
import { Controller } from 'react-hook-form';

function RentDetails({ control, errors }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Controller
          name="rentAmount"
          control={control}
          rules={{ required: 'Rent amount is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Monthly Rent"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Controller
          name="securityDeposit"
          control={control}
          rules={{ required: 'Security deposit is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Security Deposit"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Controller
          name="leaseStartDate"
          control={control}
          rules={{ required: 'Lease start date is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              type="date"
              fullWidth
              label="Lease Start Date"
              InputLabelProps={{ shrink: true }}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Controller
          name="leaseEndDate"
          control={control}
          rules={{ required: 'Lease end date is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              type="date"
              fullWidth
              label="Lease End Date"
              InputLabelProps={{ shrink: true }}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Controller
          name="paymentFrequency"
          control={control}
          rules={{ required: 'Payment frequency is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              select
              fullWidth
              label="Payment Frequency"
              error={!!error}
              helperText={error?.message}
            >
              <MenuItem value="monthly">Monthly</MenuItem>
              <MenuItem value="quarterly">Quarterly</MenuItem>
              <MenuItem value="yearly">Yearly</MenuItem>
            </TextField>
          )}
        />
      </Grid>
    </Grid>
  );
}

export default RentDetails; 