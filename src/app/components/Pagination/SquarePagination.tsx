import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import { Card, Divider, Typography } from "@mui/material";

const SquarePagination = () => {
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
        Square Pagination
      </Typography>
      <Divider sx={{ margin: "0 0 10px 0", padding: "0" }} />
      <Stack spacing={2} sx={{ padding: "5px 0 12px 0" }}>
        <Pagination
          count={6}
          style={{ marginLeft: "8px" }}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              style={{
                borderRadius: "0px",
              }}
            />
          )}
        />
        <Pagination
          count={6}
          variant="outlined"
          style={{ marginLeft: "10px" }}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              style={{
                borderRadius: "0px",
              }}
            />
          )}
        />
        <Pagination
          count={6}
          style={{ marginLeft: "10px" }}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              color="primary"
              style={{
                borderRadius: "0px",
              }}
            />
          )}
        />
      </Stack>
    </Card>
  );
};

export default SquarePagination;
