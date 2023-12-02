import React from 'react';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';
import { Card, CardContent, CardHeader } from '@mui/material';

const DonutChart = () => {
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ['#DC3545', '#007BFF', '#FFC107', '#28A745', '#6F42C1', '#FF9800'],
      },
    ],
  };

  const options = {
    cutout: '70%',
    maintainAspectRatio: false,
  };

  return (
    <Card variant="outlined">
      <CardHeader
        title="Donut Chart"
        sx={{ bgcolor: '#1D8683', color: 'white' }}
        titleTypographyProps={{ fontSize: '16px' }}
      />
      <CardContent style={{ height: '400px' }}>
        <Chart type='doughnut' data={data} options={options} />
      </CardContent>
    </Card>
  )
};

export default DonutChart;
