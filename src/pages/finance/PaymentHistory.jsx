import { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  TextField,
  MenuItem,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  Add as AddIcon,
  Download as DownloadIcon,
  FilterList as FilterIcon,
  PieChart as ChartIcon
} from '@mui/icons-material';
import PaymentStats from '../../components/finance/PaymentStats';
import PaymentHistoryTable from '../../components/finance/PaymentHistoryTable';
import OutstandingPayments from '../../components/finance/OutstandingPayments';
import PaymentSummaryChart from '../../components/finance/PaymentSummaryChart';
import NewPaymentDialog from '../../components/finance/NewPaymentDialog';

function PaymentHistory() {
  const [period, setPeriod] = useState('monthly');
  const [openNewPayment, setOpenNewPayment] = useState(false);
  const [showChart, setShowChart] = useState(false);

  const handleExport = () => {
    // TODO: Implement export functionality
    console.log('Exporting payment history...');
  };

  const stats = {
    totalRevenue: '₦15,500,000',
    pendingPayments: '₦2,700,000',
    overduePayments: '₦800,000',
    collectionRate: '82.5%'
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4">Payment History</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            select
            size="small"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            sx={{ width: 150 }}
          >
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="quarterly">Quarterly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
          </TextField>
          <Tooltip title="Toggle Chart View">
            <IconButton onClick={() => setShowChart(!showChart)}>
              <ChartIcon />
            </IconButton>
          </Tooltip>
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
            onClick={handleExport}
          >
            Export
          </Button>
          <Button
            variant="contained"
            startIcon={<AddIcon />}
            onClick={() => setOpenNewPayment(true)}
          >
            Record Payment
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12}>
          <PaymentStats stats={stats} />
        </Grid>

        {showChart && (
          <Grid item xs={12}>
            <Card>
              <CardContent>
                <Typography variant="h6" gutterBottom>
                  Payment Summary
                </Typography>
                <PaymentSummaryChart period={period} />
              </CardContent>
            </Card>
          </Grid>
        )}

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Payments
              </Typography>
              <PaymentHistoryTable />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Outstanding Payments
              </Typography>
              <OutstandingPayments />
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <NewPaymentDialog
        open={openNewPayment}
        onClose={() => setOpenNewPayment(false)}
      />
    </Box>
  );
}

export default PaymentHistory; 