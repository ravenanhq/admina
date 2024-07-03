"use client";
import React, { createContext, useContext, ReactNode, useState } from "react";
import List from "../../../drag-and-drop-list.json";

const DragDropContext = createContext<any>(null);

export const useDragDropContext = () => useContext(DragDropContext);

export const DragDropContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [lists, setLists] = useState(List);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;

    const updatedLists = Array.from(lists);
    const sourceIndex = updatedLists.findIndex(
      (item) => item.id === source.droppableId
    );
    const destinationIndex = updatedLists.findIndex(
      (item) => item.id === destination.droppableId
    );

    const sourceList = updatedLists.filter(
      (item) => item.status === source.droppableId
    );
    const destList = updatedLists.filter(
      (item) => item.status === destination.droppableId
    );

    const [movedItem] = sourceList.splice(source.index, 1);
    movedItem.status = destination.droppableId;
    destList.splice(destination.index, 0, movedItem);

    const newList = updatedLists.map((item) => {
      if (item.id === source.droppableId) {
        return { ...item, tasks: sourceList };
      } else if (item.id === destination.droppableId) {
        return { ...item, tasks: destList };
      } else {
        return item;
      }
    });

    setLists(newList);
  };

  return (
    <DragDropContext.Provider value={{ lists, handleDragEnd }}>
      {children}
    </DragDropContext.Provider>
  );
};
