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
        sx={{
          fontSize: "14px",
          fontWeight: "600",
          margin: "0 0 15px 0",
          color: "#747474",
        }}
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
                          borderRadius: "5px",
                        }}
                      >
                        <CardContent
                          style={{
                            display: "flex",
                            flexDirection: isMobile ? "column" : "row",
                            justifyContent: "space-between",
                            alignItems: "flex-start",
                            paddingBottom: "10px",
                          }}
                        >
                          <div
                            style={{
                              display: "flex",
                              alignItems: "center",
                              flexDirection: isMobile ? "row" : "row",
                              marginBottom: isMobile ? "2px" : "0",
                            }}
                          >
                            <DragIndicatorIcon
                              sx={{
                                marginRight: "10px",
                                color: "#747474",
                                fontSize: "24px",
                              }}
                            />
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="div"
                              sx={{
                                lineHeight: isMobile ? "18px" : "20px",
                                marginLeft: "4px",
                                marginRight: "10px",
                                fontSize: "12px",
                                color: "#565656",
                                textAlign: "left",
                              }}
                            >
                              {list.details}
                            </Typography>
                          </div>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{
                              fontSize: "12px",
                              color: "#565656",
                              textAlign: "left",
                              marginLeft: isMobile ? "40px" : "",
                            }}
                          >
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
