import { Grid, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

function BankDetails({ control, errors }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Controller
          name="bankName"
          control={control}
          rules={{ required: 'Bank name is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Bank Name"
              error={!!errors.bankName}
              helperText={errors.bankName?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="accountName"
          control={control}
          rules={{ required: 'Account name is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Account Name"
              error={!!errors.accountName}
              helperText={errors.accountName?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="accountNumber"
          control={control}
          rules={{ 
            required: 'Account number is required',
            pattern: {
              value: /^\d{10}$/,
              message: 'Invalid account number'
            }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Account Number"
              error={!!errors.accountNumber}
              helperText={errors.accountNumber?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="sortCode"
          control={control}
          rules={{ required: 'Sort code is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Sort Code"
              error={!!errors.sortCode}
              helperText={errors.sortCode?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="paymentPreference"
          control={control}
          rules={{ required: 'Payment preference is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              multiline
              rows={2}
              label="Payment Preference/Instructions"
              error={!!errors.paymentPreference}
              helperText={errors.paymentPreference?.message}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}

export default BankDetails; 