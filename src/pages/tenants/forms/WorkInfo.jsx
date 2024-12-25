import { Grid, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import PropTypes from 'prop-types';

function WorkInfo({ control, errors }) {
  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Controller
          name="employer"
          control={control}
          rules={{ required: 'Employer name is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Employer"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Controller
          name="position"
          control={control}
          rules={{ required: 'Position is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Position"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Controller
          name="workAddress"
          control={control}
          rules={{ required: 'Work address is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Work Address"
              multiline
              rows={2}
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Controller
          name="workEmail"
          control={control}
          rules={{ 
            required: 'Work email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Work Email"
              type="email"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Controller
          name="workPhone"
          control={control}
          rules={{ required: 'Work phone is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Work Phone"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}

WorkInfo.propTypes = {
  control: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};

export default WorkInfo; 