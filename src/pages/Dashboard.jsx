import { Grid, Card, CardContent, Typography, Box, CircularProgress } from '@mui/material';
import {
  Home as HomeIcon,
  Person as PersonIcon,
  AttachMoney as MoneyIcon,
  Assignment as DocumentIcon
} from '@mui/icons-material';
import StatCard from '../components/dashboard/StatCard';
import RevenueChart from '../components/dashboard/RevenueChart';
import OccupancyRate from '../components/dashboard/OccupancyRate';
import RentCollection from '../components/dashboard/RentCollection';
import MaintenanceOverview from '../components/dashboard/MaintenanceOverview';
import RecentActivities from '../components/dashboard/RecentActivities';
import DuePayments from '../components/dashboard/DuePayments';
import { useState, useEffect } from 'react';

function Dashboard() {
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    // Simulate data loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleComponentError = (componentName, error) => {
    console.error(`Error in ${componentName}:`, error);
    setErrors(prev => ({
      ...prev,
      [componentName]: true
    }));
  };

  if (isLoading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
        <CircularProgress />
      </Box>
    );
  }

  const stats = [
    {
      title: 'Total Properties',
      value: '45',
      icon: <HomeIcon />,
      color: '#2196f3'
    },
    {
      title: 'Total Tenants',
      value: '87',
      icon: <PersonIcon />,
      color: '#4caf50'
    },
    {
      title: 'Monthly Revenue',
      value: '₦15.5M',
      icon: <MoneyIcon />,
      color: '#f44336'
    },
    {
      title: 'Active Leases',
      value: '76',
      icon: <DocumentIcon />,
      color: '#ff9800'
    }
  ];

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" sx={{ mb: 4 }}>
        Dashboard
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
                Revenue Analytics
              </Typography>
              <RevenueChart />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Occupancy Rate
              </Typography>
              <OccupancyRate />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Rent Collection Status
              </Typography>
              <RentCollection />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Maintenance Requests
              </Typography>
              <MaintenanceOverview />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Recent Activities
              </Typography>
              <RecentActivities />
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Due Payments
              </Typography>
              <DuePayments />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Dashboard; 