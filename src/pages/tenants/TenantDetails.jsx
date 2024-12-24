import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  Avatar,
  Chip,
  List,
  ListItem,
  ListItemText,
  ListItemIcon
} from '@mui/material';
import {
  Phone as PhoneIcon,
  Email as EmailIcon,
  Home as HomeIcon,
  Assignment as ContractIcon,
  Receipt as PaymentIcon,
  Edit as EditIcon
} from '@mui/icons-material';

function TenantDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [tenant, setTenant] = useState(null);

  useEffect(() => {
    // Mock API call - replace with actual data fetching
    setTenant({
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+234 123 456 7890',
      property: 'Sunshine Apartments',
      unit: 'A1',
      rentAmount: '₦1,500,000',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      status: 'Active',
      lastPayment: '2024-02-01',
      nextPayment: '2024-03-01',
      securityDeposit: '₦1,500,000',
      emergencyContact: {
        name: 'Jane Doe',
        relationship: 'Spouse',
        phone: '+234 098 765 4321'
      },
      documents: [
        { id: 1, name: 'Lease Agreement', date: '2024-01-01' },
        { id: 2, name: 'ID Card', date: '2024-01-01' }
      ],
      recentPayments: [
        {
          id: 1,
          amount: '₦1,500,000',
          date: '2024-02-01',
          type: 'Rent Payment',
          status: 'Completed'
        }
      ]
    });
  }, [id]);

  if (!tenant) {
    return <div>Loading...</div>;
  }

  return (
    <Box>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Avatar sx={{ width: 64, height: 64 }}>
            {tenant.name.split(' ').map(n => n[0]).join('')}
          </Avatar>
          <Box>
            <Typography variant="h4">
              {tenant.name}
            </Typography>
            <Chip
              label={tenant.status}
              color={tenant.status === 'Active' ? 'success' : 'error'}
              size="small"
              sx={{ mt: 1 }}
            />
          </Box>
        </Box>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          onClick={() => navigate(`/tenants/edit/${tenant.id}`)}
        >
          Edit Tenant
        </Button>
      </Box>

      <Grid container spacing={3}>
        <Grid item xs={12} md={8}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Contact Information
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Email"
                    secondary={tenant.email}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PhoneIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Phone"
                    secondary={tenant.phone}
                  />
                </ListItem>
              </List>

              <Divider sx={{ my: 2 }} />

              <Typography variant="h6" gutterBottom>
                Lease Information
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Property & Unit"
                    secondary={`${tenant.property} - Unit ${tenant.unit}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <ContractIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary="Lease Period"
                    secondary={`${new Date(tenant.startDate).toLocaleDateString()} - ${new Date(tenant.endDate).toLocaleDateString()}`}
                  />
                </ListItem>
              </List>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Payment Information
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="textSecondary">
                      Monthly Rent
                    </Typography>
                    <Typography variant="h5">
                      {tenant.rentAmount}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="textSecondary">
                      Security Deposit
                    </Typography>
                    <Typography variant="h5">
                      {tenant.securityDeposit}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="textSecondary">
                      Next Payment Due
                    </Typography>
                    <Typography variant="h6">
                      {new Date(tenant.nextPayment).toLocaleDateString()}
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Emergency Contact
                  </Typography>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="textSecondary">
                      Name
                    </Typography>
                    <Typography variant="body1">
                      {tenant.emergencyContact.name}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="textSecondary">
                      Relationship
                    </Typography>
                    <Typography variant="body1">
                      {tenant.emergencyContact.relationship}
                    </Typography>
                  </Box>
                  <Box sx={{ mt: 2 }}>
                    <Typography variant="body2" color="textSecondary">
                      Phone
                    </Typography>
                    <Typography variant="body1">
                      {tenant.emergencyContact.phone}
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

export default TenantDetails; 