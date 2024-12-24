import { ResponsiveLine } from '@nivo/line';
import { Box, Typography } from '@mui/material';

function RevenueChart() {
  const data = [
    {
      id: "revenue",
      data: [
        { x: "Jan", y: 1200000 },
        { x: "Feb", y: 1350000 },
        { x: "Mar", y: 1400000 },
        { x: "Apr", y: 1200000 },
        { x: "May", y: 1500000 },
        { x: "Jun", y: 1600000 }
      ]
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

  try {
    return (
      <Box sx={{ height: 400, width: '100%', position: 'relative' }}>
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 80 }}
          xScale={{ type: 'point' }}
          yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
          yFormat={(value) => formatCurrency(value)}
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
            tickRotation: 0,
            format: (value) => `${(value / 1000000).toFixed(1)}M`
          }}
          enablePoints={true}
          pointSize={10}
          pointColor={{ theme: 'background' }}
          pointBorderWidth={2}
          pointBorderColor={{ from: 'serieColor' }}
          enableGridX={false}
          enableGridY={true}
          animate={false}
          tooltip={({ point }) => (
            <Box
              sx={{
                background: 'white',
                padding: '9px 12px',
                border: '1px solid #ccc',
                borderRadius: 1
              }}
            >
              <Typography variant="body2">
                {point.data.x}: {formatCurrency(point.data.y)}
              </Typography>
            </Box>
          )}
          legends={[
            {
              anchor: 'bottom-right',
              direction: 'column',
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: 'left-to-right',
              itemWidth: 80,
              itemHeight: 20,
              symbolSize: 12,
              symbolShape: 'circle'
            }
          ]}
        />
      </Box>
    );
  } catch (error) {
    console.error('RevenueChart Error:', error);
    return (
      <Box sx={{ height: 400, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography color="error">Unable to load revenue chart</Typography>
      </Box>
    );
  }
}

export default RevenueChart; 