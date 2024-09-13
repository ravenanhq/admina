import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Card, CardHeader, Divider, Typography } from "@mui/material";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";

const CustomIcons = () => {
  return (
    <Card>
      <CardHeader
        title="Custom Icon Pagination"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <Divider sx={{ margin: "0 0 10px 0", padding: "0" }} />

      <Stack spacing={2} sx={{ padding: "5px 0 12px 0" }}>
        <Pagination
          count={6}
          color="primary"
          renderItem={(item) => (
            <PaginationItem
              slots={{ previous: ArrowBackIcon, next: ArrowForwardIcon }}
              {...item}
            />
          )}
          sx={{
            "& .MuiButtonBase-root": {
              color: "#565656",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#007BFF",
              color: "#fff",
              borderColor: "#007BFF",
            },
          }}
        />
        <Pagination
          count={6}
          color="primary"
          renderItem={(item) => (
            <PaginationItem
              slots={{
                previous: KeyboardDoubleArrowLeftIcon,
                next: KeyboardDoubleArrowRightIcon,
              }}
              {...item}
            />
          )}
          sx={{
            "& .MuiButtonBase-root": {
              color: "#565656",
            },
            "& .MuiPaginationItem-root.Mui-selected": {
              backgroundColor: "#007BFF",
              color: "#fff",
              borderColor: "#007BFF",
            },
          }}
        />
      </Stack>
    </Card>
  );
};

export default CustomIcons;
