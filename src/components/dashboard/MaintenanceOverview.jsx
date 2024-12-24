import { Box, List, ListItem, ListItemText, ListItemIcon, Typography, LinearProgress } from '@mui/material';
import {
  Build as BuildIcon,
  Schedule as ScheduleIcon,
  CheckCircle as CheckCircleIcon,
  Error as ErrorIcon
} from '@mui/icons-material';

function MaintenanceOverview() {
  // Mock data - replace with actual API data
  const requests = [
    {
      id: 1,
      type: 'Urgent',
      description: 'Water Leak in Unit 203',
      status: 'Pending',
      icon: <ErrorIcon color="error" />,
      progress: 0
    },
    {
      id: 2,
      type: 'Regular',
      description: 'AC Maintenance in Unit 105',
      status: 'In Progress',
      icon: <BuildIcon color="primary" />,
      progress: 60
    },
    {
      id: 3,
      type: 'Scheduled',
      description: 'Monthly Pest Control',
      status: 'Scheduled',
      icon: <ScheduleIcon color="info" />,
      progress: 0
    },
    {
      id: 4,
      type: 'Completed',
      description: 'Light Fixture Replacement',
      status: 'Completed',
      icon: <CheckCircleIcon color="success" />,
      progress: 100
    }
  ];

  return (
    <List>
      {requests.map((request) => (
        <ListItem key={request.id}>
          <ListItemIcon>
            {request.icon}
          </ListItemIcon>
          <ListItemText
            primary={request.description}
            secondary={
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, mt: 1 }}>
                <Typography variant="caption" color="text.secondary">
                  Status: {request.status}
                </Typography>
                {request.progress > 0 && (
                  <LinearProgress
                    variant="determinate"
                    value={request.progress}
                    sx={{ height: 6, borderRadius: 1 }}
                  />
                )}
              </Box>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}

export default MaintenanceOverview; 