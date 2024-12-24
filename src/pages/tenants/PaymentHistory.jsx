import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Chip,
  Button,
  TextField,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Grid
} from '@mui/material';
import { Add as AddIcon } from '@mui/icons-material';
import { useForm, Controller } from 'react-hook-form';
import { toast } from 'react-hot-toast';

function PaymentHistory() {
  const { id } = useParams();
  const [payments, setPayments] = useState([]);
  const [openDialog, setOpenDialog] = useState(false);
  const { control, handleSubmit, reset } = useForm();

  useEffect(() => {
    // Mock data - replace with API call
    setPayments([
      {
        id: 1,
        date: '2024-02-01',
        amount: '₦1,500,000',
        type: 'Rent Payment',
        period: 'February 2024',
        method: 'Bank Transfer',
        reference: 'TRX123456',
        status: 'Completed'
      },
      {
        id: 2,
        date: '2024-01-01',
        amount: '₦1,500,000',
        type: 'Security Deposit',
        period: 'January 2024',
        method: 'Bank Transfer',
        reference: 'TRX123455',
        status: 'Completed'
      }
    ]);
  }, [id]);

  const handleAddPayment = (data) => {
    console.log('New payment:', data);
    // TODO: Implement API call to add payment
    toast.success('Payment recorded successfully');
    setOpenDialog(false);
    reset();
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'success';
      case 'Pending':
        return 'warning';
      case 'Failed':
        return 'error';
      default:
        return 'default';
    }
  };

  return (
    <Box>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4">
          Payment History
        </Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => setOpenDialog(true)}
        >
          Record Payment
        </Button>
      </Box>

      <Card>
        <TableContainer>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Date</TableCell>
                <TableCell>Type</TableCell>
                <TableCell>Period</TableCell>
                <TableCell align="right">Amount</TableCell>
                <TableCell>Method</TableCell>
                <TableCell>Reference</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {payments.map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{new Date(payment.date).toLocaleDateString()}</TableCell>
                  <TableCell>{payment.type}</TableCell>
                  <TableCell>{payment.period}</TableCell>
                  <TableCell align="right">{payment.amount}</TableCell>
                  <TableCell>{payment.method}</TableCell>
                  <TableCell>{payment.reference}</TableCell>
                  <TableCell>
                    <Chip
                      label={payment.status}
                      size="small"
                      color={getStatusColor(payment.status)}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>

      <Dialog open={openDialog} onClose={() => setOpenDialog(false)} maxWidth="sm" fullWidth>
        <form onSubmit={handleSubmit(handleAddPayment)}>
          <DialogTitle>Record New Payment</DialogTitle>
          <DialogContent>
            <Grid container spacing={2} sx={{ mt: 1 }}>
              <Grid item xs={12} md={6}>
                <Controller
                  name="amount"
                  control={control}
                  rules={{ required: 'Amount is required' }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Amount"
                      error={!!error}
                      helperText={error?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="date"
                  control={control}
                  rules={{ required: 'Date is required' }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      type="date"
                      fullWidth
                      label="Payment Date"
                      InputLabelProps={{ shrink: true }}
                      error={!!error}
                      helperText={error?.message}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="type"
                  control={control}
                  rules={{ required: 'Payment type is required' }}
                  render={({ field, fieldState: { error } }) => (
                    <TextField
                      {...field}
                      select
                      fullWidth
                      label="Payment Type"
                      error={!!error}
                      helperText={error?.message}
                    >
                      <option value="Rent Payment">Rent Payment</option>
                      <option value="Security Deposit">Security Deposit</option>
                      <option value="Service Charge">Service Charge</option>
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <Controller
                  name="method"
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
                      <option value="Bank Transfer">Bank Transfer</option>
                      <option value="Cash">Cash</option>
                      <option value="Check">Check</option>
                    </TextField>
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <Controller
                  name="reference"
                  control={control}
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Payment Reference"
                    />
                  )}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setOpenDialog(false)}>Cancel</Button>
            <Button type="submit" variant="contained">Save Payment</Button>
          </DialogActions>
        </form>
      </Dialog>
    </Box>
  );
}

export default PaymentHistory; 