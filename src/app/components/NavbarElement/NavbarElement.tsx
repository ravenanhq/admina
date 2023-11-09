import React, { useState } from 'react';
import {
	AppBar,
	Toolbar,
	Typography,
	Button,
	IconButton,
	CardContent,
	Card,
	CardHeader,
	Drawer,
	List,
	ListItem,
	ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
	const [open, setOpen] = useState(false);

	const toggleDrawer = () => {
		setOpen(!open);
	};

	return (
		<Card variant="outlined">
			<CardHeader
				title="Navbar"
				sx={{ bgcolor: '#008744', color: 'white' }}
				titleTypographyProps={{ fontSize: '16px' }}
			/>
			<CardContent>
				<AppBar position="static" style={{ marginBottom: '20px' }}>
					<Toolbar>
						<Typography variant="h6" component="div">
							Basic Navbar
						</Typography>
						<Button color="inherit">Home</Button>
						<Button color="inherit">About</Button>
						<Button color="inherit">Services</Button>
						<Button color="inherit">Contact</Button>
					</Toolbar>
				</AppBar>

				<AppBar position="static" style={{ marginBottom: '20px' }}>
					<Toolbar>
						<IconButton edge="start" color="inherit" onClick={toggleDrawer}>
							<MenuIcon />
						</IconButton>
						<Typography variant="h6" component="div">
							Drawer Navbar
						</Typography>
					</Toolbar>
				</AppBar>
				<Drawer anchor="left" open={open} onClose={toggleDrawer}>
					<List>
						<ListItem onClick={toggleDrawer}>
							<ListItemText primary="Home" />
						</ListItem>
						<ListItem onClick={toggleDrawer}>
							<ListItemText primary="About" />
						</ListItem>
						<ListItem onClick={toggleDrawer}>
							<ListItemText primary="Services" />
						</ListItem>
						<ListItem onClick={toggleDrawer}>
							<ListItemText primary="Contact" />
						</ListItem>
					</List>
				</Drawer>
			</CardContent>
		</Card>

	);
};

export default Navbar;