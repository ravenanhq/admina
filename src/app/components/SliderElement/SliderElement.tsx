import React, { useState } from 'react';
import { Container, Box, Typography, Slider, Card, CardContent, CardHeader } from '@mui/material';

const SliderSection = ({ title, value, color }) => {
  const [sliderValue, setSliderValue] = useState(value);

  const handleChange = (event, newValue) => {
    setSliderValue(newValue);
  };

  const sliderStyles = {
    color: color,
    width: '80%',
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div" gutterBottom>
          {title}
        </Typography>
        <Slider
          value={sliderValue}
          step={1}
          min={0}
          max={100}
          valueLabelDisplay="auto"
          onChange={handleChange}
          sx={sliderStyles}
        />
      </CardContent>
    </Card>
  );
};

const SliderElement = () => {
  return (
    <Card variant="outlined">
      <CardHeader
        title="Sliders"
        sx={{ bgcolor: '#E71A55', color: 'white' }}
        titleTypographyProps={{ fontSize: '16px' }}
      />
      <CardContent>
        <SliderSection title="Volume" value={50} color="#007BFF" />
        <SliderSection title="Brightness" value={75} color="#28A745" />
        <SliderSection title="Opacity" value={30} color="#DC3545" />
      </CardContent>
    </Card>
  );
};

export default SliderElement;
