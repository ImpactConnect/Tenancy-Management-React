import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Grid,
  TextField,
  Button,
  MenuItem,
  IconButton,
  FormControlLabel,
  Checkbox,
  Stack,
  Chip
} from '@mui/material';
import {
  Add as AddIcon,
  Delete as DeleteIcon,
  CloudUpload as UploadIcon
} from '@mui/icons-material';
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import { toast } from 'react-hot-toast';

const propertyTypes = [
  'Apartment',
  'Self Contain',
  'Shop',
  'Warehouse',
  '2 Bedroom Flat',
  '3 Bedroom Flat',
  'Duplex',
  'Office Space',
  'Other'
];

const amenities = [
  'Swimming Pool',
  'Gym',
  'Security',
  'Parking Space',
  'Generator',
  'Water Supply',
  'CCTV',
  'Children Playground',
  'Internet'
];

const utilities = [
  'Electricity',
  'Water',
  'Gas',
  'Waste Disposal',
  'Internet',
  'Cable TV'
];

function AddProperty() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [uploadedImages, setUploadedImages] = useState([]);
  
  const { control, handleSubmit, formState: { errors }, watch } = useForm({
    defaultValues: {
      name: '',
      address: '',
      landlordId: '',
      description: '',
      propertyTypes: [{ type: '', units: '', rentPrice: '' }],
      yearBuilt: '',
      condition: '',
      amenities: [],
      includedUtilities: [],
      images: []
    }
  });

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'propertyTypes'
  });

  const handleImageUpload = (event) => {
    const files = Array.from(event.target.files);
    const newImages = files.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      url: URL.createObjectURL(file)
    }));
    setUploadedImages(prev => [...prev, ...newImages]);
  };

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // TODO: Implement API call
      console.log('Form data:', data);
      toast.success('Property added successfully');
      navigate('/properties');
    } catch (error) {
      toast.error('Failed to add property');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Add Property
      </Typography>

      <Card>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Controller
                  name="name"
                  control={control}
                  rules={{ required: 'Property name is required' }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Property Name"
                      error={!!error}
                      helperText={error?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Controller
                  name="landlordId"
                  control={control}
                  rules={{ required: 'Landlord selection is required' }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      select
                      fullWidth
                      label="Select Landlord"
                      error={!!error}
                      helperText={error?.message}
                    >
                      <MenuItem value="1">John Doe</MenuItem>
                      <MenuItem value="2">Jane Smith</MenuItem>
                    </TextField>
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="address"
                  control={control}
                  rules={{ required: 'Address is required' }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Address"
                      error={!!error}
                      helperText={error?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Property Types and Units
                </Typography>
                {fields.map((field, index) => (
                  <Box key={field.id} sx={{ mb: 2 }}>
                    <Grid container spacing={2} alignItems="center">
                      <Grid item xs={12} md={4}>
                        <Controller
                          name={`propertyTypes.${index}.type`}
                          control={control}
                          rules={{ required: 'Property type is required' }}
                          render={({ field, fieldState: { error } }) => (
                            <TextField
                              {...field}
                              select
                              fullWidth
                              label="Type"
                              error={!!error}
                              helperText={error?.message}
                            >
                              {propertyTypes.map((type) => (
                                <MenuItem key={type} value={type}>
                                  {type}
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
                          rules={{ required: 'Number of units is required' }}
                          render={({ field, fieldState: { error } }) => (
                            <TextField
                              {...field}
                              fullWidth
                              type="number"
                              label="Units Available"
                              error={!!error}
                              helperText={error?.message}
                            />
                          )}
                        />
                      </Grid>
                      <Grid item xs={12} md={4}>
                <Controller
                          name={`propertyTypes.${index}.rentPrice`}
                  control={control}
                          rules={{ required: 'Rent price is required' }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      fullWidth
                              label="Rent Price"
                      error={!!error}
                      helperText={error?.message}
                    />
                  )}
                />
                      </Grid>
                      <Grid item xs={12} md={1}>
                        <IconButton 
                          color="error" 
                          onClick={() => remove(index)}
                          disabled={fields.length === 1}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Grid>
                    </Grid>
                  </Box>
                ))}
                <Button
                  startIcon={<AddIcon />}
                  onClick={() => append({ type: '', units: '', rentPrice: '' })}
                >
                  Add Another Type
                </Button>
              </Grid>

              <Grid item xs={12} md={6}>
                <Controller
                  name="yearBuilt"
                  control={control}
                  rules={{ required: 'Year built is required' }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Year Built"
                      type="number"
                      error={!!error}
                      helperText={error?.message}
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={6}>
                <Controller
                  name="condition"
                  control={control}
                  rules={{ required: 'Property condition is required' }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      select
                      fullWidth
                      label="Property Condition"
                      error={!!error}
                      helperText={error?.message}
                    >
                      <MenuItem value="New">New</MenuItem>
                      <MenuItem value="Excellent">Excellent</MenuItem>
                      <MenuItem value="Good">Good</MenuItem>
                      <MenuItem value="Fair">Fair</MenuItem>
                      <MenuItem value="Needs Renovation">Needs Renovation</MenuItem>
                    </TextField>
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Amenities
                </Typography>
                <Controller
                  name="amenities"
                  control={control}
                  render={({ field }) => (
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {amenities.map((amenity) => (
                        <Chip
                          key={amenity}
                          label={amenity}
                          onClick={() => {
                            const current = field.value || [];
                            const newValue = current.includes(amenity)
                              ? current.filter(item => item !== amenity)
                              : [...current, amenity];
                            field.onChange(newValue);
                          }}
                          color={field.value?.includes(amenity) ? "primary" : "default"}
                        />
                      ))}
                    </Stack>
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Utilities Included
                </Typography>
                <Controller
                  name="includedUtilities"
                  control={control}
                  render={({ field }) => (
                    <Stack direction="row" spacing={1} flexWrap="wrap" gap={1}>
                      {utilities.map((utility) => (
                        <Chip
                          key={utility}
                          label={utility}
                          onClick={() => {
                            const current = field.value || [];
                            const newValue = current.includes(utility)
                              ? current.filter(item => item !== utility)
                              : [...current, utility];
                            field.onChange(newValue);
                          }}
                          color={field.value?.includes(utility) ? "primary" : "default"}
                        />
                      ))}
                    </Stack>
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="description"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      multiline
                      rows={4}
                      label="Property Description"
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Typography variant="subtitle1" gutterBottom>
                  Property Images
                </Typography>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  style={{ display: 'none' }}
                  id="property-images"
                  onChange={handleImageUpload}
                />
                <label htmlFor="property-images">
                  <Button
                    variant="outlined"
                    component="span"
                    startIcon={<UploadIcon />}
                  >
                    Upload Images
                  </Button>
                </label>
                <Box sx={{ mt: 2, display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {uploadedImages.map((image) => (
                    <Box
                      key={image.id}
                      component="img"
                      src={image.url}
                      sx={{
                        width: 100,
                        height: 100,
                        objectFit: 'cover',
                        borderRadius: 1
                      }}
                    />
                  ))}
                </Box>
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                  <Button onClick={() => navigate('/properties')}>
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    disabled={loading}
                  >
                    Add Property
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>
    </Box>
  );
}

export default AddProperty; 