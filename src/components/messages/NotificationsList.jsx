import {
  Box,
  Card,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Typography,
  IconButton,
  Divider,
  Chip,
  Button
} from '@mui/material';
import {
  Notifications as NotificationIcon,
  Home as HomeIcon,
  Person as PersonIcon,
  AttachMoney as MoneyIcon,
  Build as BuildIcon,
  Delete as DeleteIcon,
  Check as CheckIcon
} from '@mui/icons-material';
import { formatDistanceToNow } from 'date-fns';

function NotificationsList() {
  // Mock data - replace with actual API data
  const notifications = [
    {
      id: 1,
      type: 'maintenance',
      title: 'Maintenance Request Update',
      message: 'Maintenance request #123 has been completed',
      timestamp: new Date(2024, 2, 20, 14, 30),
      read: false,
      actionRequired: true
    },
    {
      id: 2,
      type: 'payment',
      title: 'Payment Received',
      message: 'Rent payment of ₦150,000 received from John Doe',
      timestamp: new Date(2024, 2, 20, 10, 15),
      read: true,
      actionRequired: false
    },
    {
      id: 3,
      type: 'tenant',
      title: 'New Tenant Application',
      message: 'New application received for Green Valley Estate, Unit 105',
      timestamp: new Date(2024, 2, 19, 16, 45),
      read: false,
      actionRequired: true
    },
    {
      id: 4,
      type: 'property',
      title: 'Property Inspection',
      message: 'Scheduled inspection for Sunshine Apartments on March 25th',
      timestamp: new Date(2024, 2, 19, 9, 20),
      read: true,
      actionRequired: false
    }
  ];

  const getNotificationIcon = (type) => {
    switch (type) {
      case 'maintenance':
        return <BuildIcon />;
      case 'payment':
        return <MoneyIcon />;
      case 'tenant':
        return <PersonIcon />;
      case 'property':
        return <HomeIcon />;
      default:
        return <NotificationIcon />;
    }
  };

  const getNotificationColor = (type) => {
    switch (type) {
      case 'maintenance':
        return '#ff9800';
      case 'payment':
        return '#4caf50';
      case 'tenant':
        return '#2196f3';
      case 'property':
        return '#9c27b0';
      default:
        return '#757575';
    }
  };

  const handleMarkAsRead = (id) => {
    console.log('Mark as read:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete notification:', id);
  };

  const handleAction = (id) => {
    console.log('Handle action for:', id);
  };

  return (
    <Card>
      <Box sx={{ p: 2, display: 'flex', justifyContent: 'flex-end' }}>
        <Button
          variant="text"
          startIcon={<CheckIcon />}
          onClick={() => console.log('Mark all as read')}
        >
          Mark all as read
        </Button>
      </Box>
      <List sx={{ width: '100%' }}>
        {notifications.map((notification, index) => (
          <Box key={notification.id}>
            <ListItem
              alignItems="flex-start"
              sx={{
                bgcolor: notification.read ? 'transparent' : 'action.hover',
                transition: 'background-color 0.2s'
              }}
              secondaryAction={
                <Box sx={{ display: 'flex', gap: 1 }}>
                  {!notification.read && (
                    <IconButton
                      edge="end"
                      onClick={() => handleMarkAsRead(notification.id)}
                      size="small"
                    >
                      <CheckIcon />
                    </IconButton>
                  )}
                  <IconButton
                    edge="end"
                    onClick={() => handleDelete(notification.id)}
                    size="small"
                  >
                    <DeleteIcon />
                  </IconButton>
                </Box>
              }
            >
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: getNotificationColor(notification.type) }}>
                  {getNotificationIcon(notification.type)}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <Typography variant="subtitle1">{notification.title}</Typography>
                    {notification.actionRequired && (
                      <Chip
                        label="Action Required"
                        size="small"
                        color="warning"
                      />
                    )}
                  </Box>
                }
                secondary={
                  <Box>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      sx={{ display: 'block', mb: 1 }}
                    >
                      {notification.message}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="caption" color="text.secondary">
                        {formatDistanceToNow(notification.timestamp, { addSuffix: true })}
                      </Typography>
                      {notification.actionRequired && (
                        <Button
                          size="small"
                          variant="outlined"
                          onClick={() => handleAction(notification.id)}
                        >
                          Take Action
                        </Button>
                      )}
                    </Box>
                  </Box>
                }
              />
            </ListItem>
            {index < notifications.length - 1 && <Divider variant="inset" component="li" />}
          </Box>
        ))}
      </List>
    </Card>
  );
}

export default NotificationsList; 