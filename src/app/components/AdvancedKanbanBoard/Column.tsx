"use client";
import React, { useState } from "react";
import { Droppable } from "@hello-pangea/dnd";
import Task from "./Task";
import { Typography, Paper, IconButton } from "@mui/material";
import {
  Add as AddIcon,
  KeyboardArrowLeft as KeyboardArrowLeftIcon,
  KeyboardArrowRight as KeyboardArrowRightIcon,
} from "@mui/icons-material";

interface Task {
  id: string;
  content: string;
  assignees: string[];
  title: string;
  status: string;
  priority: string;
}

interface ColumnProps {
  column: {
    id: string;
    title: string;
    taskIds: string[];
  };
  tasks: {
    id: string;
    content: string;
    assignees: string[];
    title: string;
    status: string;
    priority: string;
  }[];
  onDeleteTask: (taskId: string) => void;
  onEditTask: (taskId: string) => void;
  handleAddTask: () => void;
}

const Column: React.FC<ColumnProps> = ({
  column,
  tasks,
  onDeleteTask,
  onEditTask,
  handleAddTask,
}) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);

  const handleCollapseToggle = () => {
    setCollapsed(!collapsed);
  };

  return (
    <>
      <Paper
        className={collapsed ? "collapsed" : ""}
        style={{
          margin: "8px",
          borderRadius: "4px",
          width: collapsed ? "50px" : "300px",
          minWidth: collapsed ? "50px" : "250px",
          transition: "all .1s linear",
          height: "100%",
          gap: "10px",
          display: "flex",
          flexDirection: "column",
          boxShadow: "none",
          backgroundColor: "transparent",
        }}
      >
        <div
          style={{
            display: !collapsed ? "flex" : "none",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "8px 16px",
            marginBottom: "8px",
            position: "sticky",
            top: "0",
            backgroundColor: "#d8dee9",
            zIndex: "1",
          }}
        >
          <Typography
            variant="body2"
            style={{ fontSize: "14px", fontWeight: "500" }}
          >
            {column.title}
          </Typography>
          <div>
            <IconButton
              onClick={handleCollapseToggle}
              style={{ padding: "4px" }}
            >
              {collapsed ? (
                <KeyboardArrowRightIcon />
              ) : (
                <KeyboardArrowLeftIcon />
              )}
            </IconButton>
            <IconButton onClick={handleAddTask} style={{ padding: "4px" }}>
              <AddIcon />
            </IconButton>
          </div>
        </div>
        <div
          style={{
            display: collapsed ? "flex" : "none",
            textTransform: "uppercase",
            width: "100%",
            writingMode: "vertical-rl",
            padding: collapsed ? "8px 0" : "16px",
            position: "sticky",
            top: "0",
            backgroundColor: "#d8dee9",
            zIndex: "1",
            alignItems: "center",
          }}
        >
          <IconButton onClick={handleCollapseToggle}>
            {collapsed ? <KeyboardArrowRightIcon /> : <KeyboardArrowLeftIcon />}
          </IconButton>
          <Typography variant="body2" style={{ padding: "16px" }}>
            {column.title}
          </Typography>
        </div>
        <div
          style={{
            height: collapsed ? 0 : "100%",
            opacity: collapsed ? 0 : 1,
            overflow: "hidden",
            overflowX: "auto",
            margin: "0 5px 0 0",
            backgroundColor: "#fff",
            padding: "16px 8px",
            transition: "opacity 0.3s, height 0.3s",
          }}
        >
          <Droppable droppableId={column.id}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                style={{
                  padding: "8px",
                  backgroundColor: "#f8f8f8",
                  minHeight: "100px",
                  display: "block",
                  overflowX: "auto",
                }}
              >
                {tasks.map((task, index) => (
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
            )}
          </Droppable>
        </div>
      </Paper>
    </>
  );
};

export default Column;
