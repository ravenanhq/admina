"use client";
import { Grid, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import List from "../../../drag-and-drop-list.json";

export const DraggableList = () => {
  const [lists, setLists] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [placeholder, setPlaceholder] = useState(false);

  useEffect(() => {
    setLists(List);
  }, []);

  const handleDragStart = (e: React.DragEvent<HTMLElement>, index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent<HTMLElement>) => {
    e.preventDefault();
    setPlaceholder(true);
  };

  const handleDrop = (
    e: React.DragEvent<HTMLElement>,
    targetStatus: string
  ) => {
    e.preventDefault();
    const updatedLists = [...lists];
    const draggedList = updatedLists[draggedIndex];

    updatedLists.splice(draggedIndex, 1);

    draggedList.status = targetStatus;

    let targetIndex = updatedLists.findIndex(
      (list) => list.status === targetStatus
    );
    if (targetIndex === -1) {
      targetIndex = updatedLists.length;
    }

    updatedLists.splice(targetIndex, 0, draggedList);

    setLists(updatedLists);
    setPlaceholder(false);
  };

  const renderListSection = (status: string) => {
    return (
      <Grid item xs={12} sm={4} md={3} lg={4}>
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
        {lists.map(
          (list, index) =>
            list.status === status && (
              <Card
                key={list.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, status)}
                style={{
                  background: "#fff",
                  border: "1px solid #ccc",
                  marginBottom: "15px",
                  borderRadius: "10px",
                }}
              >
                <CardContent
                  style={{ display: "flex", justifyContent: "space-between" }}
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
            )
        )}
        {lists.filter((list) => list.status === status).length === 0 ||
          (placeholder && (
            <div
              onDragOver={(e) => handleDragOver(e)}
              onDrop={(e) => handleDrop(e, status)}
              style={{
                height: "100px",
                border: "1px dashed #ccc",
                marginBottom: "10px",
                marginTop: "15px",
                borderRadius: "10px",
              }}
            ></div>
          ))}
      </Grid>
    );
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{ fontSize: "20px", fontWeight: "700", margin: "20px 0" }}
      >
        Draggable List
      </Typography>
      <Grid container spacing={3} style={{ display: "flex" }}>
        {renderListSection("To Do")}
        {renderListSection("In Progress")}
        {renderListSection("Done")}
      </Grid>
    </>
  );
};
