import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  Chip,
  Divider,
  Button,
  ImageList,
  ImageListItem
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  AttachMoney as MoneyIcon
} from '@mui/icons-material';

function PropertyDetails() {
  const { id } = useParams();
  const [property, setProperty] = useState(null);

  // Mock data - replace with API call
  useEffect(() => {
    // Simulating API call
    setProperty({
      id: 1,
      name: 'Sunshine Apartments',
      address: '123 Main Street, Lagos',
      propertyType: 'Apartment',
      description: 'Modern apartment complex with excellent amenities',
      units: 10,
      availableUnits: 3,
      landlord: {
        name: 'John Doe',
        phone: '+234 123 456 7890',
        email: 'john@example.com'
      },
      rentPrice: '₦1,500,000',
      status: 'Active',
      yearBuilt: 2020,
      amenities: ['Air Conditioning', 'Security Gate', 'CCTV', 'Generator'],
      utilities: ['Electricity', 'Water', 'Waste Disposal'],
      images: [
        'https://example.com/image1.jpg',
        'https://example.com/image2.jpg'
      ]
    });
  }, [id]);

  if (!property) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4">
          {property.name}
        </Typography>
        <Box>
          <Button
            variant="outlined"
            startIcon={<EditIcon />}
            sx={{ mr: 1 }}
          >
            Edit
          </Button>
          <Button
            variant="outlined"
            color="error"
            startIcon={<DeleteIcon />}
          >
            Delete
          </Button>
        </Box>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Property Information
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <Typography color="textSecondary">Address</Typography>
                  <Typography>{property.address}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography color="textSecondary">Description</Typography>
                  <Typography>{property.description}</Typography>
                </Grid>
                <Grid item xs={12}>
                  <Divider sx={{ my: 2 }} />
                  <Typography variant="h6" gutterBottom>
                    Amenities
                  </Typography>
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                    {property.amenities.map((amenity) => (
                      <Chip key={amenity} label={amenity} />
                    ))}
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Quick Stats
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <HomeIcon color="primary" />
                      <Box>
                        <Typography variant="body2" color="textSecondary">
                          Total Units
                        </Typography>
                        <Typography variant="h6">
                          {property.units}
                        </Typography>
                      </Box>
                    </Box>
                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                      <MoneyIcon color="primary" />
                      <Box>
                        <Typography variant="body2" color="textSecondary">
                          Rent Price
                        </Typography>
                        <Typography variant="h6">
                          {property.rentPrice}
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Landlord Information
                  </Typography>
                  <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                    <Typography variant="body2">
                      {property.landlord.name}
                    </Typography>
                    <Typography variant="body2">
                      {property.landlord.phone}
                    </Typography>
                    <Typography variant="body2">
                      {property.landlord.email}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default PropertyDetails; 