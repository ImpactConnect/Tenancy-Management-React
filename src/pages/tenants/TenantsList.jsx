import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
  Typography,
  Chip,
  IconButton,
  TextField,
  InputAdornment,
  Link
} from '@mui/material';
import {
  Add as AddIcon,
  Edit as EditIcon,
  Delete as DeleteIcon,
  Search as SearchIcon,
  Visibility as ViewIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { mockTenants } from '../../data/mockData';

function TenantsList() {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState('');

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const filteredTenants = mockTenants.filter(tenant =>
    Object.values(tenant).some(value =>
      value.toString().toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const handleViewProfile = (id) => {
    navigate(`/tenants/profile/${id}`);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4">Tenants</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/tenants/add')}
        >
          Add Tenant
        </Button>
      </Box>

      <Card>
        <Box sx={{ p: 2 }}>
          <TextField
            fullWidth
            size="small"
            placeholder="Search tenants..."
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
                <TableCell>Name</TableCell>
                <TableCell>Property</TableCell>
                <TableCell>Unit</TableCell>
                <TableCell>Rent Amount</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Last Payment</TableCell>
                <TableCell align="right">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredTenants
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((tenant) => (
                  <TableRow 
                    key={tenant.id}
                    hover
                    sx={{ cursor: 'pointer' }}
                    onClick={() => handleViewProfile(tenant.id)}
                  >
                    <TableCell>
                      <Link
                        component="button"
                        variant="body2"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleViewProfile(tenant.id);
                        }}
                        sx={{ textDecoration: 'none' }}
                      >
                        {tenant.name}
                      </Link>
                    </TableCell>
                    <TableCell>{tenant.property}</TableCell>
                    <TableCell>{tenant.unit}</TableCell>
                    <TableCell>{tenant.rentAmount}</TableCell>
                    <TableCell>
                      <Chip
                        label={tenant.status}
                        color={tenant.status === 'Active' ? 'success' : 'default'}
                        size="small"
                      />
                    </TableCell>
                    <TableCell>{new Date(tenant.lastPayment).toLocaleDateString()}</TableCell>
                    <TableCell align="right" onClick={(e) => e.stopPropagation()}>
                      <IconButton
                        size="small"
                        onClick={() => handleViewProfile(tenant.id)}
                      >
                        <ViewIcon />
                      </IconButton>
                      <IconButton
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(`/tenants/edit/${tenant.id}`);
                        }}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton 
                        size="small" 
                        color="error"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          component="div"
          count={filteredTenants.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Card>
    </Box>
  );
}

export default TenantsList; 