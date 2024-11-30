import React from "react";
import { Box, Button, useMediaQuery } from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";

const CustomPagination = ({
  count,
  rowsPerPage,
  page,
  onPageChange,
  prevButtonContent = "Previous",
  nextButtonContent = "Next",
}) => {
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
        "& .active": {
          background: "#007BFF",
        },
      }}
    >
      <Button
        variant="outlined"
        sx={{
          margin: isMobile ? "0 0 4px 0" : "0 4px",
          padding: isMobile ? "4px 8px" : "0px 10px",
          borderTop: "1px solid #c0c0c0",
          borderBottom: "1px solid #c0c0c0",
          fontSize: "12px",
          color: "#747474",
        }}
        disabled={page === 0}
        onClick={handlePrevPage}
      >
        {prevButtonContent == "arrow" ? <ArrowLeftIcon /> : prevButtonContent}
      </Button>
      {[...Array(totalPages)].map((_, index) => (
        <Button
          key={index}
          variant={index === page ? "contained" : "outlined"}
          sx={{
            margin: isMobile ? "0 0 4px 0" : "0 4px",
            minWidth: isMobile ? "30px" : "auto",
            padding: isMobile ? "4px 8px" : "0px 10px",
            borderTop: "1px solid #c0c0c0",
            borderBottom: "1px solid #c0c0c0",
          }}
          onClick={() => handlePageClick(index)}
          className={index === page ? "active" : ""}
        >
          {index + 1}
        </Button>
      ))}
      <Button
        variant="outlined"
        disabled={page === totalPages - 1}
        onClick={handleNextPage}
        sx={{
          margin: isMobile ? "0 0 8px 0" : "0 8px",
          borderTop: "1px solid #c0c0c0",
          borderBottom: "1px solid #c0c0c0",
          fontSize: "12px",
        }}
      >
        {prevButtonContent == "arrow" ? <ArrowRightIcon /> : nextButtonContent}
      </Button>
    </Box>
  );
};

export default CustomPagination;
