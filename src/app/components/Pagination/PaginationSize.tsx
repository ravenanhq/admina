import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Card, Divider, Typography } from "@mui/material";

export default function PaginationSize() {
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
        Pagination Size
      </Typography>
      <Divider sx={{ margin: "0 0 10px 0", padding: "0" }} />
      <Stack spacing={2} sx={{ padding: "5px 0 12px 0" }}>
        <Pagination count={6} size="small" style={{ marginLeft: "8px" }} />
        <Pagination count={6} style={{ marginLeft: "4px" }} />
        <Pagination count={6} size="large" style={{ marginLeft: "3px" }} />
      </Stack>
    </Card>
  );
}
