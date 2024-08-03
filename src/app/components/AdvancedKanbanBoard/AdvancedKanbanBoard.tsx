"use client";
import Tasks from "./tasks.json";
import Columns from "./columns.json";
import { DragDropContext, DropResult, Droppable } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import Column from "./Column";
import {
  TextField,
  Button,
  Typography,
  Box,
  Snackbar,
  IconButton,
} from "@mui/material";
import { generateRandomNumber } from "@/app/utils/KanbanBoardUtils";
import NewColumn from "./AddColumn";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import ColumnHeader from "./ColumnHeader";
import Task from "./Task";
import { useKanbanContext } from "../KanbanBoardswimlane/KanbanContext";
import CloseIcon from "@mui/icons-material/Close";

interface Task {
  id: string;
  content: string;
  assignees: string[];
  title: string;
  status: string;
  priority: string;
  project: string;
}

interface Column {
  id: string;
  title: string;
  order: number;
}

interface TasksByColumn {
  [key: string]: Task[];
}

const groupAndFilterTasksByColumn = (
  tasks: Task[],
  columns: Column[],
  query: string
): TasksByColumn => {
  const tasksByColumn: TasksByColumn = {};

  columns.forEach((column) => {
    tasksByColumn[column.id] = [];
  });

  tasks
    .filter(
      (task) =>
        !query ||
        task.title.toLowerCase().includes(query.toLowerCase()) ||
        task.content.toLowerCase().includes(query.toLowerCase()) ||
        task.id.toLowerCase().includes(query.toLowerCase())
    )
    .forEach((task) => {
      if (tasksByColumn[task.status]) {
        tasksByColumn[task.status].push(task);
      } else {
        console.error(
          `Task with ID ${task.id} has invalid status: ${task.status}`
        );
      }
    });

  return tasksByColumn;
};

