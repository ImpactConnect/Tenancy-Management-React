import { ResponsivePie } from '@nivo/pie';
import { Box, Typography } from '@mui/material';

function OccupancyRate() {
  const data = [
    {
      id: 'Occupied',
      label: 'Occupied',
      value: 75,
      color: '#4caf50'
    },
    {
      id: 'Vacant',
      label: 'Vacant',
      value: 25,
      color: '#ff9800'
    }
  ];

  try {
    return (
      <Box sx={{ height: 300, width: '100%', position: 'relative' }}>
        <ResponsivePie
          data={data}
          margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
          innerRadius={0.5}
          padAngle={0.7}
          cornerRadius={3}
          activeOuterRadiusOffset={8}
          colors={{ datum: 'data.color' }}
          borderWidth={1}
          borderColor={{ from: 'color', modifiers: [['darker', 0.2]] }}
          enableArcLabels={true}
          enableArcLinkLabels={true}
          arcLinkLabelsSkipAngle={10}
          arcLinkLabelsTextColor="#333333"
          arcLinkLabelsThickness={2}
          arcLinkLabelsColor={{ from: 'color' }}
          animate={false}
        />
      </Box>
    );
  } catch (error) {
    console.error('OccupancyRate Error:', error);
    return (
      <Box sx={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Typography color="error">Unable to load occupancy chart</Typography>
      </Box>
    );
  }
}

export default OccupancyRate; 