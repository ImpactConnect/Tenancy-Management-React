import { ResponsiveBar } from '@nivo/bar';
import { Box, Typography } from '@mui/material';

function RentCollection() {
  const data = [
    {
      month: 'Jan',
      paid: 85,
      pending: 10,
      overdue: 5
    },
    {
      month: 'Feb',
      paid: 90,
      pending: 8,
      overdue: 2
    },
    {
      month: 'Mar',
      paid: 80,
      pending: 15,
      overdue: 5
    }
  ];

  try {
    return (
      <Box sx={{ height: 300, width: '100%', position: 'relative' }}>
        <ResponsiveBar
          data={data}
          keys={['paid', 'pending', 'overdue']}
          indexBy="month"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.3}
          valueScale={{ type: 'linear' }}
          indexScale={{ type: 'band', round: true }}
          colors={{ scheme: 'nivo' }}
          animate={false}
          enableLabel={false}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0
          }}
        />
      </Box>
    );
  } catch (error) {
    console.error('RentCollection Error:', error);
    return (
      <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography color="error">Unable to load rent collection chart</Typography>
      </Box>
    );
  }
}

export default RentCollection; 