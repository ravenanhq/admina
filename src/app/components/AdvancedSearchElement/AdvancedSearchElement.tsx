// EnhancedSearch.tsx
import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';

interface Article {
	id: number;
	title: string;
	author: string;
	category: string;
	content: string;
}

const EnhancedSearch: React.FC = () => {
	const [searchTerm, setSearchTerm] = useState('');
	const [searchResults, setSearchResults] = useState<Article[]>([]);
	const [searchPerformed, setSearchPerformed] = useState(false);
	const [articles, setArticles] = useState<Article[]>([
		{
			id: 1,
			title: 'The Importance of Regular Exercise',
			author: 'John Doe',
			category: 'Health',
			content:
				'Regular exercise is essential for maintaining good health. It helps improve cardiovascular health, boost mood, and enhance overall well-being. Incorporating a mix of aerobic exercises, strength training, and flexibility exercises into your routine can yield maximum benefits.',
		},
		{
			id: 2,
			title: 'Exploring the Wonders of Space Travel',
			author: 'Jane Smith',
			category: 'Science',
			content:
				'Regular Space travel has been a subject of fascination for generations. From the first human on the moon to the exploration of distant planets, space missions have expanded our understanding of the universe. Advances in technology continue to pave the way for future interplanetary exploration.',
		},
		{
			id: 3,
			title: 'The Art of Mindfulness Meditation',
			author: 'Alice Johnson',
			category: 'Wellness',
			content:
				'Regular Mindfulness meditation is a practice that cultivates awareness and presence in the current moment. By focusing on your breath and observing thoughts without judgment, mindfulness can reduce stress, improve concentration, and contribute to a greater sense of inner peace and balance.',
		},
	]);

	const handleSearch = () => {
		const filteredResults = articles.filter(
			(article) =>
				(article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
					article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
					article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
					article.content.toLowerCase().includes(searchTerm.toLowerCase())) &&
				(!searchCriteria.title || article.title.toLowerCase().includes(searchCriteria.title.toLowerCase())) &&
				(!searchCriteria.author || article.author.toLowerCase().includes(searchCriteria.author.toLowerCase())) &&
				(!searchCriteria.category || article.category.toLowerCase().includes(searchCriteria.category.toLowerCase()))
		);

		setSearchResults(filteredResults);
		setSearchPerformed(true);
	};

	const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
		if (e.key === 'Enter') {
			handleSearch();
		}
	};

	const [searchCriteria, setSearchCriteria] = useState({
		title: '',
		author: '',
		category: '',
	});

	const handleInputChange = (field: keyof typeof searchCriteria, value: string) => {
		setSearchCriteria((prev) => ({ ...prev, [field]: value }));
	};

	return (
		<Card variant="outlined">
			<CardHeader
				title="Advanced search"
				sx={{ bgcolor: "#737E7C", color: "white" }}
				titleTypographyProps={{ fontSize: "16px" }}
			/>
			<CardContent>
				<Grid container justifyContent="center" spacing={2}>
					<Grid item xs={12} sm={2}>
						<TextField
							label="Title"
							variant="outlined"
							value={searchCriteria.title}
							onChange={(e) => handleInputChange('title', e.target.value)}
							style={{ width: '100%' }}
						/>
					</Grid>
					<Grid item xs={12} sm={2}>
						<TextField
							label="Author"
							variant="outlined"
							value={searchCriteria.author}
							onChange={(e) => handleInputChange('author', e.target.value)}
							style={{ width: '100%' }}
						/>
					</Grid>
					<Grid item xs={12} sm={2}>
						<TextField
							label="Category"
							variant="outlined"
							value={searchCriteria.category}
							onChange={(e) => handleInputChange('category', e.target.value)}
							style={{ width: '100%' }}
						/>
					</Grid>
					<Grid item xs={12} sm={8}>
						<TextField
							label="Search"
							variant="outlined"
							value={searchTerm}
							onChange={(e) => setSearchTerm(e.target.value)}
							onKeyDown={handleKeyDown}
							style={{ width: '100%' }}
							InputProps={{
								endAdornment: (
									<IconButton onClick={handleSearch} edge="end">
										<SearchIcon />
									</IconButton>
								),
							}}
						/>
					</Grid>
				</Grid>

				{searchPerformed && searchResults.length === 0 && (
          <Typography variant="body1" color="textSecondary" style={{ marginTop: 20, textAlign: 'center' }}>
            No results found.
          </Typography>
        )}

				{searchResults.length > 0 && (
					<div className="search-results" style={{ marginTop: 20 }}>
						{searchResults.map((result) => (
							<Card key={result.id} variant="outlined">
								<CardContent>
									<Typography variant="h6" color="textPrimary">
										{result.title}
									</Typography>
									<Typography variant="subtitle1" color="textSecondary">
										Author: {result.author} | Category: {result.category}
									</Typography>
									<Typography variant="body1" color="textPrimary" style={{ marginTop: 10 }}>
										{result.content}
									</Typography>
								</CardContent>
							</Card>
						))}
					</div>
				)}
			</CardContent>
		</Card>
	);
};

export default EnhancedSearch;
