import React from 'react';
import { Chart } from 'react-chartjs-2';
import 'chart.js/auto';
import { Card, CardContent, CardHeader } from '@mui/material';

const RadarChart = () => {
  const data = {
    labels: ['Eating', 'Drinking', 'Sleeping', 'Designing', 'Coding', 'Cycling', 'Running'],
    datasets: [
      {
        label: 'My Dataset',
        data: [65, 59, 90, 81, 56, 55, 40],
        fill: true,
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        pointBackgroundColor: 'rgba(255, 99, 132, 1)',
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };

  const options = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 100,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <Card variant="outlined">
      <CardHeader
        title="Radar Chart"
        sx={{ bgcolor: '#515FA0', color: 'white' }}
        titleTypographyProps={{ fontSize: '16px' }}
      />
      <CardContent style={{ height: '400px' }}>
        <Chart type='radar' data={data} options={options} />
      </CardContent>
    </Card>
  );
};

export default RadarChart;
