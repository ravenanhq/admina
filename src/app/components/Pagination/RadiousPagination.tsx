import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Card, Divider, Typography } from "@mui/material";

const RadiousPagination = () => {
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
        Radious Pagination
      </Typography>
      <Divider sx={{ margin: "0 0 10px 0", padding: "0" }} />
      <Stack spacing={2} sx={{ padding: "5px 0 12px 0" }}>
        <Pagination count={6} shape="rounded" style={{ marginLeft: "8px" }} />
        <Pagination
          count={6}
          variant="outlined"
          shape="rounded"
          style={{ marginLeft: "10px" }}
        />
      </Stack>
    </Card>
  );
};

export default RadiousPagination;
