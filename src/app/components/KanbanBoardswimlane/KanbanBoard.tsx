"use client";
import Tasks from "./tasks.json";
import Columns from "./columns.json";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import {
  Box,
  IconButton,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import ColumnHeader from "./ColumnHeader";
import { useKanbanContext } from "./KanbanContext";
import AddStatus from "./AddStatus";
import KanbanBoardAccordion from "./KanbanBoardAccordion";
import AddTask from "./AddTask";
import EditTask from "./EditTask";
import { saveAs } from "file-saver";
import DownloadIcon from "@mui/icons-material/Download";
import ButtonComponent from "../BaseComponent/Button";
import CloseIcon from "@mui/icons-material/Close";

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

interface Swimlane {
  [swimlane: string]: ColumnTasks[];
}

const transformData = (
  tasks: Task[],
  columns: Column[],
  query: string = ""
): Swimlane[] => {
  const swimlaneMap: { [key: string]: { [columnId: string]: Task[] } } = {};

  const filteredTasks = tasks.filter(
    (task) =>
      task.title.toLowerCase().includes(query.toLowerCase()) ||
      task.content.toLowerCase().includes(query.toLowerCase()) ||
      task.id.toLowerCase().includes(query.toLowerCase())
  );

  filteredTasks.forEach((task) => {
    if (!swimlaneMap[task.swimlane]) {
      swimlaneMap[task.swimlane] = {};
    }

    if (!swimlaneMap[task.swimlane][task.status]) {
      swimlaneMap[task.swimlane][task.status] = [];
    }

    swimlaneMap[task.swimlane][task.status].push(task);
  });

  const swimlanes: Swimlane[] = [];

  for (const swimlane in swimlaneMap) {
    const columnTasks: ColumnTasks[] = columns.map((column) => {
      return {
        [column.id]: swimlaneMap[swimlane][column.id] || [],
      };
    });

    swimlanes.push({
      [swimlane]: columnTasks,
    });
  }

  return swimlanes;
};

const KanbanBoardWithSwimlane: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [columns, setColumns] = useState<Column[]>([]);
  const [swimlanes, setSwimlanes] = useState<Swimlane[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [newColumnDialogOpen, setNewColumnDialogOpen] = useState(false);
  const [newTaskDialogOpen, setNewTaskDialogOpen] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const { highlightedColumns } = useKanbanContext();

  useEffect(() => {
    setTasks(Tasks);
    setColumns(Columns);
  }, []);

  useEffect(() => {
    setSwimlanes(transformData(tasks, columns, searchQuery));
  }, [tasks, columns, searchQuery]);

  const handleOpenNewColumnDialog = () => {
    setNewColumnDialogOpen(true);
  };

  const handleCloseNewColumnDialog = () => {
    setNewColumnDialogOpen(false);
  };

  const handleAddNewColumn = (title: string) => {
    const newColumn: Column = {
      id: `column${columns.length + 1}`,
      title: title,
      order: columns.length + 1,
    };

    setColumns([...columns, newColumn]);
    handleCloseNewColumnDialog();
  };

  const handleOpenNewTaskDialog = () => {
    setNewTaskDialogOpen(true);
  };

  const handleCloseNewTaskDialog = () => {
    setNewTaskDialogOpen(false);
  };

  const handleAddNewTask = (newTaskDetail: Task) => {
    const newTask: Task = {
      id: `${tasks.length + 1}`,
      title: newTaskDetail.title,
      content: newTaskDetail.content,
      assignees: newTaskDetail.assignees,
      priority: newTaskDetail.priority,
      project: newTaskDetail.project,
      status: newTaskDetail.status,
      swimlane: newTaskDetail.swimlane,
    };

    setTasks([...tasks, newTask]);
    handleCloseNewTaskDialog();
  };

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

    const sourceSwimlaneId = source.droppableId.split("-")[0];
    const sourceColumnId = source.droppableId.split("-")[1];

    const destinationSwimlaneId = destination.droppableId.split("-")[0];
    const destinationColumnId = destination.droppableId.split("-")[1];

    const newSwimlanes = Array.from(swimlanes);
    const sourceSwimlane = newSwimlanes.find(
      (swimlane) => Object.keys(swimlane)[0] === sourceSwimlaneId
    );
    const destinationSwimlane = newSwimlanes.find(
      (swimlane) => Object.keys(swimlane)[0] === destinationSwimlaneId
    );

    if (!sourceSwimlane || !destinationSwimlane) {
      return;
    }

    const sourceColumnTasks = sourceSwimlane[sourceSwimlaneId].find(
      (colTasks) => Object.keys(colTasks)[0] === sourceColumnId
    )[sourceColumnId];
    const destinationColumnTasks = destinationSwimlane[
      destinationSwimlaneId
    ].find((colTasks) => Object.keys(colTasks)[0] === destinationColumnId)[
      destinationColumnId
    ];

    const [movedTask] = sourceColumnTasks.splice(source.index, 1);
    movedTask.swimlane = destinationSwimlaneId;
    movedTask.status = destinationColumnId;

    destinationColumnTasks.splice(destination.index, 0, movedTask);

    setSwimlanes(newSwimlanes);
  };

  const handleDeleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    setSuccessMessage("Deleted successfully!");
    setOpenSnackbar(true);
  };

  const handleEditTask = (taskId: string) => {
    const taskToEdit = tasks.find((task) => task.id === taskId);
    if (taskToEdit) {
      setCurrentTask(taskToEdit);
      setDrawerOpen(true);
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

  const handleSaveTask = (updatedTask: Task) => {
    setTasks((prevTasks) => {
      const taskIndex = prevTasks.findIndex(
        (task) => task.id === updatedTask.id
      );
      if (taskIndex !== -1) {
        const newTasks = [...prevTasks];
        newTasks[taskIndex] = updatedTask;
        return newTasks;
      } else {
        return [...prevTasks, updatedTask];
      }
    });
    handleDrawerClose();
  };

  const handleSaveJsonToFile = () => {
    const jsonContent = JSON.stringify({ tasks, columns, swimlanes }, null, 2);
    const blob = new Blob([jsonContent], { type: "application/json" });
    saveAs(blob, "kanban-board-data.json");
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
        Kanban Board with Swimlane
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
        <ButtonComponent
          variant="contained"
          size="small"
          color="primary"
          name="Add Status"
          style={{
            marginTop: "16px",
            marginBottom: "8px",
            lineHeight: 1,
          }}
          onClick={handleOpenNewColumnDialog}
        />
        <ButtonComponent
          variant="contained"
          size="small"
          color="primary"
          name="Get JSON"
          prefix={<DownloadIcon />}
          style={{
            marginTop: "16px",
            marginBottom: "8px",
            lineHeight: 1,
          }}
          onClick={handleSaveJsonToFile}
        />
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
          <ColumnHeader columns={columns} onAddTask={handleOpenNewTaskDialog} />
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
              {swimlanes.map((swimlane, swimlaneIndex) => (
                <div key={swimlaneIndex}>
                  {Object.keys(swimlane).map((swimlaneName) => (
                    <KanbanBoardAccordion
                      key={swimlaneIndex}
                      swimlane={swimlane}
                      highlightedColumns={highlightedColumns}
                      columns={columns}
                      onDeleteTask={handleDeleteTask}
                      onEditTask={handleEditTask}
                    />
                  ))}
                </div>
              ))}
            </DragDropContext>
          </div>
        </Box>
      </div>
      <AddStatus
        open={newColumnDialogOpen}
        onClose={handleCloseNewColumnDialog}
        onSave={handleAddNewColumn}
      />
      <AddTask
        open={newTaskDialogOpen}
        onClose={handleCloseNewTaskDialog}
        onSave={handleAddNewTask}
        columns={columns}
        swimlanes={swimlanes}
      />
      <EditTask
        open={drawerOpen}
        task={currentTask}
        onClose={handleDrawerClose}
        onSave={handleSaveTask}
        onChange={handleInputChange}
        statuses={columns}
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

export default KanbanBoardWithSwimlane;
