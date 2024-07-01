import React from "react";
import DraggableCard from "../components/DragAndDrop/DraggableCard";
import SortableList from "../components/DragAndDrop/SortableList";
import DraggableList from "../components/DragAndDrop/DraggableList";
import { DragDropContextProvider } from "../components/DragAndDrop/DragAndDropContext";

const Draggable = () => {
  return (
    <>
      <DraggableCard />
      <DragDropContextProvider>
        <DraggableList />
      </DragDropContextProvider>
      <SortableList />
    </>
  );
};

export default Draggable;
