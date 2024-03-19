"use client";
import { Grid, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import List from "../../../drag-and-drop-list.json";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const SortableList = () => {
  const [lists, setLists] = useState([]);
  const [draggedCard, setDraggedCard] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setLists(List);
  }, []);

  const handleDragStart = (e, index) => {
    setDraggedCard(lists[index]);
    setDraggedIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDrop = (e, index) => {
    const updatedCards = [...lists];
    const draggedCardIndex = updatedCards.indexOf(draggedCard);
    updatedCards.splice(draggedCardIndex, 1);
    updatedCards.splice(index, 0, draggedCard);
    setLists(updatedCards);
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{ fontSize: "20px", fontWeight: "700", margin: "20px 0" }}
      >
        Sortable list
      </Typography>
      <Grid container>
        {lists.map((list, index) => (
          <Grid
            item
            xs={12}
            lg={12}
            key={list.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, index)}
          >
            <Card
              key={list.id}
              style={{
                background: "#fff",
                border: "1px solid #ccc",
                marginBottom: "10px",
                borderRadius: "10px",
              }}
            >
              <CardContent
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  paddingBottom: "10px",
                }}
              >
                <div
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <DragIndicatorIcon
                    sx={{ marginTop: isMobile ? "10px" : "-2px" }}
                  />
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: "14px",
                      lineHeight: isMobile ? "18px" : "20px",
                      marginLeft: "4px",
                      marginRight: "10px",
                    }}
                  >
                    {list.details}
                  </Typography>
                </div>
                <Typography variant="body2" color="text.secondary">
                  {list.date}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default SortableList;
