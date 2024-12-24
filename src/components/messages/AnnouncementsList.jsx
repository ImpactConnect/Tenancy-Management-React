import {
  Box,
  Card,
  List,
  ListItem,
  ListItemText,
  Typography,
  Chip,
  IconButton,
  Divider
} from '@mui/material';
import {
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';
import { formatDistanceToNow } from 'date-fns';

function AnnouncementsList() {
  // Mock data - replace with actual API data
  const announcements = [
    {
      id: 1,
      title: 'Scheduled Maintenance',
      content: 'Building maintenance will be carried out on March 25th from 9 AM to 5 PM.',
      timestamp: new Date(2024, 2, 20),
      type: 'Maintenance',
      audience: 'All Tenants'
    },
    {
      id: 2,
      title: 'Rent Payment Reminder',
      content: 'This is a reminder that rent payments are due by the 5th of each month.',
      timestamp: new Date(2024, 2, 15),
      type: 'Payment',
      audience: 'All Tenants'
    }
  ];

  const handleEdit = (id) => {
    console.log('Edit announcement:', id);
  };

  const handleDelete = (id) => {
    console.log('Delete announcement:', id);
  };

  return (
    <Card>
      <List sx={{ width: '100%' }}>
        {announcements.map((announcement, index) => (
          <Box key={announcement.id}>
            <ListItem
              alignItems="flex-start"
              secondaryAction={
                <Box>
                  <IconButton edge="end" onClick={() => handleEdit(announcement.id)}>
                    <EditIcon />
                  </IconButton>
                  <IconButton edge="end" onClick={() => handleDelete(announcement.id)}>
                    <DeleteIcon />
                  </IconButton>
                </Box>
              }
            >
              <ListItemText
                primary={
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                    <Typography variant="h6">{announcement.title}</Typography>
                    <Chip
                      label={announcement.type}
                      size="small"
                      color={announcement.type === 'Maintenance' ? 'warning' : 'info'}
                    />
                  </Box>
                }
                secondary={
                  <Box>
                    <Typography variant="body1" color="text.primary" sx={{ mb: 1 }}>
                      {announcement.content}
                    </Typography>
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <Typography variant="caption" color="text.secondary">
                        {formatDistanceToNow(announcement.timestamp, { addSuffix: true })}
                      </Typography>
                      <Chip
                        label={announcement.audience}
                        size="small"
                        variant="outlined"
                      />
                    </Box>
                  </Box>
                }
              />
            </ListItem>
            {index < announcements.length - 1 && <Divider variant="inset" component="li" />}
          </Box>
        ))}
      </List>
    </Card>
  );
}

export default AnnouncementsList; 