import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Chip,
  Button,
  TextField,
  InputAdornment,
  IconButton,
  Tooltip
} from '@mui/material';
import {
  Search as SearchIcon,
  Send as SendIcon,
  Edit as EditIcon,
  Delete as DeleteIcon
} from '@mui/icons-material';
import { useState } from 'react';

function PaymentReminders() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with actual API data
  const reminders = [
    {
      id: 1,
      tenant: 'John Doe',
      property: 'Sunshine Apartments',
      unit: 'Unit 203',
      amount: '₦150,000',
      dueDate: '2024-03-25',
      reminderDate: '2024-03-20',
      status: 'Scheduled',
      type: 'First Notice'
    },
    {
      id: 2,
      tenant: 'Jane Smith',
      property: 'Green Valley Estate',
      unit: 'Unit 105',
      amount: '₦200,000',
      dueDate: '2024-03-28',
      reminderDate: '2024-03-21',
      status: 'Sent',
      type: 'Final Notice'
    }
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSendNow = (reminderId) => {
    console.log('Sending reminder now:', reminderId);
  };

  const handleEdit = (reminderId) => {
    console.log('Editing reminder:', reminderId);
  };

  const handleDelete = (reminderId) => {
    console.log('Deleting reminder:', reminderId);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'sent':
        return 'success';
      case 'scheduled':
        return 'info';
      case 'failed':
        return 'error';
      default:
        return 'default';
    }
  };

  const filteredReminders = reminders.filter(reminder =>
    Object.values(reminder).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <Card>
      <Box sx={{ p: 2 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Search reminders..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon color="action" />
              </InputAdornment>
            )
          }}
        />
      </Box>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Tenant</TableCell>
              <TableCell>Property</TableCell>
              <TableCell>Unit</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell>Due Date</TableCell>
              <TableCell>Reminder Date</TableCell>
              <TableCell>Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredReminders
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((reminder) => (
                <TableRow key={reminder.id}>
                  <TableCell>{reminder.tenant}</TableCell>
                  <TableCell>{reminder.property}</TableCell>
                  <TableCell>{reminder.unit}</TableCell>
                  <TableCell>{reminder.amount}</TableCell>
                  <TableCell>{new Date(reminder.dueDate).toLocaleDateString()}</TableCell>
                  <TableCell>{new Date(reminder.reminderDate).toLocaleDateString()}</TableCell>
                  <TableCell>{reminder.type}</TableCell>
                  <TableCell>
                    <Chip
                      label={reminder.status}
                      color={getStatusColor(reminder.status)}
                      size="small"
                    />
                  </TableCell>
                  <TableCell align="right">
                    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1 }}>
                      {reminder.status === 'Scheduled' && (
                        <Tooltip title="Send Now">
                          <IconButton
                            size="small"
                            onClick={() => handleSendNow(reminder.id)}
                          >
                            <SendIcon fontSize="small" />
                          </IconButton>
                        </Tooltip>
                      )}
                      <Tooltip title="Edit">
                        <IconButton
                          size="small"
                          onClick={() => handleEdit(reminder.id)}
                        >
                          <EditIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Delete">
                        <IconButton
                          size="small"
                          onClick={() => handleDelete(reminder.id)}
                          color="error"
                        >
                          <DeleteIcon fontSize="small" />
                        </IconButton>
                      </Tooltip>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredReminders.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  );
}

export default PaymentReminders; 