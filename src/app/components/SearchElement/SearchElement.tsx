import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { Card, CardContent, CardHeader, Grid, Typography } from '@mui/material';

interface SearchResult {
  id: number;
  title: string;
  content: string;
}

const SearchElement: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = () => {
    const filteredResults = articles.filter(
      (article) =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.content.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(filteredResults);
    setSearchPerformed(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const articles: SearchResult[] = [
    { id: 1, title: 'Lorem Ipsum Article 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris et leo venenatis, accumsan dolor et, ultricies mauris. Sed porttitor suscipit ante, sit amet faucibus elit rutrum vitae.' },
    { id: 2, title: 'Lorem Ipsum Article 2', content: 'Mauris sodales sollicitudin elit eget scelerisque. Nullam pretium diam in sem hendrerit, at posuere sem dictum. Nam elementum vitae augue id tempor.' },
  ];

  return (
    <Card variant="outlined">
			 <CardHeader
        title="Simple search"
        sx={{ bgcolor: "#737E7C", color: "white" }}
        titleTypographyProps={{ fontSize: "16px" }}
      />
      <CardContent>
        <Grid container justifyContent="center">
          <Grid item xs={12} sm={8}>
            <TextField
              label="Search"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                endAdornment: (
                  <IconButton onClick={handleSearch} edge="end">
                    <SearchIcon />
                  </IconButton>
                ),
              }}
              style={{ width: '100%' }}
              onKeyDown={handleKeyDown}
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

export default SearchElement;
