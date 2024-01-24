import React, { useState } from 'react';
import {
  Button,
  IconButton,
  CardContent,
  Card,
  Grid,
  TextField,
  Link
} from '@mui/material';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import SearchIcon from '@mui/icons-material/Search';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GridViewIcon from '@mui/icons-material/GridView';
import MoneyIcon from '@mui/icons-material/Money';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const ProductsListHeader = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Card variant="outlined">
      <CardContent sx={{ borderRadius: '4px', padding: '20px' }}>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={4} style={{ marginTop: '8px', paddingTop: '14px' }}>
        <Link href={"/ecommerce/add-new-product"}><Button
              variant="contained"
              color="primary"
              type="submit"
              size="small"
              startIcon={<AddCircleOutlineIcon />}
              sx={{ padding: '10px', 
              background: '#008cff',
              margin: isMobile ? '0 0 0 10px' : ""}}
            >
              New Product
            </Button></Link>
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} style={{ paddingTop: '14px',width: '100%', }}>
            <TextField
              placeholder="Search"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                endAdornment: (
                  <div style={{ borderLeft: '1px solid #ccc', paddingLeft: '8px', paddingBottom: '0' }}>
                    <IconButton edge="end">
                      <SearchIcon />
                    </IconButton>
                  </div>
                ),
              }}
              sx={{ height: '40px', padding: '8px', width: '100%', '& input': { padding: '8px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} style={{ paddingTop: '14px' }}>
            <TextField
              placeholder="Sort by"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                endAdornment: (
                  <div style={{ borderLeft: '1px solid #ccc', paddingLeft: '8px' }}>
                    <IconButton edge="end">
                      <KeyboardArrowDownIcon />
                    </IconButton>
                  </div>
                ),
              }}
              sx={{ height: '40px', padding: '8px', width: '100%', '& input': { padding: '8px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} style={{ paddingTop: '14px' }}>
            <TextField
              placeholder="Collection"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                endAdornment: (
                  <div style={{ borderLeft: '1px solid #ccc', paddingLeft: '8px' }}>
                    <IconButton edge="end">
                      <GridViewIcon />
                    </IconButton>
                  </div>
                ),
              }}
              sx={{ height: '40px', padding: '8px', width: '100%', '& input': { padding: '8px' } }}
            />
          </Grid>
          <Grid item xs={12} sm={6} md={3} lg={2} style={{ paddingTop: '14px' }}>
            <TextField
              placeholder="Price Range"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              InputProps={{
                endAdornment: (
                  <div style={{ borderLeft: '1px solid #ccc', paddingLeft: '8px' }}>
                    <IconButton edge="end">
                      <MoneyIcon />
                    </IconButton>
                  </div>
                ),
              }}
              sx={{ height: '40px', padding: '8px', width: '100%', '& input': { padding: '8px' } }}
            />
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default ProductsListHeader;
