import React from "react";
import DraggableCard from "../components/DragAndDrop/DraggableCard";
import SortableList from "../components/DragAndDrop/SortableList";
import { DraggableList } from "../components/DragAndDrop/DraggableList";

const Draggable = () => {
  return (
    <>
      <DraggableCard />
      <DraggableList />
      <SortableList />
    </>
  );
};

export default Draggable;
