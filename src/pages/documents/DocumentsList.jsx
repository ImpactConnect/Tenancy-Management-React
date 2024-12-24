import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Grid,
  TextField,
  MenuItem,
  IconButton,
  Chip
} from '@mui/material';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {
  Add as AddIcon,
  Download as DownloadIcon,
  Delete as DeleteIcon,
  Visibility as ViewIcon
} from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

function DocumentsList() {
  const navigate = useNavigate();
  const [filterModel, setFilterModel] = useState({
    type: 'all',
    search: ''
  });

  const documents = [
    {
      id: 1,
      name: 'Lease Agreement - John Doe',
      type: 'Lease Agreement',
      date: '2024-02-01',
      size: '2.5 MB',
      status: 'Active'
    }
  ];

  const columns = [
    {
      field: 'name',
      headerName: 'Document Name',
      flex: 1
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 150
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 120
    },
    {
      field: 'size',
      headerName: 'Size',
      width: 100
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      renderCell: (params) => (
        <Chip
          label={params.value}
          size="small"
          color={params.value === 'Active' ? 'success' : 'error'}
        />
      )
    },
    {
      field: 'actions',
      headerName: 'Actions',
      width: 150,
      sortable: false,
      renderCell: (params) => (
        <Box>
          <IconButton size="small" onClick={() => handleView(params.row.id)}>
            <ViewIcon />
          </IconButton>
          <IconButton size="small" onClick={() => handleDownload(params.row.id)}>
            <DownloadIcon />
          </IconButton>
          <IconButton
            size="small"
            color="error"
            onClick={() => handleDelete(params.row.id)}
          >
            <DeleteIcon />
          </IconButton>
        </Box>
      )
    }
  ];

  const handleView = (id) => {
    toast.info('View functionality not implemented');
  };

  const handleDownload = (id) => {
    toast.info('Download functionality not implemented');
  };

  const handleDelete = (id) => {
    toast.error('Delete functionality not implemented');
  };

  return (
    <Box>
      <Box sx={{ mb: 4, display: 'flex', justifyContent: 'space-between' }}>
        <Typography variant="h4">Documents</Typography>
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => navigate('/documents/upload')}
        >
          Upload Document
        </Button>
      </Box>

      <Card sx={{ mb: 3 }}>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                placeholder="Search documents..."
                value={filterModel.search}
                onChange={(e) =>
                  setFilterModel((prev) => ({
                    ...prev,
                    search: e.target.value
                  }))
                }
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                select
                fullWidth
                label="Document Type"
                value={filterModel.type}
                onChange={(e) =>
                  setFilterModel((prev) => ({
                    ...prev,
                    type: e.target.value
                  }))
                }
              >
                <MenuItem value="all">All Types</MenuItem>
                <MenuItem value="lease">Lease Agreements</MenuItem>
                <MenuItem value="id">ID Documents</MenuItem>
                <MenuItem value="other">Other</MenuItem>
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
      </Card>

      <Card>
        <DataGrid
          rows={documents}
          columns={columns}
          autoHeight
          pageSize={10}
          rowsPerPageOptions={[10, 25, 50]}
          checkboxSelection
          disableSelectionOnClick
          components={{
            Toolbar: GridToolbar
          }}
          sx={{
            '& .MuiDataGrid-cell': {
              borderBottom: '1px solid #f0f0f0'
            }
          }}
        />
      </Card>
    </Box>
  );
}

export default DocumentsList; 