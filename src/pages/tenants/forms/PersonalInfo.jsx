import { Grid, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

function PersonalInfo({ control, errors }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Controller
          name="firstName"
          control={control}
          rules={{ required: 'First name is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="First Name"
              error={!!errors.firstName}
              helperText={errors.firstName?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="lastName"
          control={control}
          rules={{ required: 'Last name is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Last Name"
              error={!!errors.lastName}
              helperText={errors.lastName?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="email"
          control={control}
          rules={{ 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Email"
              error={!!errors.email}
              helperText={errors.email?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="phone"
          control={control}
          rules={{ required: 'Phone number is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Phone Number"
              error={!!errors.phone}
              helperText={errors.phone?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12}>
        <Controller
          name="address"
          control={control}
          rules={{ required: 'Address is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              multiline
              rows={3}
              label="Current Address"
              error={!!errors.address}
              helperText={errors.address?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="nextOfKinName"
          control={control}
          rules={{ required: 'Next of kin name is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Next of Kin Name"
              error={!!errors.nextOfKinName}
              helperText={errors.nextOfKinName?.message}
            />
          )}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Controller
          name="nextOfKinPhone"
          control={control}
          rules={{ required: 'Next of kin phone is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Next of Kin Phone"
              error={!!errors.nextOfKinPhone}
              helperText={errors.nextOfKinPhone?.message}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}

export default PersonalInfo; 