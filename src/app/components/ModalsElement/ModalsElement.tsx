import React, { useState } from 'react';
import { Card, CardContent, Button, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Box, CardHeader } from '@mui/material';

const ModalSection = ({ title, content, buttonText, color }) => {
	const [open, setOpen] = useState(false);

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			<Button variant="contained" color={color} onClick={handleOpen}>
				{buttonText}
			</Button>
			<Dialog open={open} onClose={handleClose}>
			<DialogTitle sx={{ backgroundColor: getColorBackground(color), color: '#ffffff' }}>
			{title}
			</DialogTitle>
			<DialogContent>
					<DialogContentText sx={{ paddingTop: '16px' }}>{content}</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleClose} color={color}>
						Close
					</Button>
				</DialogActions>
			</Dialog>
		</div>
	);
};

const getColorBackground = (color) => {
	// You can define your own color mapping based on the color prop
	// For example, if color is "primary", return the corresponding primary color
	// You can adjust this function based on your theme and color choices
	switch (color) {
		case 'primary':
			return '#1976D2'; // Replace with your primary color
		case 'secondary':
			return '#E91E63'; // Replace with your secondary color
		case 'info':
			return '#2196F3'; // Replace with your info color
		case 'warning':
			return '#FFC107'; // Replace with your warning color
		case 'success':
			return '#4CAF50'; // Replace with your success color
		default:
			return '#FFFFFF'; // Default background color
	}
};

const ModalsElement = () => {
	return (
		<Card variant="outlined">
			<CardHeader
				title="Modals"
				sx={{ bgcolor: '#7D80AB', color: 'white' }}
				titleTypographyProps={{ fontSize: '16px' }}
			/>
			<CardContent>
				<Box sx={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
					<ModalSection
						title="Primary Modal Title"
						content="This is the content of the Primary Modal."
						buttonText="Open Primary Modal"
						color="primary"
					/>
					<ModalSection
						title="Secondary Modal Title"
						content="This is the content of the Secondary Modal."
						buttonText="Open Secondary Modal"
						color="secondary"
					/>
					<ModalSection
						title="Info Modal Title"
						content="This is the content of the Info Modal."
						buttonText="Open Info Modal"
						color="info"
					/>
					<ModalSection
						title="Warning Modal Title"
						content="This is the content of the Warning Modal."
						buttonText="Open Warning Modal"
						color="warning"
					/>
					<ModalSection
						title="Success Modal Title"
						content="This is the content of the Success Modal."
						buttonText="Open Success Modal"
						color="success"
					/>
				</Box>
			</CardContent>
		</Card>
	);
};

export default ModalsElement;
