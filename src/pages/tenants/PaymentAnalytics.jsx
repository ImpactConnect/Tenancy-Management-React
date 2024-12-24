import { useState, useEffect } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';
import {
  AttachMoney as MoneyIcon,
  TrendingUp as TrendingUpIcon,
  Warning as WarningIcon
} from '@mui/icons-material';
import StatCard from '../../components/dashboard/StatCard';

function PaymentAnalytics({ tenantId }) {
  const [analytics, setAnalytics] = useState({
    totalPaid: '₦4,500,000',
    outstandingAmount: '₦0',
    paymentHistory: {
      onTime: 3,
      late: 0,
      missed: 0
    },
    lastThreeMonths: [
      { month: 'January', amount: '₦1,500,000', status: 'Paid' },
      { month: 'February', amount: '₦1,500,000', status: 'Paid' },
      { month: 'March', amount: '₦1,500,000', status: 'Paid' }
    ],
    paymentTrend: 'Consistent'
  });

  const stats = [
    {
      title: 'Total Paid',
      value: analytics.totalPaid,
      icon: <MoneyIcon />,
      color: '#4caf50'
    },
    {
      title: 'Outstanding Amount',
      value: analytics.outstandingAmount,
      icon: <WarningIcon />,
      color: analytics.outstandingAmount === '₦0' ? '#4caf50' : '#f44336'
    },
    {
      title: 'Payment Trend',
      value: analytics.paymentTrend,
      icon: <TrendingUpIcon />,
      color: '#2196f3'
    }
  ];

  return (
    <Box>
      <Typography variant="h6" gutterBottom>
        Payment Analytics
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={4} key={stat.title}>
            <StatCard {...stat} />
          </Grid>
        ))}

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Payment History Overview
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={4}>
                  <Typography variant="body2" color="textSecondary">
                    On-time Payments
                  </Typography>
                  <Typography variant="h4">
                    {analytics.paymentHistory.onTime}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2" color="textSecondary">
                    Late Payments
                  </Typography>
                  <Typography variant="h4">
                    {analytics.paymentHistory.late}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="body2" color="textSecondary">
                    Missed Payments
                  </Typography>
                  <Typography variant="h4">
                    {analytics.paymentHistory.missed}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Last 3 Months
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Month</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell>Status</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {analytics.lastThreeMonths.map((month) => (
                      <TableRow key={month.month}>
                        <TableCell>{month.month}</TableCell>
                        <TableCell align="right">{month.amount}</TableCell>
                        <TableCell>{month.status}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PaymentAnalytics; 