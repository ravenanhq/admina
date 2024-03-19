import React from "react";
import DraggableCard from "../components/DragAndDrop/DraggableCard";
import DraggableList from "../components/DragAndDrop/DraggableList";
import SortableList from "../components/DragAndDrop/SortableList";

const Draggable = () => {
  return (
    <>
      <DraggableCard></DraggableCard>
      <DraggableList></DraggableList>
      <SortableList></SortableList>
    </>
  );
};

export default Draggable;
