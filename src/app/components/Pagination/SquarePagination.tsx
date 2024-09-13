import * as React from "react";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
import Stack from "@mui/material/Stack";
import { Card, CardHeader, Divider } from "@mui/material";

const SquarePagination = () => {
  return (
    <Card>
      <CardHeader
        title="Square Pagination"
        sx={{ bgcolor: "#007BFF", color: "white" }}
        titleTypographyProps={{ fontSize: "14px" }}
      />
      <Divider sx={{ margin: "0 0 10px 0", padding: "0" }} />
      <Stack spacing={2} sx={{ padding: "5px 0 12px 0" }}>
        <Pagination
          count={6}
          style={{ marginLeft: "8px" }}
          color="primary"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              sx={{
                borderRadius: "0px",
              }}
            />
          )}
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
        <Pagination
          count={6}
          variant="outlined"
          color="primary"
          style={{ marginLeft: "10px" }}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              sx={{
                borderRadius: "0px",
              }}
            />
          )}
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
        <Pagination
          count={6}
          color="primary"
          style={{ marginLeft: "10px" }}
          renderItem={(item) => (
            <PaginationItem
              {...item}
              color="primary"
              sx={{ borderRadius: "0px" }}
            />
          )}
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
};

export default SquarePagination;
