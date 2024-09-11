import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Card, CardHeader, Divider } from "@mui/material";

const PaginationRanges = () => {
  return (
    <Card>
      <CardHeader
        title="Pagination Range"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <Divider sx={{ margin: "0 0 10px 0", padding: "0" }} />
      <Stack spacing={2} sx={{ padding: "5px 0 12px 0" }}>
        <Pagination count={6} defaultPage={3} siblingCount={0} />{" "}
        <Pagination
          count={6}
          defaultPage={3}
          siblingCount={0}
          boundaryCount={2}
        />
        <Pagination count={6} defaultPage={3} boundaryCount={2} />
      </Stack>
    </Card>
  );
};

export default PaginationRanges;
