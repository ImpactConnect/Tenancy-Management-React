import { 
  Grid, 
  TextField, 
  MenuItem,
  FormControl,
  FormLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  Divider,
  Box
} from '@mui/material';
import { Controller } from 'react-hook-form';

function AdditionalDetails({ control, errors }) {
  const propertyConditions = [
    'Excellent',
    'Good',
    'Fair',
    'Needs Minor Repairs',
    'Needs Major Repairs'
  ];

  const amenitiesOptions = [
    'Air Conditioning',
    'Balcony',
    'Security Gate',
    'CCTV',
    'Generator',
    'Water Tank',
    'Swimming Pool',
    'Gym',
    'Children Playground',
    'Security Personnel',
    'Elevator',
    'Parking Space'
  ];

  const utilitiesOptions = [
    'Electricity',
    'Water',
    'Waste Disposal',
    'Internet',
    'Cable TV',
    'Gas'
  ];

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <Controller
          name="yearBuilt"
          control={control}
          rules={{ 
            required: 'Year built is required',
            min: { value: 1900, message: 'Invalid year' },
            max: { value: new Date().getFullYear(), message: 'Year cannot be in the future' }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              fullWidth
              label="Year Built"
              error={!!errors.yearBuilt}
              helperText={errors.yearBuilt?.message}
            />
          )}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Controller
          name="propertyCondition"
          control={control}
          rules={{ required: 'Property condition is required' }}
          render={({ field }) => (
            <TextField
              {...field}
              select
              fullWidth
              label="Property Condition"
              error={!!errors.propertyCondition}
              helperText={errors.propertyCondition?.message}
            >
              {propertyConditions.map((condition) => (
                <MenuItem key={condition} value={condition}>
                  {condition}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Amenities
        </Typography>
        <FormControl component="fieldset">
          <FormGroup>
            <Grid container spacing={2}>
              {amenitiesOptions.map((amenity) => (
                <Grid item xs={12} sm={6} md={4} key={amenity}>
                  <Controller
                    name={`amenities.${amenity}`}
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <FormControlLabel
                        control={<Checkbox {...field} checked={field.value} />}
                        label={amenity}
                      />
                    )}
                  />
                </Grid>
              ))}
            </Grid>
          </FormGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Utilities Included
        </Typography>
        <FormControl component="fieldset">
          <FormGroup>
            <Grid container spacing={2}>
              {utilitiesOptions.map((utility) => (
                <Grid item xs={12} sm={6} md={4} key={utility}>
                  <Controller
                    name={`utilities.${utility}`}
                    control={control}
                    defaultValue={false}
                    render={({ field }) => (
                      <FormControlLabel
                        control={<Checkbox {...field} checked={field.value} />}
                        label={utility}
                      />
                    )}
                  />
                </Grid>
              ))}
            </Grid>
          </FormGroup>
        </FormControl>
      </Grid>

      <Grid item xs={12} md={6}>
        <Controller
          name="parkingSpaces"
          control={control}
          rules={{ 
            required: 'Number of parking spaces is required',
            min: { value: 0, message: 'Cannot be negative' }
          }}
          render={({ field }) => (
            <TextField
              {...field}
              type="number"
              fullWidth
              label="Number of Parking Spaces"
              error={!!errors.parkingSpaces}
              helperText={errors.parkingSpaces?.message}
            />
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Divider sx={{ my: 2 }} />
        <Typography variant="subtitle1" sx={{ mb: 2 }}>
          Additional Fees
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Controller
              name="securityDeposit"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Security Deposit (₦)"
                  error={!!errors.securityDeposit}
                  helperText={errors.securityDeposit?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="serviceCharge"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Service Charge (₦)"
                  error={!!errors.serviceCharge}
                  helperText={errors.serviceCharge?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="legalFee"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Legal Fee (₦)"
                  error={!!errors.legalFee}
                  helperText={errors.legalFee?.message}
                />
              )}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Controller
              name="agencyFee"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  label="Agency Fee (₦)"
                  error={!!errors.agencyFee}
                  helperText={errors.agencyFee?.message}
                />
              )}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Controller
          name="additionalNotes"
          control={control}
          render={({ field }) => (
            <TextField
              {...field}
              fullWidth
              multiline
              rows={3}
              label="Additional Notes"
              placeholder="Any other important details about the property..."
              error={!!errors.additionalNotes}
              helperText={errors.additionalNotes?.message}
            />
          )}
        />
      </Grid>
    </Grid>
  );
}

export default AdditionalDetails; 