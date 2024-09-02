"use client";
import React, { useEffect, useState } from "react";
import { Grid, CardMedia, CardContent, Typography } from "@mui/material";
import { Card } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import CardList from "../../../drag-and-drop.json";

const DraggableCard = () => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    setLists(CardList);
  }, []);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const items = Array.from(lists);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setLists(items);
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{ fontSize: "20px", fontWeight: "700", margin: "20px 0" }}
      >
        Draggable Card
      </Typography>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="cards" direction="horizontal">
          {(provided) => (
            <Grid
              container
              spacing={3}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {lists.map((list, index) => (
                <Draggable
                  key={list.id}
                  draggableId={list.id.toString()}
                  index={index}
                >
                  {(provided) => (
                    <Grid
                      item
                      xs={12}
                      sm={4}
                      md={3}
                      lg={3}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                    >
                      <Card
                        style={{ background: "#fff", border: "1px solid #ccc" }}
                      >
                        <CardMedia
                          sx={{ height: 120 }}
                          image={list.image}
                          title={list.title}
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
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </DragDropContext>
    </>
  );
};

export default DraggableCard;
