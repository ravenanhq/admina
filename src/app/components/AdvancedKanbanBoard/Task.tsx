import React, { useEffect, useState } from "react";
import { Draggable } from "@hello-pangea/dnd";
import {
  Card,
  CardContent,
  Avatar,
  IconButton,
  Chip,
  CardHeader,
  Menu,
  MenuItem,
  ListItemIcon,
  AvatarGroup,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { blue } from "@mui/material/colors";
import assigneesData from "./users.json";

interface TaskProps {
  task: {
    id: string;
    content: string;
    assignees: string[];
    title: string;
    status: string;
    priority: string;
  };
  index: number;
  onDelete: (taskId: string) => void;
  onEdit: (taskId: string) => void;
}

interface Assignee {
  id: string;
  name: string;
  avatar: string;
}

const Task: React.FC<TaskProps> = ({ task, index, onDelete, onEdit }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [assignees, setAssignees] = useState<
    { id: string; name: string; avatar: string }[]
  >([]);

  useEffect(() => {
    setAssignees(assigneesData);
  }, []);

  const handleMenuClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleEdit = () => {
    onEdit(task.id);
    handleMenuClose();
  };

  const handleDelete = () => {
    onDelete(task.id);
    handleMenuClose();
  };

  const getAssigneeInfo = (assigneeId: string): Assignee | undefined => {
    return assignees.find((a) => a.id === assigneeId);
  };

  const getAssigneeInitials = (name: string) => {
    const nameParts = name.split(" ");
    const initials = nameParts.map((part) => part[0]).join("");
    return initials;
  };

  return (
    <>
      <Draggable draggableId={task.id} index={index}>
        {(provided) => (
          <Card
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            elevation={3}
            style={{
              margin: "0 0 8px 0",
              backgroundColor: "#fff",
              borderRadius: "4px",
              ...provided.draggableProps.style,
            }}
          >
            <CardHeader
              style={{ padding: "12px", cursor: "pointer" }}
              action={
                <>
                  <IconButton aria-label="settings" onClick={handleMenuClick}>
                    <MoreVertIcon />
                  </IconButton>
                  <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    PaperProps={{
                      elevation: 0,
                      sx: {
                        overflow: "visible",
                        filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                        mt: 1.5,
                        "& .MuiAvatar-root": {
                          width: 32,
                          height: 32,
                          mr: 1,
                        },
                        "&::before": {
                          content: '""',
                          display: "block",
                          position: "absolute",
                          top: 0,
                          right: 14,
                          width: 10,
                          height: 10,
                          bgcolor: "background.paper",
                          transform: "translateY(-50%) rotate(45deg)",
                          zIndex: 0,
                        },
                      },
                    }}
                    transformOrigin={{ horizontal: "right", vertical: "top" }}
                    anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
                  >
                    <MenuItem onClick={handleEdit}>
                      <ListItemIcon>
                        <EditIcon fontSize="small" />
                      </ListItemIcon>
                      Edit
                    </MenuItem>
                    <MenuItem onClick={handleDelete}>
                      <ListItemIcon>
                        <DeleteIcon fontSize="small" />
                      </ListItemIcon>
                      Delete
                    </MenuItem>
                  </Menu>
                </>
              }
              title={
                <Typography
                  variant="body1"
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      color: blue[400],
                    },
                  }}
                  onClick={handleEdit}
                >
                  {task.title}
                </Typography>
              }
              titleTypographyProps={{ variant: "body1" }}
            />
            <CardContent
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px",
              }}
            >
              <Chip label={`#${task.id}`} variant="outlined" />
              <div
                style={{ display: "flex", gap: "4px", alignItems: "center" }}
              >
                {task.assignees.length > 0 ? (
                  <AvatarGroup>
                    {task.assignees.map((assigneeId, index) => {
                      const assignee = getAssigneeInfo(assigneeId);
                      if (assignee) {
                        return assignee.avatar ? (
                          <Avatar
                            key={index}
                            alt={assignee.name}
                            src={assignee.avatar}
                            sx={{ width: 32, height: 32 }}
                          />
                        ) : (
                          <Avatar
                            key={index}
                            alt={assignee.name}
                            sx={{
                              bgcolor: blue[500],
                              width: 32,
                              height: 32,
                              fontSize: "16px",
                            }}
                          >
                            {getAssigneeInitials(assignee.name)}
                          </Avatar>
                        );
                      } else {
                        return (
                          <Avatar
                            key={index}
                            sx={{ bgcolor: blue[500], width: 32, height: 32 }}
                          >
                            ?
                          </Avatar>
                        );
                      }
                    })}
                  </AvatarGroup>
                ) : (
                  <Chip label="Unassigned" variant="outlined" />
                )}
              </div>
            </CardContent>
          </Card>
        )}
      </Draggable>
    </>
  );
};

export default Task;
