import { useState } from 'react';
import {
  Box,
  Grid,
  Card,
  CardContent,
  Typography,
  TextField,
  MenuItem,
  Button,
  Tab,
  Tabs,
  IconButton
} from '@mui/material';
import {
  FilterList as FilterIcon,
  Download as DownloadIcon,
  Visibility as ViewIcon
} from '@mui/icons-material';
import { TabPanel, TabContext } from '@mui/lab';
import RentCollectionChart from '../../components/finance/RentCollectionChart';
import PaymentsList from '../../components/finance/PaymentsList';
import OverduePayments from '../../components/finance/OverduePayments';
import PaymentReminders from '../../components/finance/PaymentReminders';

function RentCollection() {
  const [selectedTab, setSelectedTab] = useState('overview');
  const [period, setPeriod] = useState('monthly');

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 4 }}>
        <Typography variant="h4">Rent Collection</Typography>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            select
            size="small"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            sx={{ width: 150 }}
          >
            <MenuItem value="monthly">Monthly</MenuItem>
            <MenuItem value="quarterly">Quarterly</MenuItem>
            <MenuItem value="yearly">Yearly</MenuItem>
          </TextField>
          <Button
            variant="outlined"
            startIcon={<DownloadIcon />}
          >
            Export
          </Button>
        </Box>
      </Box>

      <TabContext value={selectedTab}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 3 }}>
          <Tabs value={selectedTab} onChange={handleTabChange}>
            <Tab label="Overview" value="overview" />
            <Tab label="Payments" value="payments" />
            <Tab label="Overdue" value="overdue" />
            <Tab label="Reminders" value="reminders" />
          </Tabs>
        </Box>

        <TabPanel value="overview" sx={{ p: 0 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Card>
                <CardContent>
                  <Typography variant="h6" gutterBottom>
                    Collection Rate
                  </Typography>
                  <RentCollectionChart period={period} />
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} md={4}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Typography variant="subtitle2" color="textSecondary">
                        Total Expected
                      </Typography>
                      <Typography variant="h4">₦15.5M</Typography>
                      <Typography variant="body2" color="textSecondary">
                        for March 2024
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Typography variant="subtitle2" color="textSecondary">
                        Collected
                      </Typography>
                      <Typography variant="h4">₦12.8M</Typography>
                      <Typography variant="body2" color="success.main">
                        82.5% of expected
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card>
                    <CardContent>
                      <Typography variant="subtitle2" color="textSecondary">
                        Outstanding
                      </Typography>
                      <Typography variant="h4">₦2.7M</Typography>
                      <Typography variant="body2" color="error.main">
                        17.5% pending
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </TabPanel>

        <TabPanel value="payments" sx={{ p: 0 }}>
          <PaymentsList />
        </TabPanel>

        <TabPanel value="overdue" sx={{ p: 0 }}>
          <OverduePayments />
        </TabPanel>

        <TabPanel value="reminders" sx={{ p: 0 }}>
          <PaymentReminders />
        </TabPanel>
      </TabContext>
    </Box>
  );
}

export default RentCollection; 