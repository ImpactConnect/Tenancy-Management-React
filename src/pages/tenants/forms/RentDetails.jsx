import { Grid, TextField, MenuItem, InputAdornment } from '@mui/material';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

function RentDetails({ control }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Controller
          name="property"
          control={control}
          rules={{ required: 'Property selection is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              select
              fullWidth
              label="Select Property"
              error={!!error}
              helperText={error?.message}
            >
              {/* Fetch from mockProperties */}
              <MenuItem value="1">Sunshine Apartments</MenuItem>
              <MenuItem value="2">Green Valley Estate</MenuItem>
              <MenuItem value="3">Palm Heights</MenuItem>
            </TextField>
          )}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Controller
          name="rentAmount"
          control={control}
          rules={{ required: 'Rent amount is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Rent Amount"
              type="number"
              InputProps={{
                startAdornment: <InputAdornment position="start">₦</InputAdornment>,
              }}
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
              <MenuItem value="annual">Annual</MenuItem>
              <MenuItem value="biannual">Bi-Annual</MenuItem>
            </TextField>
          )}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Controller
          name="paymentMethod"
          control={control}
          rules={{ required: 'Payment method is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              select
              fullWidth
              label="Payment Method"
              error={!!error}
              helperText={error?.message}
            >
              <MenuItem value="bankTransfer">Bank Transfer</MenuItem>
              <MenuItem value="cash">Cash</MenuItem>
              <MenuItem value="cheque">Cheque</MenuItem>
            </TextField>
          )}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Controller
          name="startDate"
          control={control}
          rules={{ required: 'Start date is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              type="date"
              fullWidth
              label="Start Date"
              InputLabelProps={{ shrink: true }}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Controller
          name="duration"
          control={control}
          rules={{ required: 'Duration is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              select
              fullWidth
              label="Duration"
              error={!!error}
              helperText={error?.message}
            >
              <MenuItem value={12}>1 Year</MenuItem>
              <MenuItem value={24}>2 Years</MenuItem>
              <MenuItem value={36}>3 Years</MenuItem>
            </TextField>
          )}
        />
      </Grid>
    </Grid>
  );
}

RentDetails.propTypes = {
  control: PropTypes.object.isRequired
};

export default RentDetails; 