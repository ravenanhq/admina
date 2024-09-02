"use client";
import { Grid, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import DragIndicatorIcon from "@mui/icons-material/DragIndicator";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import List from "../../../drag-and-drop-list.json";

const SortableList = () => {
  const [lists, setLists] = useState([]);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  useEffect(() => {
    setLists(List);
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
        Sortable List
      </Typography>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="droppable-list">
          {(provided) => (
            <Grid
              container
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
                      lg={12}
                      ref={provided.innerRef}
                      {...provided.draggableProps}
                      {...provided.dragHandleProps}
                      style={{
                        marginBottom: "10px",
                        ...provided.draggableProps.style,
                      }}
                    >
                      <Card
                        style={{
                          background: "#fff",
                          border: "1px solid #ccc",
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
                            style={{
                              display: "flex",
                              alignItems: "center",
                            }}
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

export default SortableList;
