import React from 'react';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import CircularProgress, {
    CircularProgressProps,
  } from '@mui/material/CircularProgress';

const CircularLabelElement = ( props: CircularProgressProps & { value: number } ) => {

    return (
        <Card variant="outlined">
            <CardHeader
                title="Circular With Label"
                sx={{ bgcolor: '#E44D26', color: 'white' }}
                titleTypographyProps={{ fontSize: '16px' }}
            />
            <CardContent>
                <Box sx={{ position: 'relative', display: 'inline-flex', gap: '8px'  }}>
                    <CircularProgress variant="determinate" {...props} />
                    <Box
                        sx={{
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        position: 'absolute',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        }}
                    >
                        <Typography
                        variant="caption"
                        component="div"
                        color="text.secondary"
                        >{`${Math.round(props.value as number)}%`}</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default function CircularWithValueLabel() {
    const [progress, setProgress] = React.useState(10);
  
    React.useEffect(() => {
      const timer = setInterval(() => {
        setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
      }, 800);
      return () => {
        clearInterval(timer);
      };
    }, []);
  
    return <CircularLabelElement value={progress} />;
  }
