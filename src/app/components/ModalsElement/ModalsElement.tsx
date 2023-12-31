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
	switch (color) {
		case 'primary':
			return '#1976d2';
		case 'secondary':
			return '#9c27b0';
		case 'info':
			return '#0288d1';
		case 'warning':
			return '#ed6c02';
		case 'success':
			return '#2e7d32';
		default:
			return '#FFFFFF';
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
