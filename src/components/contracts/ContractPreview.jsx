import { useState, useEffect } from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText
} from '@mui/material';

function ContractPreview({ open, onClose, data, tenant }) {
  if (!open) return null;

  return (
    <Dialog
      open={open}
      onClose={onClose}
      maxWidth="md"
      fullWidth
      scroll="paper"
    >
      <DialogTitle>
        Contract Preview
      </DialogTitle>
      <DialogContent dividers>
        <Box sx={{ p: 2 }}>
          <Typography variant="h5" align="center" gutterBottom>
            TENANCY AGREEMENT
          </Typography>
          
          <Typography variant="body2" paragraph>
            This agreement is made on {new Date().toLocaleDateString()}
          </Typography>

          <Typography variant="h6" gutterBottom>
            BETWEEN
          </Typography>
          <Typography variant="body1" paragraph>
            Property Manager (Landlord's Agent)
          </Typography>
          <Typography variant="body1" paragraph>
            AND
          </Typography>
          <Typography variant="body1" paragraph>
            {tenant?.name} (Tenant)
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Typography variant="h6" gutterBottom>
            1. PROPERTY DETAILS
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText
                primary="Property Address"
                secondary={tenant?.property}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Unit"
                secondary={tenant?.unit}
              />
            </ListItem>
          </List>

          <Typography variant="h6" gutterBottom>
            2. TENANCY TERMS
          </Typography>
          <List dense>
            <ListItem>
              <ListItemText
                primary="Lease Period"
                secondary={`${data.startDate} to ${data.endDate}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Monthly Rent"
                secondary={`₦${data.rentAmount}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primary="Security Deposit"
                secondary={`₦${data.securityDeposit}`}
              />
            </ListItem>
          </List>

          <Typography variant="h6" gutterBottom>
            3. INCLUDED SERVICES
          </Typography>
          <List dense>
            {data.includeUtilities && (
              <ListItem>
                <ListItemText primary="Utilities" />
              </ListItem>
            )}
            {data.includeMaintenance && (
              <ListItem>
                <ListItemText primary="Maintenance" />
              </ListItem>
            )}
            {data.includeParking && (
              <ListItem>
                <ListItemText primary="Parking" />
              </ListItem>
            )}
          </List>

          {data.additionalTerms && (
            <>
              <Typography variant="h6" gutterBottom>
                4. ADDITIONAL TERMS AND CONDITIONS
              </Typography>
              <Typography variant="body2" paragraph>
                {data.additionalTerms}
              </Typography>
            </>
          )}
        </Box>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default ContractPreview; 