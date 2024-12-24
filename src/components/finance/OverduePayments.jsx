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
  IconButton,
  Button,
  TextField,
  InputAdornment
} from '@mui/material';
import {
  Search as SearchIcon,
  Send as SendIcon
} from '@mui/icons-material';
import { useState } from 'react';

function OverduePayments() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data - replace with actual API data
  const overduePayments = [
    {
      id: 1,
      tenant: 'John Doe',
      property: 'Sunshine Apartments',
      unit: 'Unit 203',
      amount: '₦150,000',
      dueDate: '2024-02-15',
      daysOverdue: 30,
      lastReminder: '2024-03-10'
    },
    {
      id: 2,
      tenant: 'Jane Smith',
      property: 'Green Valley Estate',
      unit: 'Unit 105',
      amount: '₦200,000',
      dueDate: '2024-02-28',
      daysOverdue: 15,
      lastReminder: '2024-03-12'
    }
  ];

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleSendReminder = (paymentId) => {
    console.log('Sending reminder for payment:', paymentId);
  };

  const filteredPayments = overduePayments.filter(payment =>
    Object.values(payment).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <Card>
      <Box sx={{ p: 2 }}>
        <TextField
          fullWidth
          size="small"
          placeholder="Search overdue payments..."
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
              <TableCell>Days Overdue</TableCell>
              <TableCell>Last Reminder</TableCell>
              <TableCell align="right">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredPayments
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((payment) => (
                <TableRow key={payment.id}>
                  <TableCell>{payment.tenant}</TableCell>
                  <TableCell>{payment.property}</TableCell>
                  <TableCell>{payment.unit}</TableCell>
                  <TableCell>{payment.amount}</TableCell>
                  <TableCell>{new Date(payment.dueDate).toLocaleDateString()}</TableCell>
                  <TableCell>
                    <Chip
                      label={`${payment.daysOverdue} days`}
                      color="error"
                      size="small"
                    />
                  </TableCell>
                  <TableCell>{new Date(payment.lastReminder).toLocaleDateString()}</TableCell>
                  <TableCell align="right">
                    <Button
                      startIcon={<SendIcon />}
                      size="small"
                      onClick={() => handleSendReminder(payment.id)}
                    >
                      Send Reminder
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        component="div"
        count={filteredPayments.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Card>
  );
}

export default OverduePayments; 