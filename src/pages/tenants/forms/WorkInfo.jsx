import { Grid, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

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
          name="occupation"
          control={control}
          rules={{ required: 'Occupation is required' }}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Occupation"
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

      <Grid item xs={12} md={6}>
        <Controller
          name="workEmail"
          control={control}
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              label="Work Email"
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
          render={({ field, fieldState: { error } }) => (
            <TextField
              {...field}
              fullWidth
              multiline
              rows={3}
              label="Work Address"
              error={!!error}
              helperText={error?.message}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}

export default WorkInfo; 