import React from 'react';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';
import { Card, CardContent, CardHeader } from '@mui/material';

const PieChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.7)',
          'rgba(54, 162, 235, 0.7)',
          'rgba(255, 206, 86, 0.7)',
          'rgba(75, 192, 192, 0.7)',
          'rgba(153, 102, 255, 0.7)',
          'rgba(255, 159, 64, 0.7)',
        ],
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
  };

  return (
    <Card variant="outlined">
      <CardHeader
        title="Pie Chart"
        sx={{ bgcolor: '#E44D26', color: 'white' }}
        titleTypographyProps={{ fontSize: '16px' }}
      />
      <CardContent style={{ height: '400px' }}>
        <Chart type='pie' data={data} options={options} />
      </CardContent>
    </Card>
  );
};

export default PieChart;
