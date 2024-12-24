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
  Assessment as AssessmentIcon
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