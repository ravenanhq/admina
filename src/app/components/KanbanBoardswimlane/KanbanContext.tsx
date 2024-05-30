"use client";
import React, { createContext, useState, useContext, ReactNode } from "react";

interface KanbanContextProps {
  highlightedColumns: string[];
  toggleHighlightColumn: (columnId: string) => void;
}

const KanbanContext = createContext<KanbanContextProps | undefined>(undefined);

export const useKanbanContext = (): KanbanContextProps => {
  const context = useContext(KanbanContext);
  if (!context) {
    throw new Error("useKanbanContext must be used within a KanbanProvider");
  }
  return context;
};

interface KanbanProviderProps {
  children: ReactNode;
}

export const KanbanProvider: React.FC<KanbanProviderProps> = ({ children }) => {
  const [highlightedColumns, setHighlightedColumns] = useState<string[]>([]);

  const toggleHighlightColumn = (columnId: string) => {
    setHighlightedColumns((prevColumns) =>
      prevColumns.includes(columnId)
        ? prevColumns.filter((id) => id !== columnId)
        : [...prevColumns, columnId]
    );
  };

  return (
    <KanbanContext.Provider
      value={{ highlightedColumns, toggleHighlightColumn }}
    >
      {children}
    </KanbanContext.Provider>
  );
};
