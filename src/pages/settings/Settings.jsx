import { useState } from 'react';
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  TextField,
  Switch,
  FormControlLabel,
  Button,
  Divider,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Alert,
  Tab,
  Tabs,
  InputAdornment
} from '@mui/material';
import {
  Save as SaveIcon,
  Notifications as NotificationsIcon,
  Security as SecurityIcon,
  Payment as PaymentIcon,
  Email as EmailIcon,
  Language as LanguageIcon,
  Palette as PaletteIcon
} from '@mui/icons-material';

function TabPanel({ children, value, index }) {
  return value === index && <Box sx={{ py: 3 }}>{children}</Box>;
}

function Settings() {
  const [currentTab, setCurrentTab] = useState(0);
  const [settings, setSettings] = useState({
    // General Settings
    companyName: 'Property Manager',
    currency: '₦',
    language: 'en',
    dateFormat: 'DD/MM/YYYY',
    timezone: 'Africa/Lagos',

    // Notification Settings
    emailNotifications: true,
    smsNotifications: true,
    paymentReminders: true,
    maintenanceAlerts: true,
    leaseExpiryReminders: true,
    reminderDays: 7,

    // Payment Settings
    paymentGracePeriod: 3,
    lateFeePercentage: 5,
    bankName: '',
    accountNumber: '',
    accountName: '',

    // Email Settings
    smtpHost: '',
    smtpPort: '',
    smtpUsername: '',
    smtpPassword: '',
    senderEmail: '',
    senderName: '',

    // Security Settings
    requireTwoFactor: false,
    passwordExpiry: 90,
    sessionTimeout: 30,
    allowMultipleSessions: false,

    // Appearance Settings
    theme: 'light',
    primaryColor: '#2196f3',
    sidebarColor: 'white',
    enableAnimations: true
  });

  const handleChange = (section) => (event) => {
    setSettings({
      ...settings,
      [section]: event.target.type === 'checkbox' ? event.target.checked : event.target.value
    });
  };

  const handleSave = () => {
    console.log('Saving settings:', settings);
    // TODO: Implement settings save functionality
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4">Settings</Typography>
        <Button
          variant="contained"
          startIcon={<SaveIcon />}
          onClick={handleSave}
        >
          Save Changes
        </Button>
      </Box>

      <Card>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={currentTab}
            onChange={(e, newValue) => setCurrentTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
          >
            <Tab icon={<LanguageIcon />} label="General" />
            <Tab icon={<NotificationsIcon />} label="Notifications" />
            <Tab icon={<PaymentIcon />} label="Payment" />
            <Tab icon={<EmailIcon />} label="Email" />
            <Tab icon={<SecurityIcon />} label="Security" />
            <Tab icon={<PaletteIcon />} label="Appearance" />
          </Tabs>
        </Box>

        {/* General Settings */}
        <TabPanel value={currentTab} index={0}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Company Name"
                value={settings.companyName}
                onChange={handleChange('companyName')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Currency</InputLabel>
                <Select
                  value={settings.currency}
                  onChange={handleChange('currency')}
                  label="Currency"
                >
                  <MenuItem value="₦">Nigerian Naira (₦)</MenuItem>
                  <MenuItem value="$">US Dollar ($)</MenuItem>
                  <MenuItem value="£">British Pound (£)</MenuItem>
                  <MenuItem value="€">Euro (€)</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Language</InputLabel>
                <Select
                  value={settings.language}
                  onChange={handleChange('language')}
                  label="Language"
                >
                  <MenuItem value="en">English</MenuItem>
                  <MenuItem value="fr">French</MenuItem>
                  <MenuItem value="es">Spanish</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Date Format</InputLabel>
                <Select
                  value={settings.dateFormat}
                  onChange={handleChange('dateFormat')}
                  label="Date Format"
                >
                  <MenuItem value="DD/MM/YYYY">DD/MM/YYYY</MenuItem>
                  <MenuItem value="MM/DD/YYYY">MM/DD/YYYY</MenuItem>
                  <MenuItem value="YYYY-MM-DD">YYYY-MM-DD</MenuItem>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </TabPanel>

        {/* Notification Settings */}
        <TabPanel value={currentTab} index={1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.emailNotifications}
                    onChange={handleChange('emailNotifications')}
                  />
                }
                label="Email Notifications"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.smsNotifications}
                    onChange={handleChange('smsNotifications')}
                  />
                }
                label="SMS Notifications"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.paymentReminders}
                    onChange={handleChange('paymentReminders')}
                  />
                }
                label="Payment Reminders"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.maintenanceAlerts}
                    onChange={handleChange('maintenanceAlerts')}
                  />
                }
                label="Maintenance Alerts"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.leaseExpiryReminders}
                    onChange={handleChange('leaseExpiryReminders')}
                  />
                }
                label="Lease Expiry Reminders"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Reminder Days Before Due Date"
                value={settings.reminderDays}
                onChange={handleChange('reminderDays')}
              />
            </Grid>
          </Grid>
        </TabPanel>

        {/* Payment Settings */}
        <TabPanel value={currentTab} index={2}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Payment Grace Period (days)"
                value={settings.paymentGracePeriod}
                onChange={handleChange('paymentGracePeriod')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Late Fee Percentage"
                value={settings.lateFeePercentage}
                onChange={handleChange('lateFeePercentage')}
                InputProps={{
                  endAdornment: <InputAdornment position="end">%</InputAdornment>,
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Divider sx={{ my: 2 }}>
                <Typography variant="subtitle2" color="textSecondary">
                  Default Bank Account Details
                </Typography>
              </Divider>
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Bank Name"
                value={settings.bankName}
                onChange={handleChange('bankName')}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Account Number"
                value={settings.accountNumber}
                onChange={handleChange('accountNumber')}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                fullWidth
                label="Account Name"
                value={settings.accountName}
                onChange={handleChange('accountName')}
              />
            </Grid>
          </Grid>
        </TabPanel>

        {/* Email Settings */}
        <TabPanel value={currentTab} index={3}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Alert severity="info" sx={{ mb: 3 }}>
                Configure your SMTP settings to enable email notifications
              </Alert>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="SMTP Host"
                value={settings.smtpHost}
                onChange={handleChange('smtpHost')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="SMTP Port"
                value={settings.smtpPort}
                onChange={handleChange('smtpPort')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="SMTP Username"
                value={settings.smtpUsername}
                onChange={handleChange('smtpUsername')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="password"
                label="SMTP Password"
                value={settings.smtpPassword}
                onChange={handleChange('smtpPassword')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Sender Email"
                value={settings.senderEmail}
                onChange={handleChange('senderEmail')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Sender Name"
                value={settings.senderName}
                onChange={handleChange('senderName')}
              />
            </Grid>
          </Grid>
        </TabPanel>

        {/* Security Settings */}
        <TabPanel value={currentTab} index={4}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.requireTwoFactor}
                    onChange={handleChange('requireTwoFactor')}
                  />
                }
                label="Require Two-Factor Authentication"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Password Expiry (days)"
                value={settings.passwordExpiry}
                onChange={handleChange('passwordExpiry')}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                type="number"
                label="Session Timeout (minutes)"
                value={settings.sessionTimeout}
                onChange={handleChange('sessionTimeout')}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.allowMultipleSessions}
                    onChange={handleChange('allowMultipleSessions')}
                  />
                }
                label="Allow Multiple Sessions"
              />
            </Grid>
          </Grid>
        </TabPanel>

        {/* Appearance Settings */}
        <TabPanel value={currentTab} index={5}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel>Theme</InputLabel>
                <Select
                  value={settings.theme}
                  onChange={handleChange('theme')}
                  label="Theme"
                >
                  <MenuItem value="light">Light</MenuItem>
                  <MenuItem value="dark">Dark</MenuItem>
                  <MenuItem value="system">System Default</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                label="Primary Color"
                type="color"
                value={settings.primaryColor}
                onChange={handleChange('primaryColor')}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: 1,
                          bgcolor: settings.primaryColor
                        }}
                      />
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={
                  <Switch
                    checked={settings.enableAnimations}
                    onChange={handleChange('enableAnimations')}
                  />
                }
                label="Enable Animations"
              />
            </Grid>
          </Grid>
        </TabPanel>
      </Card>
    </Box>
  );
}

export default Settings; 