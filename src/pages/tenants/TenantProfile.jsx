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
  Avatar,
  Stack
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
  Warning as WarningIcon,
  Work as WorkIcon,
  Business as BusinessIcon,
  Description as DocumentIcon
} from '@mui/icons-material';
import { mockTenants } from '../../data/mockData';

function TenantProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // Mock expanded tenant data
  const tenant = {
    ...mockTenants.find(t => t.id === parseInt(id)),
    // Additional mock data for new fields
    workInfo: {
      employer: 'Tech Solutions Ltd',
      position: 'Senior Developer',
      workAddress: '123 Business District, Lagos',
      workEmail: 'john.doe@techsolutions.com',
      workPhone: '+234 802 123 4567'
    },
    rentDetails: {
      paymentFrequency: 'Annual',
      paymentMethod: 'Bank Transfer',
      duration: '2 Years',
      startDate: '2024-01-01'
    },
    documents: {
      profilePicture: '/path/to/profile.jpg',
      idCard: 'National ID Card',
      additionalDocs: [
        'Employment Letter',
        'Bank Statement',
        'Previous Tenancy Reference'
      ]
    }
  };

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
      value: tenant.rentDetails.duration,
      subtitle: `Started ${new Date(tenant.rentDetails.startDate).toLocaleDateString()}`,
      icon: <CalendarIcon />,
      color: '#2196f3'
    },
    {
      title: 'Payment Frequency',
      value: tenant.rentDetails.paymentFrequency,
      subtitle: tenant.rentDetails.paymentMethod,
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

      {/* Stats Cards */}
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
        {/* Personal Information */}
        <Grid item xs={12} md={4}>
          <Card>
            <CardContent>
              <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                <Avatar
                  src={tenant.documents.profilePicture}
                  sx={{ width: 64, height: 64, mr: 2 }}
                >
                  {tenant.name.charAt(0)}
                </Avatar>
                <Box>
                  <Typography variant="h5">{tenant.name}</Typography>
                  <Chip
                    label={tenant.status}
                    color={tenant.status === 'Active' ? 'success' : 'default'}
                    size="small"
                  />
                </Box>
              </Box>
              <Divider sx={{ my: 2 }} />
              <Stack spacing={2}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <EmailIcon sx={{ mr: 1 }} color="action" />
                  <Typography>{tenant.email}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <PhoneIcon sx={{ mr: 1 }} color="action" />
                  <Typography>{tenant.phone}</Typography>
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <HomeIcon sx={{ mr: 1 }} color="action" />
                  <Typography>{tenant.property} - {tenant.unit}</Typography>
                </Box>
              </Stack>
            </CardContent>
          </Card>
        </Grid>

        {/* Work Information */}
        <Grid item xs={12} md={8}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Work Information
                  </Typography>
                  <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <BusinessIcon sx={{ mr: 1 }} color="action" />
                        <Box>
                          <Typography variant="subtitle2" color="textSecondary">
                            Employer
                          </Typography>
                          <Typography>{tenant.workInfo.employer}</Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                        <WorkIcon sx={{ mr: 1 }} color="action" />
                        <Box>
                          <Typography variant="subtitle2" color="textSecondary">
                            Position
                          </Typography>
                          <Typography>{tenant.workInfo.position}</Typography>
                        </Box>
                      </Box>
                    </Grid>
                    <Grid item xs={12}>
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <HomeIcon sx={{ mr: 1 }} color="action" />
                        <Box>
                          <Typography variant="subtitle2" color="textSecondary">
                            Work Address
                          </Typography>
                          <Typography>{tenant.workInfo.workAddress}</Typography>
                        </Box>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>

            {/* Documents */}
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Documents
                  </Typography>
                  <List>
                    <ListItem divider>
                      <ListItemText
                        primary="ID Card"
                        secondary={tenant.documents.idCard}
                      />
                      <Button size="small" startIcon={<DocumentIcon />}>
                        View
                      </Button>
                    </ListItem>
                    {tenant.documents.additionalDocs.map((doc, index) => (
                      <ListItem
                        key={index}
                        divider={index !== tenant.documents.additionalDocs.length - 1}
                      >
                        <ListItemText
                          primary={doc}
                          secondary={`Uploaded document ${index + 1}`}
                        />
                        <Button size="small" startIcon={<DocumentIcon />}>
                          View
                        </Button>
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

export default TenantProfile; 