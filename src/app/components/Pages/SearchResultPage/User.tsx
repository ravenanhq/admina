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
import AvatarHeader from "../../../../Icons/avatar-header.svg";

const SearchUsers = () => {
  const [page, setPage] = useState(1);

  return (
    <>
      <Box sx={{ borderTop: "1px solid #c0c0c0", padding: "20px" }}>
        <Typography
          variant="subtitle2"
          sx={{ fontSize: "12px", color: "#747474", fontWeight: "600" }}
        >
          Users
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
                <AvatarHeader />
              </Avatar>
            </ListItemAvatar>
            <ListItemText
              primary="User application"
              sx={{
                "& .MuiTypography-root": {
                  fontSize: "12px",
                  color: "#747474",
                  fontWeight: "500",
                },
              }}
            />
          </ListItem>
        </List>
      </Box>
    </>
  );
};

export default SearchUsers;
