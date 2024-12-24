import { ResponsiveBar } from '@nivo/bar';
import { Box } from '@mui/material';

function PaymentSummaryChart({ period }) {
  // Mock data - replace with actual API data
  const data = [
    {
      month: 'Jan',
      completed: 1200000,
      pending: 200000,
      overdue: 100000
    },
    {
      month: 'Feb',
      completed: 1350000,
      pending: 150000,
      overdue: 50000
    },
    {
      month: 'Mar',
      completed: 1400000,
      pending: 300000,
      overdue: 80000
    }
  ];

  const formatCurrency = (value) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  return (
    <Box sx={{ height: 400 }}>
      <ResponsiveBar
        data={data}
        keys={['completed', 'pending', 'overdue']}
        indexBy="month"
        margin={{ top: 50, right: 130, bottom: 50, left: 80 }}
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
          format: value => `₦${(value / 1000000).toFixed(1)}M`,
          legend: 'Amount',
          legendPosition: 'middle',
          legendOffset: -60
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
        tooltip={({ id, value, color }) => (
          <Box
            sx={{
              padding: '9px 12px',
              background: 'white',
              border: '1px solid #ccc',
              borderRadius: 1
            }}
          >
            <strong>{id}:</strong> {formatCurrency(value)}
          </Box>
        )}
      />
    </Box>
  );
}

export default PaymentSummaryChart; 