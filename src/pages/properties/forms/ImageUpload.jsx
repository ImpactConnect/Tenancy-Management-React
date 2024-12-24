import { useState } from 'react';
import { 
  Box, 
  Button, 
  Grid,
  IconButton,
  Typography,
  ImageList,
  ImageListItem,
  ImageListItemBar
} from '@mui/material';
import { 
  CloudUpload as UploadIcon,
  Delete as DeleteIcon 
} from '@mui/icons-material';
import { Controller } from 'react-hook-form';

function ImageUpload({ control, errors }) {
  const [previewImages, setPreviewImages] = useState([]);

  const handleImageChange = (e, onChange) => {
    const files = Array.from(e.target.files);
    const newPreviewImages = files.map(file => ({
      file,
      preview: URL.createObjectURL(file)
    }));
    
    setPreviewImages([...previewImages, ...newPreviewImages]);
    onChange(files);
  };

  const handleRemoveImage = (index) => {
    setPreviewImages(prev => prev.filter((_, i) => i !== index));
  };

  return (
    <Box>
      <Controller
        name="images"
        control={control}
        render={({ field: { onChange, value } }) => (
          <>
            <Button
              component="label"
              variant="outlined"
              startIcon={<UploadIcon />}
              sx={{ mb: 2 }}
            >
              Upload Images
              <input
                type="file"
                hidden
                multiple
                accept="image/*"
                onChange={(e) => handleImageChange(e, onChange)}
              />
            </Button>

            {previewImages.length > 0 && (
              <ImageList sx={{ width: '100%', height: 450 }} cols={3} rowHeight={164}>
                {previewImages.map((image, index) => (
                  <ImageListItem key={index}>
                    <img
                      src={image.preview}
                      alt={`Property ${index + 1}`}
                      loading="lazy"
                      style={{ height: '100%', objectFit: 'cover' }}
                    />
                    <ImageListItemBar
                      actionIcon={
                        <IconButton
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          onClick={() => handleRemoveImage(index)}
                        >
                          <DeleteIcon />
                        </IconButton>
                      }
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            )}
          </>
        )}
      />
    </Box>
  );
}

export default ImageUpload; 