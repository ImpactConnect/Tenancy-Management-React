import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Button,
  Divider,
  Chip,
  List,
  ListItem,
  ListItemText
} from '@mui/material';
import {
  Email as EmailIcon,
  Phone as PhoneIcon,
  Edit as EditIcon,
  ArrowBack as ArrowBackIcon,
  LocationOn as LocationIcon,
  Person as PersonIcon,
  Business as BusinessIcon,
  Apartment as ApartmentIcon,
  TrendingUp as TrendingUpIcon,
  Engineering as EngineeringIcon,
  AccountBalance as AccountBalanceIcon
} from '@mui/icons-material';
import { mockLandlords, mockProperties } from '../../data/mockData';

function LandlordProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const landlord = mockLandlords.find(l => l.id === parseInt(id));
  const landlordProperties = mockProperties.filter(p => 
    landlord.properties.includes(p.name)
  );

  if (!landlord) {
    return <Typography>Landlord not found</Typography>;
  }

  const totalUnits = landlordProperties.reduce((sum, prop) => sum + prop.units, 0);
  const occupiedUnits = landlordProperties.reduce((sum, prop) => sum + prop.occupiedUnits, 0);
  const occupancyRate = ((occupiedUnits / totalUnits) * 100).toFixed(1);

  const landlordStats = [
    {
      title: 'Total Properties',
      value: landlordProperties.length,
      subtitle: `${landlordProperties.length} active properties`,
      icon: <BusinessIcon />,
      color: '#4caf50'
    },
    {
      title: 'Total Units',
      value: totalUnits,
      subtitle: `${occupiedUnits} occupied`,
      icon: <ApartmentIcon />,
      color: '#2196f3'
    },
    {
      title: 'Monthly Revenue',
      value: landlord.totalRevenue,
      subtitle: 'Current month',
      icon: <TrendingUpIcon />,
      color: '#ff9800'
    },
    {
      title: 'Maintenance',
      value: '₦250,000',
      subtitle: 'Monthly average',
      icon: <EngineeringIcon />,
      color: '#f44336'
    }
  ];

  const performanceStats = [
    {
      title: 'Occupancy Rate',
      value: `${occupancyRate}%`,
      change: '+5%',
      trend: 'up',
      icon: <TrendingUpIcon />,
      color: '#4caf50'
    },
    {
      title: 'Net Income',
      value: '₦2,750,000',
      change: '+8%',
      trend: 'up',
      icon: <AccountBalanceIcon />,
      color: '#2196f3'
    }
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/landlords')}
        >
          Back to Landlords
        </Button>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          onClick={() => navigate(`/landlords/edit/${id}`)}
        >
          Edit Profile
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        {landlordStats.map((stat) => (
          <Grid item xs={12} sm={6} md={3} key={stat.title}>
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
                      bgcolor: `${stat.color}20`,
                      color: stat.color,
                      mr: 2
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography variant="subtitle2" color="textSecondary">
                    {stat.title}
                  </Typography>
                </Box>
                <Typography variant="h4">{stat.value}</Typography>
                <Typography variant="caption" color="textSecondary">
                  {stat.subtitle}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        {performanceStats.map((stat) => (
          <Grid item xs={12} sm={6} key={stat.title}>
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
                      bgcolor: `${stat.color}20`,
                      color: stat.color,
                      mr: 2
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography variant="subtitle2" color="textSecondary">
                    {stat.title}
                  </Typography>
                </Box>
                <Typography variant="h4">{stat.value}</Typography>
                <Typography
                  variant="body2"
                  color={stat.trend === 'up' ? 'success.main' : 'error.main'}
                  sx={{ display: 'flex', alignItems: 'center', mt: 1 }}
                >
                  {stat.change}
                  <Typography variant="caption" color="textSecondary" sx={{ ml: 1 }}>
                    vs last month
                  </Typography>
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {landlord.name}
              </Typography>
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon sx={{ mr: 1 }} color="action" />
                <Typography>{landlord.email}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon sx={{ mr: 1 }} color="action" />
                <Typography>{landlord.phone}</Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Payment Details
              </Typography>
              <Typography variant="body2">
                Method: {landlord.paymentMethod}
              </Typography>
              <Typography variant="body2">
                Account: {landlord.bankAccount}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Properties
              </Typography>
              <List>
                {landlordProperties.map((property) => (
                  <ListItem
                    key={property.id}
                    divider
                    secondaryAction={
                      <Chip
                        label={`${property.occupiedUnits}/${property.units} Units`}
                        size="small"
                        color="primary"
                      />
                    }
                  >
                    <ListItemText
                      primary={property.name}
                      secondary={
                        <>
                          <Typography variant="body2" color="textSecondary">
                            {property.address}
                          </Typography>
                          <Typography variant="body2" color="primary">
                            Revenue: {property.totalRevenue}
                          </Typography>
                        </>
                      }
                    />
                  </ListItem>
                ))}
              </List>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default LandlordProfile; 