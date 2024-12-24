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
  ArrowBack as ArrowBackIcon
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