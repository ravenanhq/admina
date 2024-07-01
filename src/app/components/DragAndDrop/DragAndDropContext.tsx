"use client";
import React, { createContext, useContext, ReactNode, useState } from "react";
import List from "../../../drag-and-drop-list.json";

const DragDropContext = createContext<any>(null);

export const useDragDropContext = () => useContext(DragDropContext);

export const DragDropContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [lists, setLists] = useState(List);

  const handleDragEnd = (result: any) => {
    if (!result.destination) return;

    const updatedLists = Array.from(lists);
    const [movedItem] = updatedLists.splice(result.source.index, 1);
    movedItem.status = result.destination.droppableId;
    updatedLists.splice(result.destination.index, 0, movedItem);

    setLists(updatedLists);
  };

  return (
    <DragDropContext.Provider value={{ lists, handleDragEnd }}>
      {children}
    </DragDropContext.Provider>
  );
};
