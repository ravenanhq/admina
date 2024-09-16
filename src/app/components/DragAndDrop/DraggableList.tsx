"use client";
import { Grid, CardContent, Typography } from "@mui/material";
import React from "react";
import { Card } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useDragDropContext } from "./DragAndDropContext";

const DraggableList = () => {
  const { lists, handleDragEnd } = useDragDropContext();

  const renderListSection = (status) => (
    <Droppable droppableId={status} key={status}>
      {(provided) => (
        <Grid
          item
          xs={12}
          sm={4}
          md={4}
          lg={4}
          ref={provided.innerRef}
          {...provided.droppableProps}
          sx={{ pt: "18px" }}
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{
              background:
                status === "To Do"
                  ? "#007BFF"
                  : status === "In Progress"
                  ? "#0065D2"
                  : "#0055B0",
              textAlign: "center",
              color: "#fff",
              padding: "7px",
              borderRadius: "5px",
              fontSize: "14px",
              fontWeight: "600",
              marginBottom: "12px",
            }}
          >
            {status}
          </Typography>
          {lists
            .filter((list) => list.status === status)
            .map((list, index) => (
              <Draggable
                key={list.id}
                draggableId={list.id.toString()}
                index={index}
              >
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    style={{
                      ...provided.draggableProps.style,
                      background: "#fff",
                      border: "1px solid #ccc",
                      marginBottom: "15px",
                      borderRadius: "5px",
                    }}
                  >
                    <Card>
                      <CardContent
                        sx={{
                          p: 0,
                          "&:last-child": {
                            pb: 0,
                          },
                        }}
                      >
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "15px",
                          }}
                        >
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{
                              fontSize: "14px",
                              fontWeight: "600",
                              color: "#565656",
                            }}
                          >
                            {list.taskId}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: "12px",
                              color: "#565656",
                            }}
                          >
                            {list.date}
                          </Typography>
                        </div>
                        <Typography
                          gutterBottom
                          variant="h5"
                          component="div"
                          sx={{
                            fontSize: "12px",
                            color: "#565656",
                            padding: "0 0 15px 15px",
                          }}
                        >
                          {list.title}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </Draggable>
            ))}
          {provided.placeholder}
        </Grid>
      )}
    </Droppable>
  );

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Typography
        variant="h4"
        sx={{
          fontSize: "14px",
          fontWeight: "600",
          margin: "20px 0",
          color: "#747474",
        }}
      >
        Draggable List
      </Typography>
      <Grid container spacing={3}>
        {renderListSection("To Do")}
        {renderListSection("In Progress")}
        {renderListSection("Done")}
      </Grid>
    </DragDropContext>
  );
};

export default DraggableList;
