import { Grid, Button, Box, Typography, IconButton } from '@mui/material';
import { Controller } from 'react-hook-form';
import { CloudUpload as UploadIcon, Delete as DeleteIcon } from '@mui/icons-material';
import PropTypes from 'prop-types';
import { useState } from 'react';

function DocumentUpload({ control }) {
  const [previewUrls, setPreviewUrls] = useState({
    profilePicture: null,
    idCard: null,
    additionalDocs: []
  });

  const handleFileChange = (onChange, field, multiple = false) => (event) => {
    const files = event.target.files;
    if (!files) return;

    if (multiple) {
      // Handle multiple files
      const newFiles = Array.from(files);
      const newUrls = newFiles.map(file => URL.createObjectURL(file));
      
      setPreviewUrls(prev => ({
        ...prev,
        [field]: [...(prev[field] || []), ...newUrls]
      }));
      onChange(newFiles);
    } else {
      // Handle single file
      const file = files[0];
      const url = URL.createObjectURL(file);
      setPreviewUrls(prev => ({
        ...prev,
        [field]: url
      }));
      onChange(file);
    }
  };

  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <Typography variant="h6" gutterBottom>Required Documents</Typography>
      </Grid>

      <Grid item xs={12} md={6}>
        <Controller
          name="profilePicture"
          control={control}
          rules={{ required: 'Profile picture is required' }}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <Box>
              <Button
                component="label"
                variant="outlined"
                startIcon={<UploadIcon />}
                fullWidth
              >
                Upload Profile Picture
                <input
                  type="file"
                  hidden
                  accept="image/*"
                  onChange={handleFileChange(onChange, 'profilePicture')}
                />
              </Button>
              {error && (
                <Typography color="error" variant="caption">
                  {error.message}
                </Typography>
              )}
              {previewUrls.profilePicture && (
                <Box mt={2}>
                  <img
                    src={previewUrls.profilePicture}
                    alt="Profile Preview"
                    style={{ width: '100px', height: '100px', objectFit: 'cover' }}
                  />
                </Box>
              )}
            </Box>
          )}
        />
      </Grid>

      <Grid item xs={12} md={6}>
        <Controller
          name="idCard"
          control={control}
          rules={{ required: 'ID Card is required' }}
          render={({ field: { onChange }, fieldState: { error } }) => (
            <Box>
              <Button
                component="label"
                variant="outlined"
                startIcon={<UploadIcon />}
                fullWidth
              >
                Upload ID Card
                <input
                  type="file"
                  hidden
                  accept="image/*,.pdf"
                  onChange={handleFileChange(onChange, 'idCard')}
                />
              </Button>
              {error && (
                <Typography color="error" variant="caption">
                  {error.message}
                </Typography>
              )}
              {previewUrls.idCard && (
                <Box mt={2}>
                  <Typography variant="caption">
                    ID Card uploaded successfully
                  </Typography>
                </Box>
              )}
            </Box>
          )}
        />
      </Grid>

      <Grid item xs={12}>
        <Controller
          name="additionalDocuments"
          control={control}
          render={({ field: { onChange } }) => (
            <Box>
              <Button
                component="label"
                variant="outlined"
                startIcon={<UploadIcon />}
                fullWidth
              >
                Upload Additional Documents
                <input
                  type="file"
                  hidden
                  multiple
                  accept=".pdf,.doc,.docx"
                  onChange={handleFileChange(onChange, 'additionalDocs', true)}
                />
              </Button>
              {previewUrls.additionalDocs?.length > 0 && (
                <Box mt={2}>
                  <Typography variant="subtitle2" gutterBottom>
                    Uploaded Documents:
                  </Typography>
                  {previewUrls.additionalDocs.map((_, index) => (
                    <Box key={index} display="flex" alignItems="center" mt={1}>
                      <Typography variant="caption">
                        Document {index + 1}
                      </Typography>
                      <IconButton
                        size="small"
                        onClick={() => {
                          const newDocs = [...previewUrls.additionalDocs];
                          newDocs.splice(index, 1);
                          setPreviewUrls(prev => ({
                            ...prev,
                            additionalDocs: newDocs
                          }));
                        }}
                      >
                        <DeleteIcon />
                      </IconButton>
                    </Box>
                  ))}
                </Box>
              )}
            </Box>
          )}
        />
      </Grid>
    </Grid>
  );
}

DocumentUpload.propTypes = {
  control: PropTypes.object.isRequired
};

export default DocumentUpload; 