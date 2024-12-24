import { List, ListItem, ListItemText, ListItemIcon, Typography, Box, Chip } from '@mui/material';
import { Warning as WarningIcon } from '@mui/icons-material';

function DuePayments() {
  // Mock data - replace with actual API data
  const payments = [
    {
      id: 1,
      tenant: 'John Doe',
      unit: 'Unit 203',
      amount: '₦150,000',
      dueDate: '2024-03-15',
      status: 'Overdue'
    },
    {
      id: 2,
      tenant: 'Jane Smith',
      unit: 'Unit 105',
      amount: '₦200,000',
      dueDate: '2024-03-20',
      status: 'Due Soon'
    },
    {
      id: 3,
      tenant: 'Mike Johnson',
      unit: 'Unit 302',
      amount: '₦180,000',
      dueDate: '2024-03-25',
      status: 'Due Soon'
    }
  ];

  return (
    <List>
      {payments.map((payment) => (
        <ListItem key={payment.id}>
          <ListItemIcon>
            <WarningIcon color={payment.status === 'Overdue' ? 'error' : 'warning'} />
          </ListItemIcon>
          <ListItemText
            primary={
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Typography variant="subtitle2">
                  {payment.tenant} - {payment.unit}
                </Typography>
                <Chip
                  label={payment.status}
                  size="small"
                  color={payment.status === 'Overdue' ? 'error' : 'warning'}
                />
              </Box>
            }
            secondary={
              <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 1 }}>
                <Typography variant="body2" color="text.secondary">
                  Due: {new Date(payment.dueDate).toLocaleDateString()}
                </Typography>
                <Typography variant="body2" color="text.primary">
                  {payment.amount}
                </Typography>
              </Box>
            }
          />
        </ListItem>
      ))}
    </List>
  );
}

export default DuePayments; 