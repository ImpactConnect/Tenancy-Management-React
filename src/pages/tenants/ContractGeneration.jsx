import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  Grid,
  FormControlLabel,
  Checkbox,
  CircularProgress
} from '@mui/material';
import {
  PictureAsPdf as PdfIcon,
  Download as DownloadIcon,
  Preview as PreviewIcon
} from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { generateContractPDF } from '../../services/contractService';
import ContractPreview from '../../components/contracts/ContractPreview';

function ContractGeneration() {
  const { id } = useParams();
  const [loading, setLoading] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [tenant, setTenant] = useState(null);
  const { control, handleSubmit, watch } = useForm({
    defaultValues: {
      includeUtilities: true,
      includeMaintenance: true,
      includeParking: false
    }
  });

  useEffect(() => {
    // Mock tenant data - replace with API call
    setTenant({
      name: 'John Doe',
      property: 'Sunshine Apartments',
      unit: 'A1'
    });
  }, [id]);

  const handleGenerateContract = async (data) => {
    setLoading(true);
    try {
      const doc = generateContractPDF(data, tenant);
      doc.save(`tenancy_agreement_${tenant.name.replace(/\s+/g, '_')}.pdf`);
      toast.success('Contract generated successfully');
    } catch (error) {
      toast.error('Failed to generate contract');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const handlePreview = () => {
    setPreviewOpen(true);
  };

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Generate Tenancy Contract
      </Typography>

      <Card>
        <CardContent>
          <form onSubmit={handleSubmit(handleGenerateContract)}>
            <Grid container spacing={3}>
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
                  name="endDate"
                  control={control}
                  rules={{ required: 'End date is required' }}
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
                  name="rentAmount"
                  control={control}
                  rules={{ required: 'Rent amount is required' }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Monthly Rent Amount"
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

              <Grid item xs={12}>
                <Typography variant="h6" gutterBottom>
                  Contract Terms
                </Typography>
              </Grid>

              <Grid item xs={12} md={4}>
                <Controller
                  name="includeUtilities"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox {...field} checked={field.value} />}
                      label="Include Utilities"
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <Controller
                  name="includeMaintenance"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox {...field} checked={field.value} />}
                      label="Include Maintenance"
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12} md={4}>
                <Controller
                  name="includeParking"
                  control={control}
                  render={({ field }) => (
                    <FormControlLabel
                      control={<Checkbox {...field} checked={field.value} />}
                      label="Include Parking"
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Controller
                  name="additionalTerms"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      multiline
                      rows={4}
                      label="Additional Terms & Conditions"
                    />
                  )}
                />
              </Grid>

              <Grid item xs={12}>
                <Box sx={{ display: 'flex', gap: 2, justifyContent: 'flex-end' }}>
                  <Button
                    variant="outlined"
                    startIcon={<PreviewIcon />}
                    disabled={loading}
                    onClick={handlePreview}
                  >
                    Preview
                  </Button>
                  <Button
                    type="submit"
                    variant="contained"
                    startIcon={loading ? <CircularProgress size={20} /> : <PdfIcon />}
                    disabled={loading}
                  >
                    Generate Contract
                  </Button>
                </Box>
              </Grid>
            </Grid>
          </form>
        </CardContent>
      </Card>

      <ContractPreview
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        data={watch()}
        tenant={tenant}
      />
    </Box>
  );
}

export default ContractGeneration; 