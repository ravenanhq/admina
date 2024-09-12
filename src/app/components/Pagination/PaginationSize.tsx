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
          style={{ marginLeft: "8px" }}
        />
        <Pagination count={6} color="primary" style={{ marginLeft: "4px" }} />
        <Pagination
          count={6}
          color="primary"
          size="large"
          style={{ marginLeft: "3px" }}
        />
      </Stack>
    </Card>
  );
}
