"use client";
import Tasks from "./tasks.json";
import Columns from "./columns.json";
import { DragDropContext, DropResult } from "@hello-pangea/dnd";
import { useEffect, useState } from "react";
import Column from "./Column";
import { TextField, Button, Typography } from "@mui/material";
import { generateRandomNumber } from "@/app/utils/KanbanBoardUtils";
import NewColumn from "./AddColumn";
import AddTask from "./AddTask";
import EditTask from "./EditTask";

interface Task {
  id: string;
  content: string;
  assignees: string[];
  title: string;
  status: string;
  priority: string;
  project: string;
}

interface ColumnType {
  id: string;
  title: string;
  taskIds: string[];
}

interface Data {
  tasks: {
    [key: string]: Task;
  };
  columns: {
    [key: string]: ColumnType;
  };
  columnOrder: string[];
}

const AdvancedKanbanBoard: React.FC = () => {
  const [data, setData] = useState<Data>({
    tasks: {},
    columns: {},
    columnOrder: [],
  });

  const [searchQuery, setSearchQuery] = useState<string>("");
  const [currentTask, setCurrentTask] = useState<Task | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [newColumnDialogOpen, setNewColumnDialogOpen] = useState(false);
  const [taskFormOpen, setTaskFormOpen] = useState(false);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const jsonData = Tasks;
        const tasks = jsonData.reduce((acc, task) => {
          acc[task.id] = task;
          return acc;
        }, {});
        setData((prevState) => ({
          ...prevState,
          tasks,
        }));
      } catch (error) {
        console.error("Error fetching tasks:", error);
      }
    };

    const fetchColumns = async () => {
      try {
        const jsonData = Columns;
        const columns = jsonData.reduce((acc, column) => {
          acc[column.id] = column;
          return acc;
        }, {});
        const columnOrder = jsonData.map((column) => column.id);
        setData((prevState) => ({
          ...prevState,
          columns,
          columnOrder,
        }));
      } catch (error) {
        console.error("Error fetching columns:", error);
      }
    };

    fetchTasks();
    fetchColumns();
  }, []);

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
    const start = data.columns[source.droppableId];
    const finish = data.columns[destination.droppableId];
    if (start === finish) {
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds,
      };

      const newState = {
        ...data,
        columns: {
          ...data.columns,
          [newColumn.id]: newColumn,
        },
      };
      setData(newState);
      return;
    }
    const startTaskIds = Array.from(start.taskIds);
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds,
    };
    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds,
    };
    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish,
      },
    };

    setData(newState);
  };

  const addColumn = (title: string) => {
    const newColumnId = String(generateRandomNumber());
    const newColumn: ColumnType = {
      id: newColumnId,
      title,
      taskIds: [],
    };
    const newState = {
      ...data,
      columns: {
        ...data.columns,
        [newColumnId]: newColumn,
      },
      columnOrder: [...data.columnOrder, newColumnId],
    };

    setData(newState);
  };

  const handleDeleteTask = (taskId: string) => {
    const updatedTasks = { ...data.tasks };
    delete updatedTasks[taskId];

    const updatedColumns = { ...data.columns };
    for (const columnId in updatedColumns) {
      updatedColumns[columnId].taskIds = updatedColumns[
        columnId
      ].taskIds.filter((id) => id !== taskId);
    }

    const newState = {
      ...data,
      tasks: updatedTasks,
      columns: updatedColumns,
    };

    setData(newState);
  };

  const handleEditTask = (taskId: string) => {
    const taskToEdit = data.tasks[taskId];
    setCurrentTask(taskToEdit);
    setDrawerOpen(true);
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

  const onAddTask = (newTask: Task) => {
    const targetColumnId = Object.keys(data.columns).find(
      (columnId) => data.columns[columnId].title === newTask.status
    );

    if (targetColumnId) {
      const updatedTasks = { ...data.tasks, [newTask.id]: newTask };
      const updatedColumns = { ...data.columns };
      updatedColumns[targetColumnId].taskIds.push(newTask.id);

      const newState = {
        ...data,
        tasks: updatedTasks,
        columns: updatedColumns,
      };

      setData(newState);
    } else {
      console.error("No matching column found for status:", newTask.status);
    }
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
    setCurrentTask(null);
  };

  const handleSaveTask = (updatedTask: Task) => {
    const updatedTasks = {
      ...data.tasks,
      [updatedTask.id]: updatedTask,
    };
    setData((prevState) => ({
      ...prevState,
      tasks: updatedTasks,
    }));
    handleDrawerClose();
  };

  const handleOpenNewColumnDialog = () => {
    setNewColumnDialogOpen(true);
  };

  const handleCloseNewColumnDialog = () => {
    setNewColumnDialogOpen(false);
  };

  const handleSaveNewColumn = (title: string) => {
    addColumn(title);
    handleCloseNewColumnDialog();
  };

  const handleAddTask = () => {
    setTaskFormOpen(true);
  };

  const handleTaskFormClose = () => {
    setTaskFormOpen(false);
  };

  const handleTaskFormSubmit = (newTask: Task) => {
    onAddTask(newTask);
    handleTaskFormClose();
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
      <div style={{ width: "100%", overflow: "hidden" }}>
        <DragDropContext onDragEnd={onDragEnd}>
          <div
            className="advance-kanbanboard"
            style={{
              display: "flex",
              width: "88vw",
              overflow: "auto",
              height: "auto",
              maxHeight: "75vh",
              margin: "auto",
            }}
          >
            {data.columnOrder.map((columnId) => {
              const column = data.columns[columnId];
              const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

              const filteredTasks = tasks.filter(
                (task) =>
                  task.content
                    .toLowerCase()
                    .includes(searchQuery.toLowerCase()) ||
                  task.assignees.some((assignee) =>
                    assignee.toLowerCase().includes(searchQuery.toLowerCase())
                  ) ||
                  task.id.toLowerCase().includes(searchQuery.toLowerCase())
              );

              return (
                <Column
                  key={column.id}
                  column={column}
                  tasks={filteredTasks}
                  onDeleteTask={handleDeleteTask}
                  onEditTask={handleEditTask}
                  handleAddTask={handleAddTask}
                />
              );
            })}
          </div>
        </DragDropContext>
      </div>
      <AddTask
        open={taskFormOpen}
        onClose={handleTaskFormClose}
        onSubmit={handleTaskFormSubmit}
        statuses={Object.keys(data.columns).map(
          (key) => data.columns[key].title
        )}
      />
      <EditTask
        open={drawerOpen}
        task={currentTask}
        onClose={handleDrawerClose}
        onSave={handleSaveTask}
        onChange={handleInputChange}
        statuses={Object.keys(data.columns).map((key) => ({
          id: key,
          title: data.columns[key].title,
        }))}
      />
      <NewColumn
        open={newColumnDialogOpen}
        onClose={handleCloseNewColumnDialog}
        onSave={handleSaveNewColumn}
      />
    </div>
  );
};

export default AdvancedKanbanBoard;
