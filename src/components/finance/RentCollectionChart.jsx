import { ResponsiveBar } from '@nivo/bar';
import { Box, Typography } from '@mui/material';

function RentCollectionChart({ period }) {
  // Mock data - replace with actual API data
  const data = [
    {
      month: 'Jan',
      collected: 85,
      pending: 10,
      overdue: 5
    },
    {
      month: 'Feb',
      collected: 90,
      pending: 8,
      overdue: 2
    },
    {
      month: 'Mar',
      collected: 82,
      pending: 15,
      overdue: 3
    }
  ];

  return (
    <Box sx={{ height: 400 }}>
      <ResponsiveBar
        data={data}
        keys={['collected', 'pending', 'overdue']}
        indexBy="month"
        margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
        padding={0.3}
        valueScale={{ type: 'linear' }}
        indexScale={{ type: 'band', round: true }}
        colors={{ scheme: 'nivo' }}
        borderColor={{ from: 'color', modifiers: [['darker', 1.6]] }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: period === 'monthly' ? 'Month' : period === 'quarterly' ? 'Quarter' : 'Year',
          legendPosition: 'middle',
          legendOffset: 32
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Percentage (%)',
          legendPosition: 'middle',
          legendOffset: -40
        }}
        labelSkipWidth={12}
        labelSkipHeight={12}
        legends={[
          {
            dataFrom: 'keys',
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 120,
            translateY: 0,
            itemsSpacing: 2,
            itemWidth: 100,
            itemHeight: 20,
            itemDirection: 'left-to-right',
            itemOpacity: 0.85,
            symbolSize: 20
          }
        ]}
      />
    </Box>
  );
}

export default RentCollectionChart; 