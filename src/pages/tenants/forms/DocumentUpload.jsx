import { useState } from 'react';
import {
  Grid,
  Button,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Paper
} from '@mui/material';
import {
  CloudUpload as UploadIcon,
  Delete as DeleteIcon,
  InsertDriveFile as FileIcon
} from '@mui/icons-material';
import { Controller } from 'react-hook-form';
import { toast } from 'react-hot-toast';

function DocumentUpload({ control, errors }) {
  const [uploadedFiles, setUploadedFiles] = useState([]);

  const handleFileUpload = (event, onChange) => {
    const files = Array.from(event.target.files);
    const newFiles = files.map(file => ({
      id: Math.random().toString(36).substr(2, 9),
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2), // Convert to MB
      file
    }));

    setUploadedFiles(prev => [...prev, ...newFiles]);
    onChange(newFiles); // Update form value
  };

  const handleDelete = (fileId, onChange) => {
    setUploadedFiles(prev => prev.filter(file => file.id !== fileId));
    onChange(uploadedFiles.filter(file => file.id !== fileId));
  };

  const renderFileSize = (size) => {
    return `${size} MB`;
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Controller
          name="documents"
          control={control}
          defaultValue={[]}
          render={({ field: { onChange, value } }) => (
            <Box>
              <input
                type="file"
                multiple
                accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                style={{ display: 'none' }}
                id="document-upload"
                onChange={(e) => handleFileUpload(e, onChange)}
              />
              <label htmlFor="document-upload">
                <Button
                  variant="outlined"
                  component="span"
                  startIcon={<UploadIcon />}
                  fullWidth
                  sx={{ height: 100, border: '2px dashed' }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    <Typography variant="body1" gutterBottom>
                      Drop files here or click to upload
                    </Typography>
                    <Typography variant="caption" color="textSecondary">
                      Supported formats: PDF, DOC, DOCX, JPG, PNG
                    </Typography>
                  </Box>
                </Button>
              </label>
              {errors.documents && (
                <Typography color="error" variant="caption">
                  {errors.documents.message}
                </Typography>
              )}
            </Box>
          )}
        />
      </Grid>

      <Grid item xs={12}>
        {uploadedFiles.length > 0 && (
          <Paper variant="outlined">
            <List>
              {uploadedFiles.map((file) => (
                <ListItem key={file.id}>
                  <FileIcon sx={{ mr: 2 }} />
                  <ListItemText
                    primary={file.name}
                    secondary={renderFileSize(file.size)}
                  />
                  <ListItemSecondaryAction>
                    <IconButton
                      edge="end"
                      color="error"
                      onClick={() => handleDelete(file.id, control.setValue)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </ListItemSecondaryAction>
                </ListItem>
              ))}
            </List>
          </Paper>
        )}
      </Grid>

      <Grid item xs={12}>
        <Typography variant="subtitle2" color="textSecondary">
          Required Documents:
        </Typography>
        <List dense>
          <ListItem>
            <ListItemText primary="• Valid ID (National ID, Driver's License, or Passport)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Proof of Income (Pay Slip or Bank Statement)" />
          </ListItem>
          <ListItem>
            <ListItemText primary="• Proof of Employment" />
          </ListItem>
        </List>
      </Grid>
    </Grid>
  );
}

export default DocumentUpload; 