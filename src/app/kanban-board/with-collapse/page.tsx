import AdvancedKanbanBoard from "@/app/components/AdvancedKanbanBoard/AdvancedKanbanBoard";
import { KanbanProvider } from "@/app/components/KanbanBoardswimlane/KanbanContext";
import React from "react";

const KanbanBoardPage = () => {
  return (
    <KanbanProvider>
      <AdvancedKanbanBoard />
    </KanbanProvider>
  );
};

export default KanbanBoardPage;
