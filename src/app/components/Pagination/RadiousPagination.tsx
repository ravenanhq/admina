import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Card, CardHeader, Divider } from "@mui/material";

const RadiousPagination = () => {
  return (
    <Card>
      <CardHeader
        title="Radious Pagination"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <Divider sx={{ margin: "0 0 10px 0", padding: "0" }} />
      <Stack spacing={2} sx={{ padding: "5px 0 12px 0" }}>
        <Pagination
          count={6}
          shape="rounded"
          color="primary"
          sx={{
            "& .MuiPagination-ul": {
              marginLeft: "13px",
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
          variant="outlined"
          shape="rounded"
          color="primary"
          sx={{
            "& .MuiPagination-ul": {
              marginLeft: "15px",
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
};

export default RadiousPagination;
