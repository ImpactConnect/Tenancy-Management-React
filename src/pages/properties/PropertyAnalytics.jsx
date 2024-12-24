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
  Home as HomeIcon,
  AttachMoney as MoneyIcon,
  Warning as WarningIcon,
  CheckCircle as CheckCircleIcon,
  TrendingUp as TrendingUpIcon
} from '@mui/icons-material';
import StatCard from '../../components/dashboard/StatCard';

function PropertyAnalytics() {
  const [analytics, setAnalytics] = useState({
    totalProperties: 45,
    occupiedUnits: 87,
    totalUnits: 100,
    monthlyRevenue: '₦15.5M',
    yearlyRevenue: '₦186M',
    occupancyRate: '87%',
    defaultRate: '5%',
    propertyTypes: [
      { type: 'Apartment', count: 20, revenue: '₦8.5M' },
      { type: 'Shop', count: 15, revenue: '₦4.5M' },
      { type: 'Warehouse', count: 10, revenue: '₦2.5M' }
    ],
    recentTransactions: [
      {
        id: 1,
        property: 'Sunshine Apartments',
        tenant: 'John Doe',
        amount: '₦1.5M',
        date: '2024-03-15',
        type: 'Rent Payment'
      },
      // Add more transactions...
    ]
  });

  const stats = [
    {
      title: 'Total Properties',
      value: analytics.totalProperties,
      icon: <HomeIcon />,
      color: '#2196f3'
    },
    {
      title: 'Occupancy Rate',
      value: analytics.occupancyRate,
      icon: <TrendingUpIcon />,
      color: '#4caf50'
    },
    {
      title: 'Monthly Revenue',
      value: analytics.monthlyRevenue,
      icon: <MoneyIcon />,
      color: '#ff9800'
    },
    {
      title: 'Default Rate',
      value: analytics.defaultRate,
      icon: <WarningIcon />,
      color: '#f44336'
    }
  ];

  return (
    <Box>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Property Analytics
      </Typography>

      <Grid container spacing={3}>
        {stats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
            <StatCard {...stat} />
          </Grid>
        ))}

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Revenue by Property Type
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Property Type</TableCell>
                      <TableCell align="center">Count</TableCell>
                      <TableCell align="right">Monthly Revenue</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {analytics.propertyTypes.map((type) => (
                      <TableRow key={type.type}>
                        <TableCell>{type.type}</TableCell>
                        <TableCell align="center">{type.count}</TableCell>
                        <TableCell align="right">{type.revenue}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Occupancy Overview
              </Typography>
              <Box sx={{ textAlign: 'center', my: 3 }}>
                <Typography variant="h3" color="primary">
                  {analytics.occupancyRate}
                </Typography>
                <Typography color="textSecondary">
                  {analytics.occupiedUnits} out of {analytics.totalUnits} units occupied
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Transactions
              </Typography>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell>Property</TableCell>
                      <TableCell>Tenant</TableCell>
                      <TableCell>Type</TableCell>
                      <TableCell align="right">Amount</TableCell>
                      <TableCell>Date</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {analytics.recentTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>{transaction.property}</TableCell>
                        <TableCell>{transaction.tenant}</TableCell>
                        <TableCell>{transaction.type}</TableCell>
                        <TableCell align="right">{transaction.amount}</TableCell>
                        <TableCell>{new Date(transaction.date).toLocaleDateString()}</TableCell>
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

export default PropertyAnalytics; 