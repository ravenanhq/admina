import React from "react";
import { Box, Button, useMediaQuery } from "@mui/material";

const CustomPagination = ({ count, rowsPerPage, page, onPageChange }) => {
  const totalPages = Math.ceil(count / rowsPerPage);

  const isMobile = useMediaQuery("(max-width:600px)");

  const handlePrevPage = () => {
    if (page > 0) {
      onPageChange(page - 1);
    }
  };

  const handleNextPage = () => {
    if (page < totalPages - 1) {
      onPageChange(page + 1);
    }
  };

  const handlePageClick = (newPage) => {
    onPageChange(newPage);
  };

  return (
    <Box
      className="pagination"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 2,
        flexWrap: isMobile ? "wrap" : "nowrap",
      }}
    >
      <Button
        variant="outlined"
        sx={{ margin: isMobile ? "0 0 4px 0" : "0 4px" }}
        disabled={page === 0}
        onClick={handlePrevPage}
      >
        Previous
      </Button>
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          variant={index === page ? "contained" : "outlined"}
          sx={{
            margin: isMobile ? "0 0 4px 0" : "0 4px",
            minWidth: isMobile ? "30px" : "auto",
            padding: isMobile ? "4px 8px" : "6px 16px",
          }}
          onClick={() => handlePageClick(index)}
          className={index === page ? "active" : ""}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        variant="outlined"
        sx={{ margin: isMobile ? "0 0 8px 0" : "0 8px" }}
        disabled={page === totalPages - 1}
        onClick={handleNextPage}
      >
        Next
      </Button>
    </Box>
  );
};

export default CustomPagination;
