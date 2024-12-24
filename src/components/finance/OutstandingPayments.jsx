import {
  List,
  ListItem,
  Typography,
  Button,
  Box,
  Chip,
  Divider
} from '@mui/material';
import { formatDistanceToNow } from 'date-fns';

function OutstandingPayments() {
  // Mock data - replace with actual API data
  const outstandingPayments = [
    {
      id: 1,
      tenant: 'John Doe',
      property: 'Sunshine Apartments',
      unit: 'Unit 203',
      amount: '₦150,000',
      dueDate: '2024-03-25',
      daysOverdue: 0,
      status: 'Due Soon'
    },
    {
      id: 2,
      tenant: 'Jane Smith',
      property: 'Green Valley Estate',
      unit: 'Unit 105',
      amount: '₦200,000',
      dueDate: '2024-02-28',
      daysOverdue: 15,
      status: 'Overdue'
    }
  ];

  const getStatusColor = (status, daysOverdue) => {
    if (status === 'Overdue') return 'error';
    if (daysOverdue === 0) return 'warning';
    return 'default';
  };

  const handleSendReminder = (paymentId) => {
    console.log('Sending reminder for payment:', paymentId);
  };

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {outstandingPayments.map((payment, index) => (
        <Box key={payment.id}>
          <ListItem
            alignItems="flex-start"
            sx={{
              flexDirection: 'column',
              gap: 1,
              py: 2
            }}
          >
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="subtitle1">
                {payment.tenant}
              </Typography>
              <Chip
                label={payment.status}
                color={getStatusColor(payment.status, payment.daysOverdue)}
                size="small"
              />
            </Box>
            <Box sx={{ width: '100%' }}>
              <Typography variant="body2" color="text.secondary">
                {payment.property} - {payment.unit}
              </Typography>
              <Typography variant="h6" color="primary">
                {payment.amount}
              </Typography>
            </Box>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography variant="caption" color="text.secondary">
                Due {formatDistanceToNow(new Date(payment.dueDate), { addSuffix: true })}
              </Typography>
              <Button
                size="small"
                variant="outlined"
                onClick={() => handleSendReminder(payment.id)}
              >
                Send Reminder
              </Button>
            </Box>
          </ListItem>
          {index < outstandingPayments.length - 1 && <Divider />}
        </Box>
      ))}
    </List>
  );
}

export default OutstandingPayments; 