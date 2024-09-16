import React from "react";
import DraggableCard from "../components/DragAndDrop/DraggableCard";
import SortableList from "../components/DragAndDrop/SortableList";
import DraggableList from "../components/DragAndDrop/DraggableList";
import { DragDropContextProvider } from "../components/DragAndDrop/DragAndDropContext";
import { Typography } from "@mui/material";

const Draggable = () => {
  return (
    <>
      <Typography
        variant="h2"
        sx={{ pt: 2, color: "#007BFF", fontSize: "22px", fontWeight: "bold" }}
      >
        Drag and Drop
      </Typography>
      <DraggableCard />
      <DragDropContextProvider>
        <DraggableList />
      </DragDropContextProvider>
      <SortableList />
    </>
  );
};

export default Draggable;
