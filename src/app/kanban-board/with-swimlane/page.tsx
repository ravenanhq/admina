
import KanbanBoardWithSwimlane from "@/app/components/KanbanBoardswimlane/KanbanBoard";
import { KanbanProvider } from "@/app/components/KanbanBoardswimlane/KanbanContext";
import React from "react";

const KanbanBoardPage = () => {
  return (
    <KanbanProvider>
    <KanbanBoardWithSwimlane />
  </KanbanProvider>
  );
};

export default KanbanBoardPage;
