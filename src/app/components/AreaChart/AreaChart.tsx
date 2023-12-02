import React from 'react';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';
import { Card, CardContent, CardHeader } from '@mui/material';

const AreaChart = () => {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    datasets: [
      {
        label: 'Revenue',
        data: [50, 60, 70, 80, 90, 80, 100],
        backgroundColor: 'rgba(75,192,192,0.4)',
        borderColor: 'rgba(75,192,192,1)',
        borderWidth: 1,
        fill: true,
      },
    ],
  };

  return (
    <Card variant="outlined">
      <CardHeader
        title="Area Chart"
        sx={{ bgcolor: '#940D4C', color: 'white' }}
        titleTypographyProps={{ fontSize: '16px' }}
      />
      <CardContent>
        <Chart type='line' data={data} />
      </CardContent>
    </Card>
  );
};

export default AreaChart;
