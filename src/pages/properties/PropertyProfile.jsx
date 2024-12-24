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
  ListItemText,
  LinearProgress
} from '@mui/material';
import {
  LocationOn as LocationIcon,
  Person as PersonIcon,
  Edit as EditIcon,
  ArrowBack as ArrowBackIcon,
  Assessment as AssessmentIcon,
  TrendingUp as TrendingUpIcon,
  AccountBalance as AccountBalanceIcon,
  Engineering as EngineeringIcon,
  People as PeopleIcon
} from '@mui/icons-material';
import { mockProperties, mockTenants } from '../../data/mockData';

function PropertyProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const property = mockProperties.find(p => p.id === parseInt(id));
  const propertyTenants = mockTenants.filter(t => t.property === property?.name);

  if (!property) {
    return <Typography>Property not found</Typography>;
  }

  const occupancyRate = (property.occupiedUnits / property.units) * 100;

  const propertyStats = [
    {
      title: 'Monthly Revenue',
      value: '₦1,250,000',
      change: '+12%',
      trend: 'up',
      icon: <TrendingUpIcon />,
      color: '#4caf50'
    },
    {
      title: 'Occupancy Rate',
      value: `${occupancyRate.toFixed(1)}%`,
      change: '+5%',
      trend: 'up',
      icon: <PeopleIcon />,
      color: '#2196f3'
    },
    {
      title: 'Maintenance Cost',
      value: '₦125,000',
      change: '-3%',
      trend: 'down',
      icon: <EngineeringIcon />,
      color: '#f44336'
    },
    {
      title: 'Net Income',
      value: '₦1,125,000',
      change: '+8%',
      trend: 'up',
      icon: <AccountBalanceIcon />,
      color: '#ff9800'
    }
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/properties')}
        >
          Back to Properties
        </Button>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <Button
            variant="outlined"
            startIcon={<AssessmentIcon />}
            onClick={() => navigate(`/properties/analytics/${id}`)}
          >
            View Analytics
          </Button>
          <Button
            variant="contained"
            startIcon={<EditIcon />}
            onClick={() => navigate(`/properties/edit/${id}`)}
          >
            Edit Property
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        {propertyStats.map((stat) => (
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
                {property.name}
              </Typography>
              <Chip
                label={property.status}
                color={property.status === 'Active' ? 'success' : 'default'}
                sx={{ mb: 2 }}
              />
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <LocationIcon sx={{ mr: 1 }} color="action" />
                <Typography>{property.address}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PersonIcon sx={{ mr: 1 }} color="action" />
                <Typography>{property.landlord}</Typography>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Typography variant="subtitle2" color="textSecondary" gutterBottom>
                Property Details
              </Typography>
              <Typography variant="body2">
                Type: {property.type}
              </Typography>
              <Typography variant="body2">
                Total Units: {property.units}
              </Typography>
              <Typography variant="body2" gutterBottom>
                Occupied Units: {property.occupiedUnits}
              </Typography>
              <Box sx={{ mt: 2 }}>
                <Typography variant="body2" color="textSecondary" gutterBottom>
                  Occupancy Rate
                </Typography>
                <LinearProgress
                  variant="determinate"
                  value={occupancyRate}
                  sx={{ height: 8, borderRadius: 1 }}
                />
                <Typography variant="body2" sx={{ mt: 1 }}>
                  {occupancyRate.toFixed(1)}%
                </Typography>
              </Box>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Financial Overview
                  </Typography>
                  <List>
                    <ListItem divider>
                      <ListItemText
                        primary="Total Revenue"
                        secondary={property.totalRevenue}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Maintenance Status"
                        secondary={
                          <Chip
                            label={property.maintenanceStatus}
                            size="small"
                            color={property.maintenanceStatus === 'Good' ? 'success' : 'warning'}
                          />
                        }
                      />
                    </ListItem>
                  </List>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Current Tenants
                  </Typography>
                  <List>
                    {propertyTenants.map((tenant) => (
                      <ListItem
                        key={tenant.id}
                        divider
                        button
                        onClick={() => navigate(`/tenants/profile/${tenant.id}`)}
                      >
                        <ListItemText
                          primary={tenant.name}
                          secondary={
                            <>
                              <Typography variant="body2" color="textSecondary">
                                {tenant.unit}
                              </Typography>
                              <Typography variant="body2" color="primary">
                                Rent: {tenant.rentAmount}
                              </Typography>
                            </>
                          }
                        />
                        <Chip
                          label={tenant.status}
                          size="small"
                          color={tenant.status === 'Active' ? 'success' : 'default'}
                        />
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PropertyProfile; 