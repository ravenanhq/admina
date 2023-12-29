import React from 'react';
import { Box, Card, CardContent, CardHeader, Typography } from '@mui/material';
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress'

const LinearLabelElement = (props: LinearProgressProps & { value: number }) => {

    return (
        <Card variant="outlined">
            <CardHeader
                title="Linear With Label"
                sx={{ bgcolor: '#008744', color: 'white' }}
                titleTypographyProps={{ fontSize: '16px' }}
            />
            <CardContent sx={{ height: '85px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                        <LinearProgress variant="determinate" {...props} />
                    </Box>
                    <Box sx={{ minWidth: 35 }}>
                        <Typography variant="caption" color="text.secondary">{`${Math.round(
                            props.value as number
                        )}%`}</Typography>
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default function ProcessLinearWithLabel() {
    const [progress, setProgress] = React.useState(10);

    React.useEffect(() => {
        const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
        }, 800);
        return () => {
            clearInterval(timer);
        };
    }, []);

    return <LinearLabelElement value={progress} />;
}
