import { Grid, TextField, IconButton, Box, MenuItem } from '@mui/material';
import { Controller, useFieldArray } from 'react-hook-form';
import { Add as AddIcon, Delete as DeleteIcon } from '@mui/icons-material';

function PropertyTypes({ control, errors }) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "propertyTypes"
  });

  const propertyTypeOptions = [
    'Apartment',
    'Self Contain',
    'Shop',
    'Warehouse',
    '2 Bedroom Flat',
    '3 Bedroom Flat',
    'Office Space',
    'Land',
    'Other'
  ];

  return (
    <Box>
      {fields.map((field, index) => (
        <Grid container spacing={3} key={field.id} sx={{ mb: 2 }}>
          <Grid item xs={12} md={4}>
            <Controller
              name={`propertyTypes.${index}.type`}
              control={control}
              rules={{ required: 'Property type is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  select
                  fullWidth
                  label="Property Type"
                  error={!!errors.propertyTypes?.[index]?.type}
                  helperText={errors.propertyTypes?.[index]?.type?.message}
                >
                  {propertyTypeOptions.map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
          </Grid>

          <Grid item xs={12} md={3}>
            <Controller
              name={`propertyTypes.${index}.units`}
              control={control}
              rules={{ 
                required: 'Number of units is required',
                min: { value: 1, message: 'Must have at least 1 unit' }
              }}
              render={({ field }) => (
                <TextField
                  {...field}
                  type="number"
                  fullWidth
                  label="Available Units"
                  error={!!errors.propertyTypes?.[index]?.units}
                  helperText={errors.propertyTypes?.[index]?.units?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={4}>
            <Controller
              name={`propertyTypes.${index}.rentPrice`}
              control={control}
              rules={{ required: 'Rent price is required' }}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Rent Price (₦)"
                  error={!!errors.propertyTypes?.[index]?.rentPrice}
                  helperText={errors.propertyTypes?.[index]?.rentPrice?.message}
                />
              )}
            />
          </Grid>

          <Grid item xs={12} md={1} sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton
              onClick={() => remove(index)}
              disabled={fields.length === 1}
              color="error"
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}

      <Box sx={{ mt: 2 }}>
        <Button
          startIcon={<AddIcon />}
          onClick={() => append({ type: '', units: 0, rentPrice: '' })}
        >
          Add Property Type
        </Button>
      </Box>
    </Box>
  );
}

export default PropertyTypes; 