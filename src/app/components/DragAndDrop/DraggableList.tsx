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
        >
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{
              background:
                status === "To Do"
                  ? "#0689AF"
                  : status === "In Progress"
                  ? "#F06C0B"
                  : "#187C01",
              textAlign: "center",
              color: "#fff",
              padding: "7px",
              borderRadius: "7px",
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
                      borderRadius: "10px",
                    }}
                  >
                    <Card>
                      <CardContent
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <div>
                          <Typography gutterBottom variant="h5" component="div">
                            {list.taskId}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                            sx={{ fontSize: "14px" }}
                          >
                            {list.title}
                          </Typography>
                        </div>
                        <Typography variant="body2" color="text.secondary">
                          {list.date}
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
        sx={{ fontSize: "20px", fontWeight: "700", margin: "20px 0" }}
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
