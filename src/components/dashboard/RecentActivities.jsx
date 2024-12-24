import { List, ListItem, ListItemText, ListItemIcon, Typography, Box } from '@mui/material';
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Payment as PaymentIcon,
  Build as BuildIcon
} from '@mui/icons-material';

function RecentActivities() {
  // Mock data - replace with actual API data
  const activities = [
    {
      id: 1,
      type: 'New Tenant',
      description: 'John Doe moved into Unit 203',
      timestamp: '2 hours ago',
      icon: <PersonIcon color="primary" />
    },
    {
      id: 2,
      type: 'Payment',
      description: 'Rent payment received for Unit 105',
      timestamp: '5 hours ago',
      icon: <PaymentIcon color="success" />
    },
    {
      id: 3,
      type: 'Maintenance',
      description: 'Completed AC repair in Unit 302',
      timestamp: 'Yesterday',
      icon: <BuildIcon color="info" />
    },
    {
      id: 4,
      type: 'Property',
      description: 'New property listed: Sunshine Apartments',
      timestamp: '2 days ago',
      icon: <HomeIcon color="secondary" />
    }
  ];

  return (
    <List>
      {activities.map((activity) => (
        <ListItem key={activity.id}>
          <ListItemIcon>
            {activity.icon}
          </ListItemIcon>
          <ListItemText
            primary={activity.description}
            secondary={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                <Typography variant="caption" color="text.secondary">
                  {activity.timestamp}
                </Typography>
              </Box>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}

export default RecentActivities; 