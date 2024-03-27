"use client";
import { Grid, CardMedia, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import CardList from "../../../drag-and-drop.json";

const DraggableCard = () => {
  const [lists, setLists] = useState([]);
  const [draggedCard, setDraggedCard] = useState(null);

  useEffect(() => {
    setLists(CardList);
  }, []);

  const handleDragStart = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    setDraggedCard(lists[index]);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, index: number) => {
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
        Draggable Card
      </Typography>
      <Grid container spacing={3}>
        {lists.map((list, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={3}
            lg={3}
            key={list.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, index)}
          >
            <Card style={{ background: "#fff", border: "1px solid #ccc" }}>
              <CardMedia
                sx={{ height: 120 }}
                image={list.image}
                title="green iguana"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {list.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {list.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default DraggableCard;
