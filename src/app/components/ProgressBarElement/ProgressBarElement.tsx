import React from 'react';
import { Card, CardContent, CardHeader, LinearProgress, Typography, Box } from '@mui/material';

const ProgressBar = () => {
  return (
    <Card variant="outlined">
      <CardHeader
        title="Progress Bar"
        sx={{ bgcolor: '#4E580C', color: 'white' }}
        titleTypographyProps={{ fontSize: '16px' }}
      />
      <CardContent>
        <Typography variant="body1" gutterBottom>
          Task in Progress
        </Typography>
        <LinearProgress
          variant="determinate"
          value={60}
          sx={{
            height: '20px',
            borderRadius: '20px',
            backgroundColor: '#E8E8E8',
            '& .MuiLinearProgress-bar': {
              borderRadius: '20px',
              backgroundColor: '#007BFF',
            },
          }}
        />
        <Box display="flex" justifyContent="space-between" mt={2}>
          <Typography variant="body2" color="textSecondary">
            40%
          </Typography>
          <Typography variant="body2" color="textSecondary">
            100%
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProgressBar;