const AdvancedKanbanBoard: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [columns, setColumns] = useState<Column[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [newColumnDialogOpen, setNewColumnDialogOpen] = useState(false);
  const [taskFormOpen, setTaskFormOpen] = useState(false);
  const [taskData, setTaskData] = useState<TasksByColumn>({});
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { highlightedColumns } = useKanbanContext();

  useEffect(() => {
    setTasks(Tasks);
    setColumns(Columns);
  }, []);

  useEffect(() => {
    setTaskData(groupAndFilterTasksByColumn(tasks, columns, searchQuery));
  }, [tasks, columns, searchQuery]);

  const onDragEnd = (result: DropResult) => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const startColumn = taskData[source.droppableId];
    const finishColumn = taskData[destination.droppableId];
    const movedTask = startColumn[source.index];

    if (startColumn === finishColumn) {
      const newTaskIds = Array.from(startColumn);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, movedTask);

      const newTaskData = {
        ...taskData,
        [source.droppableId]: newTaskIds,
      };

      setTaskData(newTaskData);
    } else {
      const startTaskIds = Array.from(startColumn);
      startTaskIds.splice(source.index, 1);

      const finishTaskIds = Array.from(finishColumn);
      finishTaskIds.splice(destination.index, 0, movedTask);

      const newTaskData = {
        ...taskData,
        [source.droppableId]: startTaskIds,
        [destination.droppableId]: finishTaskIds,
      };

      setTaskData(newTaskData);

      const updatedTasks = tasks.map((task) => {
        if (task.id === draggableId) {
          return { ...task, status: destination.droppableId };
        }
        return task;
      });

      setTasks(updatedTasks);
    }
  };

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | { name?: string; value: string | number }
    >
  ) => {
    if (currentTask) {
      const { name, value } = event.target;
      setCurrentTask({ ...currentTask, [name as string]: value as string });
    }
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setCurrentTask(null);
  };

  const handleOpenNewColumnDialog = () => {
    setNewColumnDialogOpen(true);
  };

  const handleCloseNewColumnDialog = () => {
    setNewColumnDialogOpen(false);
  };

  const handleSaveNewColumn = (title: string) => {
    const newColumn: Column = {
      id: `column${columns.length + 1}`,
      title,
      order: columns.length,
    };
    setColumns([...columns, newColumn]);
    handleCloseNewColumnDialog();
  };

  const handleAddTask = () => {
    setTaskFormOpen(true);
  };

  const handleTaskFormClose = () => {
    setTaskFormOpen(false);
  };

  const handleTaskFormSubmit = (newTask: Task) => {
    newTask.id = generateRandomNumber().toString();
    setTasks([...tasks, newTask]);
    handleTaskFormClose();
  };

  const handleSaveTask = (editedTask: Task) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
    handleDrawerClose();
  };

  const handleEditTask = (taskId: string) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setCurrentTask(taskToEdit);
      setDrawerOpen(true);
    }
  };

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
    setSuccessMessage("Deleted successfully!");
    setOpenSnackbar(true);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "calc(100vh - 94px)",
        maxHeight: "100%",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="h4"
        sx={{ fontSize: "20px", fontWeight: "700", margin: "10px 0" }}
      >
        Advanced Kanban Board
      </Typography>
      <div
        style={{
          display: "flex",
          gap: 10,
          justifyContent: "flex-end",
          flexWrap: "wrap",
        }}
      >
        <TextField
          label="Search tasks"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          variant="outlined"
          margin="normal"
          size="small"
        />
        <Button
          variant="contained"
          style={{
            marginTop: "16px",
            marginBottom: "8px",
          }}
          onClick={handleOpenNewColumnDialog}
        >
          Add Status
        </Button>
      </div>
      <div
        style={{
          width: "100%",
          height: "100%",
          gridTemplateColumns: "10fr",
          alignItems: "flex-start",
          columnGap: "1rem",
          display: "grid",
          marginTop: "1px",
          overflow: "hidden",
          rowGap: "1rem",
        }}
      >
        <Box
          overflow="auto"
          style={{
            width: "100%",
            overflow: "auto",
            height: "auto",
            maxHeight: "calc(100% - 120px)",
            backgroundColor: "#fff",
            marginTop: "10px",
          }}
        >
          <ColumnHeader columns={columns} onAddTask={handleAddTask} />
          <div
            style={{
              borderRadius: "4px",
              transition: "all .1s linear",
              height: "100%",
              gap: "10px",
              boxShadow: "none",
              backgroundColor: "#fff",
            }}
          >
            <DragDropContext onDragEnd={onDragEnd}>
              <div style={{ display: "flex", gap: "10px", padding: "0 8px" }}>
                {columns.map((column, index) => {
                  const tasksForColumn = taskData[column.id] || [];
                  const selectedColumn = highlightedColumns.includes(column.id);
                  return (
                    <Droppable droppableId={column.id} key={column.id}>
                      {(provided) => (
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
                              {column.title}
                            </Typography>
                          </div>
                          <div
                            style={{
                              listStyleType: "none",
                              padding: 0,
                              display: selectedColumn ? "none" : "",
                            }}
                          >
                            {tasksForColumn.map((task, index) => (
                              <Task
                                key={task.id}
                                task={task}
                                index={index}
                                onDelete={() => handleDeleteTask(task.id)}
                                onEdit={() => handleEditTask(task.id)}
                              />
                            ))}
                            {provided.placeholder}
                          </div>
                        </div>
                      )}
                    </Droppable>
                  );
                })}
              </div>
            </DragDropContext>
          </div>
        </Box>
      </div>

      <AddTask
        open={taskFormOpen}
        onClose={handleTaskFormClose}
        onSubmit={handleTaskFormSubmit}
        statuses={columns}
      />
      <EditTask
        open={drawerOpen}
        task={currentTask}
        onClose={handleDrawerClose}
        onSave={handleSaveTask}
        onChange={handleInputChange}
        statuses={columns.map((column) => ({
          id: column.id,
          title: column.title,
        }))}
      />
      <NewColumn
        open={newColumnDialogOpen}
        onClose={handleCloseNewColumnDialog}
        onSave={handleSaveNewColumn}
      />
      <Snackbar
        open={openSnackbar}
        autoHideDuration={6000}
        onClose={() => setOpenSnackbar(false)}
        message={successMessage}
        action={
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={() => setOpenSnackbar(false)}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
      />
    </div>
  );
};

export default AdvancedKanbanBoard;
