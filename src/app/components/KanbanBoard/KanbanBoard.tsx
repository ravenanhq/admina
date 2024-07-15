"use client";
import React, { useEffect, useState } from "react";
import { Grid, CardContent, Typography, Drawer } from "@mui/material";
import { Card } from "react-bootstrap";
import List from "../../../drag-and-drop-list.json";
import MoreVertSharpIcon from "@mui/icons-material/MoreVertSharp";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import AddTask from "./AddTask";
import UpdateTask from "./UpdateTask";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AssigneeOptions, PriorityOptions, StatusOption } from "./TaskData";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface Task {
  id: string;
  taskId: string;
  title: string;
  details: string;
  date: string;
  priority: string;
  status: string;
  dueDate: Date;
  label: string;
  assignee: string;
}

export const KanbanBoard = () => {
  const [lists, setLists] = useState([]);
  const [draggedIndex, setDraggedIndex] = useState(null);
  const [placeholder, setPlaceholder] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [selectedStatus, setSelectedStatus] = useState("");
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });
  const [openDrawer, setOpenDrawer] = useState(false);
  const [drawerData, setDrawerData] = useState<Task>({
    id: "",
    taskId: "",
    title: "",
    details: "",
    date: "",
    priority: "",
    status: "",
    dueDate: null,
    label: "",
    assignee: "",
  });
  const [showAddItem, setShowAddItem] = useState(false);

  useEffect(() => {
    setLists(List);
  }, []);

  const handleDragStart = (e, index) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setPlaceholder(true);
  };

  const handleDrop = (e, targetStatus) => {
    e.preventDefault();
    const updatedLists = [...lists];
    const draggedList = updatedLists[draggedIndex];

    updatedLists.splice(draggedIndex, 1);

    draggedList.status = targetStatus;

    let targetIndex = updatedLists.findIndex(
      (list) => list.status === targetStatus
    );
    if (targetIndex === -1) {
      targetIndex = updatedLists.length;
    }

    updatedLists.splice(targetIndex, 0, draggedList);

    setLists(updatedLists);
    setPlaceholder(false);
  };

  const handleTouchStart = (index) => {
    setDraggedIndex(index);
  };

  const handleTouchMove = (e) => {
    e.preventDefault();
  };

  const handleTouchEnd = (targetStatus) => {
    const updatedLists = [...lists];
    const draggedList = updatedLists[draggedIndex];

    updatedLists.splice(draggedIndex, 1);
    draggedList.status = targetStatus;

    let targetIndex = updatedLists.findIndex(
      (list) => list.status === targetStatus
    );
    if (targetIndex === -1) {
      targetIndex = updatedLists.length;
    }

    updatedLists.splice(targetIndex, 0, draggedList);

    setLists(updatedLists);
    setPlaceholder(false);
  };

  const handleMenuClick = (status, e) => {
    const columnPosition = e.currentTarget.getBoundingClientRect();

    const menuPosition = {
      x: columnPosition.right - 150,
      y: columnPosition.bottom - 25,
    };

    setSelectedStatus(status);
    setMenuPosition(menuPosition);
    setMenuOpen(!menuOpen);
  };

  const handleDelete = (statusToDelete) => {
    setMenuOpen(false);
    const updatedLists = lists.filter((list) => list.status !== statusToDelete);
    setLists(updatedLists);
  };

  const handleAddItem = () => {
    setMenuOpen(false);
    setShowAddItem(true);
  };

  const handleCancel = () => {
    setShowAddItem(false);
  };

  const toggleDrawer = (data) => {
    setDrawerData(data);
    setOpenDrawer(!openDrawer);
  };

  const handleConfirm = (taskName, status, assignee, priority) => {
    const newTask = {
      id: lists.length + 1,
      taskId: "Task" + (lists.length + 1),
      title: taskName,
      status: status,
      assignee: assignee,
      priority: priority,
      date: new Date().toLocaleDateString(),
    };
    setLists([...lists, newTask]);
    setShowAddItem(false);
  };

  const handleSubmitUpdateTask = (updatedTaskData) => {
    const updatedLists = lists.map((list) => {
      if (list.id === updatedTaskData.id) {
        return { ...list, ...updatedTaskData };
      }
      return list;
    });
    setLists(updatedLists);
    setOpenDrawer(false);
  };

  const handleDeleteTask = (id: string) => {
    const updatedLists = lists.filter((list) => list.id !== id);
    setLists(updatedLists);
    setOpenDrawer(false);
  };

  const getPriorityIcon = (priority) => {
    switch (priority?.toLowerCase()) {
      case "high":
        return <KeyboardDoubleArrowUpIcon style={{ color: "red" }} />;
      case "medium":
        return <KeyboardArrowUpIcon style={{ color: "orange" }} />;
      case "low":
        return <KeyboardArrowUpIcon style={{ color: "#007bff" }} />;
      default:
        return null;
    }
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const renderListSection = (status) => {
    return (
      <>
        {lists.map(
          (list, index) =>
            list.status === status && (
              <Card
                key={list.id}
                draggable
                onDragStart={(e) => handleDragStart(e, index)}
                onDragOver={(e) => handleDragOver(e)}
                onDrop={(e) => handleDrop(e, status)}
                onClick={() => toggleDrawer(list)}
                onTouchStart={() => handleTouchStart(index)}
                onTouchMove={handleTouchMove}
                onTouchEnd={() => handleTouchEnd(status)}
                style={{
                  background: "#fff",
                  border: "1px solid #ccc",
                  marginBottom: "10px",
                  borderRadius: "4px",
                  cursor: "pointer",
                  boxShadow: "1px 6px 3px -2px #ccc",
                }}
              >
                <CardContent style={{ paddingBottom: "10px" }}>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    sx={{ fontSize: "14px" }}
                  >
                    {list.title}
                  </Typography>
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{ marginTop: "10px" }}
                    >
                      {getPriorityIcon(list.priority)}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      style={{
                        background: "#dcdcdc",
                        width: "30px",
                        height: "30px",
                        lineHeight: "28px",
                        borderRadius: "15px",
                        textAlign: "center",
                      }}
                    >
                      {list.assignee && list.assignee.length > 0
                        ? list.assignee
                            .split(" ")
                            .map((word) => word[0])
                            .join("")
                            .toUpperCase()
                        : ""}
                    </Typography>
                  </div>
                </CardContent>
              </Card>
            )
        )}
        {placeholder && (
          <div
            onDragOver={(e) => handleDragOver(e)}
            onDrop={(e) => handleDrop(e, status)}
            style={{
              height: "100px",
              border: "1px dashed #ccc",
              marginBottom: "10px",
              marginTop: "15px",
              borderRadius: "10px",
            }}
          ></div>
        )}
      </>
    );
  };

  return (
    <>
      <Typography
        variant="h4"
        sx={{ fontSize: "20px", fontWeight: "700", margin: "20px 0" }}
      >
        Kanban Board
      </Typography>

      <Grid
        container
        spacing={3}
        style={{
          display: "flex",
          background: "#fff",
          padding: "0 10px",
          margin: "0",
        }}
      >
        {StatusOption.map((status, index) => {
          const isLastItem = index === StatusOption.length - 1;
          return (
            <Grid
              item
              xs={12}
              sm={4}
              md={4}
              lg={4}
              key={status}
              style={{
                padding: "0 10px 10px 0",
                marginTop: "10px",
                paddingRight: isLastItem ? "0px" : "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  background: "#d8dee9",
                  padding: "0px 10px",
                  borderRadius: "4px",
                  marginBottom: "10px",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h6"
                  component="div"
                  style={{
                    color: "#000",
                    textAlign: "left",
                    fontSize: "14px",
                    fontWeight: "500",
                    marginTop: "6px",
                  }}
                >
                  {status}
                </Typography>
                <MoreVertSharpIcon
                  style={{
                    marginTop: "5px",
                    cursor: "pointer",
                    color: "#6b6e73",
                  }}
                  onClick={(e) => handleMenuClick(status, e)}
                />
                {menuOpen && (
                  <div
                    style={{
                      position: "absolute",
                      background: "#fff",
                      top: menuPosition.y,
                      left: menuPosition.x,
                      border: "1px solid #ccc",
                      borderRadius: "5px",
                      padding: "14px 33px",
                      transform: "translate(0px, 25px)",
                    }}
                  >
                    <div
                      onClick={handleAddItem}
                      style={{
                        color: "#5d596c",
                        lineHeight: "30px",
                        cursor: "pointer",
                      }}
                    >
                      <AddOutlinedIcon
                        style={{
                          position: "relative",
                          top: "6px",
                          right: "10px",
                        }}
                      />
                      Add Item
                    </div>
                    <div
                      onClick={() => handleDelete(selectedStatus)}
                      style={{
                        color: "#5d596c",
                        lineHeight: "30px",
                        cursor: "pointer",
                      }}
                    >
                      <DeleteOutlineOutlinedIcon
                        style={{
                          position: "relative",
                          top: "6px",
                          right: "10px",
                        }}
                      />
                      Delete
                    </div>
                  </div>
                )}
              </div>
              <div
                style={{
                  background: "#d8dee9",
                  padding: "10px 10px 10px 10px",
                  minHeight: isMobile ? "250px" : "100vh",
                }}
                key={status}
              >
                {renderListSection(status)}
              </div>
            </Grid>
          );
        })}
      </Grid>
      <AddTask
        open={showAddItem}
        onCancel={handleCancel}
        onConfirm={handleConfirm}
        statusOptions={StatusOption}
        assigneeOption={AssigneeOptions}
        priorityOption={PriorityOptions}
      />
      <Drawer
        anchor="right"
        open={openDrawer}
        onClose={(event, reason) => {
          setOpenDrawer(false);
        }}
        sx={{
          "& .MuiDrawer-paperAnchorRight": {
            top: "0px",
          },
        }}
      >
        <UpdateTask
          data={drawerData}
          onEdit={handleSubmitUpdateTask}
          onCancel={() => toggleDrawer(null)}
          onDelete={() => handleDeleteTask(drawerData.id)}
          statusOptions={StatusOption}
          assigneeOption={AssigneeOptions}
          priorityOption={PriorityOptions}
        />
      </Drawer>
    </>
  );
};
