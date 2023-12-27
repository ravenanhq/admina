import React from 'react';
import { Box, Card, CardContent, CardHeader, CircularProgress } from '@mui/material';

const CircularDeterminateElement = () => {
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

    return (
        <Card variant="outlined">
            <CardHeader
                title="Circular Determinate"
                sx={{ bgcolor: '#940D4C', color: 'white' }}
                titleTypographyProps={{ fontSize: '16px' }}
            />
            <CardContent>
                <Box sx={{ position: 'relative', display: 'inline-flex', gap: '8px'  }}>
                  <CircularProgress variant="determinate" value={25} />
                  <CircularProgress variant="determinate" value={50} />
                  <CircularProgress variant="determinate" value={75} />
                  <CircularProgress variant="determinate" value={100} />
                  <CircularProgress variant="determinate" value={progress} />
                </Box>
            </CardContent>
        </Card>
    );
};
export default CircularDeterminateElement;