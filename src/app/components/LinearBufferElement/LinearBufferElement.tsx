import React, { useEffect, useRef, useState } from 'react';
import { Box, Card, CardContent, CardHeader } from '@mui/material';
import LinearProgress from '@mui/material/LinearProgress';

const LinearBufferElement = () => {
    const [buffer, setBuffer] = useState<number>(10)
    const [progress, setProgress] = useState<number>(0)
    const progressRef = useRef(() => { })

    useEffect(() => {
        progressRef.current = () => {
            if (progress > 100) {
                setProgress(0)
                setBuffer(10)
            } else {
                const diff = Math.random() * 10
                const diff2 = Math.random() * 10
                setProgress(progress + diff)
                setBuffer(progress + diff + diff2)
            }
        }
    })

    useEffect(() => {
        const timer = setInterval(() => {
            progressRef.current()
        }, 500)

        return () => {
            clearInterval(timer)
        }
    }, [])


    return (
        <Card variant="outlined">
            <CardHeader
                title="Linear Buffer"
                sx={{ bgcolor: '#515FA0', color: 'white' }}
                titleTypographyProps={{ fontSize: '16px' }}
            />
            <CardContent sx={{ height: '85px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Box sx={{ width: '100%', mr: 1 }}>
                        <LinearProgress variant='buffer' value={progress} valueBuffer={buffer} />
                    </Box>
                </Box>
            </CardContent>
        </Card>
    );
};

export default LinearBufferElement;
