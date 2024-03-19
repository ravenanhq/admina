"use client";
import { Grid, CardContent, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import List from "../../../drag-and-drop-list.json";

const DraggableList = () => {
  const [lists, setLists] = useState([]);
  const [draggedCard, setDraggedCard] = useState(null);
  const [draggedIndex, setDraggedIndex] = useState(null);

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

  const handleDrop = (e, targetStatus) => {
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
        <Grid item xs={12} sm={4} md={3} lg={4}>
          <Typography gutterBottom variant="h6" component="div"
          style={{
            background:"#0689AF",
            textAlign:"center",
            color:"#fff",
            padding:"7px",borderRadius:"7px"}}
          >
            To Do
          </Typography>
          {lists.map(
            (list, index) =>
              list.status === "To Do" && (
                <Card
                  key={list.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => handleDragOver(e)}
                  onDrop={(e) => handleDrop(e, "To Do")}
                  style={{
                    background: "#fff",
                    border: "1px solid #ccc",
                    marginBottom: "15px",borderRadius:"10px"
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
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={4}>
          <Typography gutterBottom variant="h6" component="div" 
          style={{
            background:"#F06C0B",
            textAlign:"center",
            color:"#fff",
            padding:"7px",borderRadius:"7px"}}>
            In Progress
          </Typography>
          {lists.map(
            (list, index) =>
              list.status === "In Progress" && (
                <Card
                  key={list.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => handleDragOver(e)}
                  onDrop={(e) => handleDrop(e, "In Progress")}
                  style={{
                    background: "#fff",
                    border: "1px solid #ccc",
                    marginBottom: "15px",borderRadius:"10px"
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
        </Grid>
        <Grid item xs={12} sm={4} md={3} lg={4}>
          <Typography
            gutterBottom
            variant="h6"
            component="div"
            style={{
              background:"#187C01",
              textAlign:"center",
              color:"#fff",
              padding:"7px",borderRadius:"7px"}}
          >
            Done
          </Typography>
          {lists.map(
            (list, index) =>
              list.status === "Done" && (
                <Card
                  key={list.id}
                  draggable
                  onDragStart={(e) => handleDragStart(e, index)}
                  onDragOver={(e) => handleDragOver(e)}
                  onDrop={(e) => handleDrop(e, "Done")}
                  style={{
                    background: "#fff",
                    border: "1px solid #ccc",
                    marginBottom: "15px",borderRadius:"10px"
                  }}
                >
                  <CardContent
                    style={{ display: "flex", justifyContent: "space-between"}}
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
        </Grid>
      </Grid>
    </>
  );
};

export default DraggableList;
