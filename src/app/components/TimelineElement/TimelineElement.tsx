import React from 'react';
import {
	List,
	ListItem,
	ListItemAvatar,
	ListItemText,
	Typography,
	Paper,
	Avatar,
	Card,
	CardContent,
	CardHeader,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';

const CustomTimeline = () => {
	const events = [
		{
			date: 'January 1, 2023',
			name: 'John Doe',
			description: 'Event 1 description goes here.',
		},
		{
			date: 'February 15, 2023',
			name: 'Jane Smith',
			description: 'Event 2 description goes here.',
		},
		{
			date: 'March 10, 2023',
			name: 'Alice Johnson',
			description: 'Event 3 description goes here.',
		},
	];

	return (
		<Card variant="outlined">
			<CardHeader
				title="Timeline"
				sx={{ bgcolor: '#AB361D', color: 'white' }}
				titleTypographyProps={{ fontSize: '16px' }}
			/>
			<CardContent>
				<List>
					{events.map((event, index) => (
						<ListItem key={index}>
							<ListItemAvatar>
								<Avatar sx={{ bgcolor: 'primary.main' }}>
									<CheckIcon />
								</Avatar>
							</ListItemAvatar>
							<ListItemText>
								<Paper elevation={3} sx={{ padding: '10px', maxWidth: '400px' }}>
									<Typography variant="subtitle2" component="div" sx={{ color: 'text.secondary' }}>
										{event.date}
									</Typography>
									<Typography variant="h6" component="h1">
										{event.name}
									</Typography>
									<Typography>{event.description}</Typography>
								</Paper>
							</ListItemText>
						</ListItem>
					))}
				</List>
			</CardContent>
		</Card>

	);
};

export default CustomTimeline;
