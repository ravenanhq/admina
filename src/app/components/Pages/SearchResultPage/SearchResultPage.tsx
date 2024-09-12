import React, { useState } from "react";
import {
  Typography,
  Box,
  TextField,
  InputAdornment,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Search from "../../../../Icons/search.svg";
import Refresh from "../../../../Icons/refresh.svg";
import SearchFiles from "./Files";
import SearchUsers from "./User";

const SearchResultPage = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <Typography
        variant="h2"
        sx={{ pt: 2, color: "#007BFF", fontSize: "20px", fontWeight: "bold" }}
      >
        Page / Search Result
      </Typography>
      <Box sx={{ mt: 2 }}>
        <TextField
          variant="outlined"
          placeholder="Applicati"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search
                  sx={{
                    color: "#747474",
                    width: "24px",
                    height: "24px",
                  }}
                />
              </InputAdornment>
            ),
            style: { backgroundColor: "#fff" },
          }}
          inputProps={{
            style: { padding: "9px 2", fontSize: "12px", color: "#747474" },
          }}
          sx={{
            width: "100%",
            height: 30,
            borderRadius: "3px",
            "& .MuiInputBase-input": {
              padding: "11.5px 0",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              border: "1px solid #C0C0C0",
              color: "#747474",
            },
          }}
        />
      </Box>

      <Box sx={{ mt: 2.5, border: "1px solid #c0c0c0", background: "#fff" }}>
        <div style={{ padding: "20px" }}>
          <Typography
            variant="subtitle2"
            sx={{ fontSize: "12px", color: "#747474", fontWeight: "600" }}
          >
            Keyword
          </Typography>
          <List sx={{ width: "100%", bgcolor: "background.paper" }}>
            <ListItem sx={{ pl: 0 }}>
              <ListItemAvatar
                sx={{
                  minWidth: "0",
                  marginTop: "3px",
                  "& .MuiAvatar-root": {
                    background: "none",
                    justifyContent: "flex-start",
                  },
                }}
              >
                <Avatar>
                  <Search sx={{ width: "18px", height: "18px" }} />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="applica"
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "12px",
                    color: "#747474",
                    fontWeight: "500",
                  },
                }}
              />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemAvatar
                sx={{
                  minWidth: "0",
                  marginTop: "3px",
                  "& .MuiAvatar-root": {
                    background: "none",
                    justifyContent: "flex-start",
                  },
                }}
              >
                <Avatar>
                  <Refresh />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="application data"
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "12px",
                    color: "#747474",
                    fontWeight: "500",
                    marginTop: "6px",
                  },
                }}
              />
            </ListItem>
            <ListItem sx={{ pl: 0 }}>
              <ListItemAvatar
                sx={{
                  minWidth: "0",
                  marginTop: "3px",
                  "& .MuiAvatar-root": {
                    background: "none",
                    justifyContent: "flex-start",
                  },
                }}
              >
                <Avatar>
                  <Refresh />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="application setting"
                sx={{
                  "& .MuiTypography-root": {
                    fontSize: "12px",
                    color: "#747474",
                    fontWeight: "500",
                    marginTop: "6px",
                  },
                }}
              />
            </ListItem>
          </List>
        </div>
        <SearchUsers />
        <SearchFiles />
      </Box>
    </>
  );
};

export default SearchResultPage;
