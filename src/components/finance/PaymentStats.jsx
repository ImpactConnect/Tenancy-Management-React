import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import {
  TrendingUp as TrendingUpIcon,
  AccessTime as PendingIcon,
  Warning as OverdueIcon,
  ShowChart as RateIcon
} from '@mui/icons-material';

function PaymentStats({ stats }) {
  const statItems = [
    {
      title: 'Total Revenue',
      value: stats.totalRevenue,
      icon: <TrendingUpIcon />,
      color: '#4caf50'
    },
    {
      title: 'Pending Payments',
      value: stats.pendingPayments,
      icon: <PendingIcon />,
      color: '#ff9800'
    },
    {
      title: 'Overdue Payments',
      value: stats.overduePayments,
      icon: <OverdueIcon />,
      color: '#f44336'
    },
    {
      title: 'Collection Rate',
      value: stats.collectionRate,
      icon: <RateIcon />,
      color: '#2196f3'
    }
  ];

  return (
    <Grid container spacing={3}>
      {statItems.map((item) => (
        <Grid item xs={12} sm={6} md={3} key={item.title}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: 40,
                    height: 40,
                    borderRadius: 1,
                    bgcolor: `${item.color}20`,
                    color: item.color,
                    mr: 2
                  }}
                >
                  {item.icon}
                </Box>
                <Typography variant="subtitle2" color="textSecondary">
                  {item.title}
                </Typography>
              </Box>
              <Typography variant="h4">
                {item.value}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default PaymentStats; 