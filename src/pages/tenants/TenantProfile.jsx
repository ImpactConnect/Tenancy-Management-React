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
  Home as HomeIcon,
  Edit as EditIcon,
  ArrowBack as ArrowBackIcon,
  AttachMoney as MoneyIcon,
  Payment as PaymentIcon,
  CalendarMonth as CalendarIcon,
  Receipt as ReceiptIcon,
  Warning as WarningIcon
} from '@mui/icons-material';
import { mockTenants } from '../../data/mockData';

function TenantProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const tenant = mockTenants.find(t => t.id === parseInt(id));

  if (!tenant) {
    return <Typography>Tenant not found</Typography>;
  }

  const tenantStats = [
    {
      title: 'Total Payments',
      value: '₦1,800,000',
      subtitle: 'Last 12 months',
      icon: <PaymentIcon />,
      color: '#4caf50'
    },
    {
      title: 'Lease Duration',
      value: '8 months',
      subtitle: 'Remaining',
      icon: <CalendarIcon />,
      color: '#2196f3'
    },
    {
      title: 'Payment History',
      value: '100%',
      subtitle: 'On-time payments',
      icon: <ReceiptIcon />,
      color: '#ff9800'
    },
    {
      title: 'Outstanding',
      value: '₦0',
      subtitle: 'No pending payments',
      icon: <WarningIcon />,
      color: '#f44336'
    }
  ];

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/tenants')}
        >
          Back to Tenants
        </Button>
        <Button
          variant="contained"
          startIcon={<EditIcon />}
          onClick={() => navigate(`/tenants/edit/${id}`)}
        >
          Edit Profile
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ mb: 3 }}>
        {tenantStats.map((stat) => (
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

      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                {tenant.name}
              </Typography>
              <Chip
                label={tenant.status}
                color={tenant.status === 'Active' ? 'success' : 'default'}
                sx={{ mb: 2 }}
              />
              <Divider sx={{ my: 2 }} />
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <EmailIcon sx={{ mr: 1 }} color="action" />
                <Typography>{tenant.email}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <PhoneIcon sx={{ mr: 1 }} color="action" />
                <Typography>{tenant.phone}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <HomeIcon sx={{ mr: 1 }} color="action" />
                <Typography>{tenant.property} - {tenant.unit}</Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <MoneyIcon sx={{ mr: 1 }} color="action" />
                <Typography>{tenant.rentAmount} / month</Typography>
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
                    Lease Information
                  </Typography>
                  <List>
                    <ListItem divider>
                      <ListItemText
                        primary="Lease Period"
                        secondary={`${new Date(tenant.leaseStart).toLocaleDateString()} - ${new Date(tenant.leaseEnd).toLocaleDateString()}`}
                      />
                    </ListItem>
                    <ListItem divider>
                      <ListItemText
                        primary="Last Payment"
                        secondary={new Date(tenant.lastPayment).toLocaleDateString()}
                      />
                    </ListItem>
                    <ListItem>
                      <ListItemText
                        primary="Payment Status"
                        secondary={
                          <Chip
                            label="Up to date"
                            size="small"
                            color="success"
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
                    Recent Activity
                  </Typography>
                  <List>
                    <ListItem divider>
                      <ListItemText
                        primary="Rent Payment"
                        secondary={`Payment received: ${tenant.rentAmount}`}
                      />
                      <Typography variant="caption" color="textSecondary">
                        {new Date(tenant.lastPayment).toLocaleDateString()}
                      </Typography>
                    </ListItem>
                    {/* Add more activity items as needed */}
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

export default TenantProfile; 