import { Grid, TextField, MenuItem } from '@mui/material';
import { Controller } from 'react-hook-form';

function BasicDetails({ control, errors }) {
  // Mock landlords data - replace with actual data from backend
  const landlords = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' },
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Controller
          name="propertyName"
          control={control}
          rules={{ required: 'Property name is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              label="Property Name"
              error={!!errors.propertyName}
              helperText={errors.propertyName?.message}
            />
          )}
        />
      </Grid>
      
      <Grid item xs={12} md={6}>
        <Controller
          name="landlordId"
          control={control}
          rules={{ required: 'Landlord selection is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              select
              fullWidth
              label="Select Landlord"
              error={!!errors.landlordId}
              helperText={errors.landlordId?.message}
            >
              {landlords.map((landlord) => (
                <MenuItem key={landlord.id} value={landlord.id}>
                  {landlord.name}
                </MenuItem>
              ))}
            </TextField>
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
              label="Property Address"
              error={!!errors.address}
              helperText={errors.address?.message}
            />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Controller
          name="description"
          control={control}
          rules={{ required: 'Property description is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              multiline
              rows={4}
              label="Property Description"
              error={!!errors.description}
              helperText={errors.description?.message}
              placeholder="Describe the property, its features, and amenities..."
            />
          )}
        />
      </Grid>
    </Grid>
  );
}

export default BasicDetails; 