import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreOutlinedIcon from "@mui/icons-material/ExpandMoreOutlined";
import { Droppable } from "@hello-pangea/dnd";
import Task from "./Task";

interface Task {
  id: string;
  content: string;
  assignees: string[];
  title: string;
  status: string;
  swimlane: string;
  priority: string;
  project: string;
}

interface Column {
  id: string;
  title: string;
  order: number;
}

interface ColumnTasks {
  [columnId: string]: Task[];
}

interface SwimlaneProps {
  swimlane: { [swimlane: string]: ColumnTasks[] };
  highlightedColumns: string[];
  columns: Column[];
  onDeleteTask: (taskId: string) => void;
  onEditTask: (taskId: string) => void;
}

const KanbanBoardAccordion: React.FC<SwimlaneProps> = ({
  swimlane,
  highlightedColumns,
  columns,
  onDeleteTask,
  onEditTask,
}) => {
  return (
    <>
      {Object.keys(swimlane).map((swimlaneName, index) => {
        const totalTasks = swimlane[swimlaneName].reduce(
          (count, columnTasks) => {
            return count + Object.values(columnTasks).flat().length;
          },
          0
        );
        return (
          <Accordion
            key={index}
            TransitionProps={{ unmountOnExit: true }}
            sx={{
              width: "100%",
              border: "0px",
              boxShadow: "none",
              overflow: "visible",
              backgroundColor: "#fff",
            }}
            className="kanbanBoardAccordion"
          >
            <AccordionSummary
              expandIcon={<ExpandMoreOutlinedIcon />}
              sx={{
                padding: "0 8px",
                flexDirection: "row-reverse",
                gap: "10px",
                border: 0,
                minHeight: "30px",
                position: "sticky",
                backgroundColor: "#fff",
                top: "35px",
                zIndex: 99,
              }}
            >
              <Typography variant={"h6"} style={{ margin: 0,fontSize: "1rem" }}>
                {swimlaneName} (
                {totalTasks > 1 ? `${totalTasks} Tasks` : `${totalTasks} Task`})
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: "0 8px",
                backgroundColor: "#fff",
              }}
            >
              <div style={{ display: "flex", gap: "10px" }}>
                {swimlane[swimlaneName].map((columnTasks, colIndex) => (
                  <Droppable
                    droppableId={`${swimlaneName}-${
                      Object.keys(columnTasks)[0]
                    }`}
                    key={colIndex}
                  >
                    {(provided) => {
                      const selectedColumn = highlightedColumns.includes(
                        Object.keys(columnTasks)[0]
                      );
                      return (
                        <div
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            margin: "0 0 8px 0",
                            border: "1px solid lightgrey",
                            borderRadius: "4px",
                            width: selectedColumn ? "50px" : "292px",
                            minWidth: selectedColumn ? "50px" : "250px",
                            padding: "8px 16px",
                            minHeight: "400px",
                            backgroundColor: "#d8dee9",
                            flexBasis: selectedColumn ? "50px" : "292px",
                            flexGrow: 0,
                            flexShrink: 0,
                            maxWidth: "292px",
                            transition: "all .1s linear",
                          }}
                        >
                          {Object.keys(columnTasks).map((columnId) => (
                            <div key={columnId}>
                              <div
                                style={{
                                  display: selectedColumn ? "flex" : "none",
                                  textTransform: "uppercase",
                                  width: "100%",
                                  writingMode: "vertical-rl",
                                  padding: selectedColumn ? "8px 0" : "16px",
                                  position: "sticky",
                                  top: "0",
                                  zIndex: "1",
                                  alignItems: "center",
                                }}
                              >
                                <Typography
                                  variant="h3"
                                  style={{ fontSize: "14px", padding: "16px" }}
                                >
                                  {
                                    columns.find(
                                      (column) => column.id === columnId
                                    )?.title
                                  }
                                </Typography>
                              </div>
                              <div
                                style={{
                                  listStyleType: "none",
                                  padding: 0,
                                  display: selectedColumn ? "none" : "",
                                }}
                              >
                                {columnTasks[columnId].map((task, index) => (
                                  <Task
                                    key={task.id}
                                    task={task}
                                    index={index}
                                    onDelete={() => onDeleteTask(task.id)}
                                    onEdit={() => onEditTask(task.id)}
                                  />
                                ))}
                                {provided.placeholder}
                              </div>
                            </div>
                          ))}
                        </div>
                      );
                    }}
                  </Droppable>
                ))}
              </div>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default KanbanBoardAccordion;
