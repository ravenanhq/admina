import React from 'react';
import { Box, Card, CardContent, CardHeader } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

const LinearIndeterminateElement = () => {
    const [progress, setProgress] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((oldProgress) => {
                if (oldProgress === 100) {
                    return 0;
                }
                const diff = Math.random() * 10;
                return Math.min(oldProgress + diff, 100);
            });
        }, 500);

        return () => {
            clearInterval(timer);
        };
    }, []);

    return (
        <Card variant="outlined">
            <CardHeader
                title="Linear Determinate"
                sx={{ bgcolor: '#182667', color: 'white' }}
                titleTypographyProps={{ fontSize: '16px' }}
            />
             <CardContent sx={{ height: '85px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                        <LinearProgress variant="determinate" value={progress} />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default LinearIndeterminateElement;
