import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card, Divider, Typography } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const CustomIcons = () => {
  return (
    <Card>
      <Typography
        variant="h6"
        style={{
          padding: "10px 0",
          fontSize: "14px",
          fontWeight: "bold",
          marginLeft: "17px",
        }}
      >
        Custom Icon Pagination
      </Typography>
      <Divider sx={{ margin: "0 0 10px 0", padding: "0" }} />

      <Stack spacing={2} sx={{ padding: "5px 0 12px 0" }}>
        <Pagination
          count={6}
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
        />
        <Pagination
          count={6}
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: KeyboardDoubleArrowLeftIcon,
                next: KeyboardDoubleArrowRightIcon,
              }}
              {...item}
            />
          )}
        />
      </Stack>
    </Card>
  );
};

export default CustomIcons;
