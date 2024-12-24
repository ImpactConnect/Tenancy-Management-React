import { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Button,
  Grid,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  InputAdornment
} from '@mui/material';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';
import dayjs from 'dayjs';

function NewPaymentDialog({ open, onClose }) {
  const [formData, setFormData] = useState({
    tenant: '',
    property: '',
    unit: '',
    amount: '',
    paymentDate: dayjs(),
    paymentMethod: '',
    reference: '',
    notes: ''
  });

  // Mock data - replace with actual API data
  const tenants = [
    { id: 1, name: 'John Doe' },
    { id: 2, name: 'Jane Smith' }
  ];

  const properties = [
    { id: 1, name: 'Sunshine Apartments' },
    { id: 2, name: 'Green Valley Estate' }
  ];

  const units = [
    { id: 1, name: 'Unit 203' },
    { id: 2, name: 'Unit 105' }
  ];

  const paymentMethods = [
    { id: 'bank_transfer', name: 'Bank Transfer' },
    { id: 'cash', name: 'Cash' },
    { id: 'card', name: 'Card Payment' }
  ];

  const handleChange = (field) => (event) => {
    setFormData({
      ...formData,
      [field]: event.target.value
    });
  };

  const handleDateChange = (date) => {
    setFormData({
      ...formData,
      paymentDate: date
    });
  };

  const handleSubmit = () => {
    // TODO: Implement payment submission
    console.log('Submitting payment:', formData);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Record New Payment</DialogTitle>
      <DialogContent>
        <Grid container spacing={2} sx={{ mt: 1 }}>
          <Grid item xs={12}>
            <FormControl fullWidth>
              <InputLabel>Tenant</InputLabel>
              <Select
                value={formData.tenant}
                onChange={handleChange('tenant')}
                label="Tenant"
              >
                {tenants.map((tenant) => (
                  <MenuItem key={tenant.id} value={tenant.id}>
                    {tenant.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Property</InputLabel>
              <Select
                value={formData.property}
                onChange={handleChange('property')}
                label="Property"
              >
                {properties.map((property) => (
                  <MenuItem key={property.id} value={property.id}>
                    {property.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Unit</InputLabel>
              <Select
                value={formData.unit}
                onChange={handleChange('unit')}
                label="Unit"
              >
                {units.map((unit) => (
                  <MenuItem key={unit.id} value={unit.id}>
                    {unit.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Amount"
              value={formData.amount}
              onChange={handleChange('amount')}
              InputProps={{
                startAdornment: <InputAdornment position="start">₦</InputAdornment>,
              }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <DesktopDatePicker
              label="Payment Date"
              value={formData.paymentDate}
              onChange={handleDateChange}
              slotProps={{ textField: { fullWidth: true } }}
            />
          </Grid>

          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel>Payment Method</InputLabel>
              <Select
                value={formData.paymentMethod}
                onChange={handleChange('paymentMethod')}
                label="Payment Method"
              >
                {paymentMethods.map((method) => (
                  <MenuItem key={method.id} value={method.id}>
                    {method.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField
              fullWidth
              label="Reference Number"
              value={formData.reference}
              onChange={handleChange('reference')}
            />
          </Grid>

          <Grid item xs={12}>
            <TextField
              fullWidth
              multiline
              rows={3}
              label="Notes"
              value={formData.notes}
              onChange={handleChange('notes')}
            />
          </Grid>
        </Grid>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSubmit} variant="contained">
          Save Payment
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default NewPaymentDialog; 