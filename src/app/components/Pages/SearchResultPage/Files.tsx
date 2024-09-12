import React, { useState } from "react";
import {
  Typography,
  Box,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import Files from "../../../../Icons/files.svg";
import FilesDoc from "../../../../Icons/files-doc.svg";

const SearchFiles = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <Box sx={{ borderTop: "1px solid #c0c0c0", padding: "20px" }}>
        <Typography
          variant="subtitle2"
          sx={{ fontSize: "12px", color: "#747474", fontWeight: "600" }}
        >
          Files
        </Typography>
        <List sx={{ width: "100%", bgcolor: "background.paper" }}>
          <ListItem sx={{ pl: 0 }}>
            <ListItemAvatar
              sx={{
                minWidth: "50px",
                minHeight: "34px",
                "& .MuiAvatar-root": {
                  background: "none",
                  borderRadius: "0",
                },
              }}
            >
              <Avatar>
                <Files />
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
                minWidth: "50px",
                minHeight: "34px",
                marginTop: "3px",
                "& .MuiAvatar-root": {
                  background: "none",
                  borderRadius: "0",
                },
              }}
            >
              <Avatar>
                <FilesDoc sx={{ width: "41px", height: "34px" }} />
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
        </List>
      </Box>
    </>
  );
};

export default SearchFiles;
