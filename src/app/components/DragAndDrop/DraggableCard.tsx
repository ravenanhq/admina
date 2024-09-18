"use client";
import React, { useEffect, useState } from "react";
import {
  Grid,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
} from "@mui/material";
import { Card } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import CardList from "../../../drag-and-drop.json";
import ButtonComponent from "../BaseComponent/Button";

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
        sx={{
          fontSize: "14px",
          fontWeight: "600",
          margin: "16px 0",
          color: "#747474",
        }}
      >
        Draggable Card
      </Typography>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="cards" direction="horizontal">
          {(provided) => (
            <Grid
              container
              spacing={2}
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
                        style={{
                          background: "#fff",
                          borderRadius: "3px",
                        }}
                      >
                        <CardMedia
                          sx={{
                            height: 161,
                            width: "100%",
                            borderRadius: "3px 3px 0 0",
                          }}
                          image={list.image}
                          title={list.title}
                        />
                        <CardContent sx={{ p: 2, pb: 0 }}>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ fontSize: "14px", color: "#565656" }}
                          >
                            {list.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: "12px",
                              color: "#565656",
                              lineHeight: "23px",
                            }}
                          >
                            {list.content}
                          </Typography>
                        </CardContent>
                        <CardActions
                          style={{
                            justifyContent: "flex-start",
                            padding: "8px 8px 15px 5px",
                          }}
                        >
                          <ButtonComponent
                            variant="text"
                            type="submit"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              padding: "0",
                              color: "#007BFF",
                              fontSize: "12px",
                            }}
                            name="Submit"
                          ></ButtonComponent>
                          <ButtonComponent
                            variant="text"
                            type="submit"
                            size="small"
                            style={{
                              textTransform: "capitalize",
                              padding: "0",
                              color: "#007BFF",
                              fontSize: "12px",
                            }}
                            name="Learn more"
                          ></ButtonComponent>
                        </CardActions>
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
