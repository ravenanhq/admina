import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Card, CardHeader, Divider } from "@mui/material";

export default function PaginationSize() {
  return (
    <Card>
      <CardHeader
        title="Pagination Size"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <Divider sx={{ margin: "0 0 10px 0", padding: "0" }} />
      <Stack spacing={2} sx={{ padding: "5px 0 12px 0" }}>
        <Pagination
          count={6}
          color="primary"
          size="small"
          sx={{
            "& .MuiPagination-ul": {
              marginLeft: "8px",
            },
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
          sx={{
            "& .MuiPagination-ul": {
              marginLeft: "4px",
            },
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
          size="large"
          sx={{
            "& .MuiPagination-ul": {
              marginLeft: "3px",
            },
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
}
