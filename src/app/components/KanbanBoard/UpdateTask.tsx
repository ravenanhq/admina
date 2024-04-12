import React, { useEffect, useState } from "react";
import {
  Box,
  CardActions,
  Divider,
  FormControl,
  TextField,
  Typography,
  MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ButtonComponent from "../BaseComponent/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

interface RowData {
  id?: string;
  taskId?: string;
  title?: string;
  status?: string;
  assignee?: string;
  priority?: string;
}

interface EditModalProps {
  onCancel: () => void;
  data: RowData | null;
  onEdit: (editedData: RowData) => void;
  onDelete: () => void;
  statusOptions: string[];
  assigneeOption: string[];
  priorityOption?: string[];
}

const UpdateTask: React.FC<EditModalProps> = ({
  data,
  onEdit,
  onCancel,
  onDelete,
  statusOptions,
  assigneeOption,
  priorityOption,
}) => {
  const [errors, setErrors] = useState({
    title: "",
    status: "",
    assignee: "",
    priority: "",
  });
  const [editedData, setEditedData] = useState<RowData>({});

  useEffect(() => {
    setEditedData(data || {});
  }, [data]);

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...errors };

    if (!editedData.title || editedData.title.trim() === "") {
      newErrors.title = "Title is required";
      isValid = false;
    } else {
      newErrors.title = "";
    }

    if (!editedData.status || editedData.status.trim() === "") {
      newErrors.status = "Status is required";
      isValid = false;
    } else {
      newErrors.status = "";
    }

    if (!editedData.assignee || editedData.assignee.trim() === "") {
      newErrors.assignee = "Assignee is required";
      isValid = false;
    } else {
      newErrors.assignee = "";
    }

    if (!editedData.priority || editedData.priority.trim() === "") {
      newErrors.priority = "Priority is required";
      isValid = false;
    } else {
      newErrors.priority = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSaveChanges = () => {
    if (validateForm()) {
      onEdit(editedData);
    }
  };

  const handleDelete = () => {
    onDelete();
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h5"
          sx={{
            margin: "20px 0 0 10px",
            letterSpacing: "2px",
            fontSize: "20px",
            color: "#555",
          }}
        >
          Edit Task
        </Typography>
        <CloseIcon
          onClick={onCancel}
          style={{
            position: "relative",
            top: "21px",
            left: "-12px",
            cursor: "pointer",
            color: "#555",
          }}
        />
      </div>

      <Divider sx={{ margin: "10px 0" }} />
      <Box
        sx={{
          width: isMobile ? "100%" : 350,
          padding: "10px 20px",
          color: "#555",
        }}
        role="presentation"
      >
        <form>
          <div style={{ display: "flex", marginBottom:"10px"}}>
            <label htmlFor="title" style={{fontWeight:"bold"}} >
              TaskId : 
            </label>
            <Typography style={{marginLeft:"15px"}}>{data?.taskId}</Typography>
          </div>
          <FormControl
            style={{
              display: "flex",
              marginTop: "0",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor="title" style={{ marginTop: "5px" }}>
              Title
            </label>
            <TextField
              name="title"
              value={editedData.title || ""}
              onChange={handleChange}
              fullWidth
              margin="normal"
              error={!!errors.title}
              helperText={errors.title}
              inputProps={{
                style: { padding: "13px", fontSize: "16px" },
              }}
              style={{ marginTop: "10px" }}
            />
          </FormControl>
          <FormControl
            style={{
              display: "flex",
              marginTop: "10px",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor="status" style={{ marginTop: "5px" }}>
              Status
            </label>
            <TextField
              select
              name="status"
              value={editedData.status || ""}
              onChange={handleStatusChange}
              fullWidth
              margin="normal"
              error={!!errors.status}
              helperText={errors.status}
              inputProps={{
                style: { color: "#555", padding: "10px", fontSize: "14px" },
              }}
              style={{ marginTop: "0" }}
            >
              {statusOptions.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl
            style={{
              display: "flex",
              marginTop: "10px",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor="Priority" style={{ marginTop: "5px" }}>
              Priority
            </label>
            <TextField
              select
              name="priority"
              value={editedData.priority || ""}
              onChange={handleStatusChange}
              fullWidth
              margin="normal"
              error={!!errors.priority}
              helperText={errors.priority}
              inputProps={{
                style: { color: "#555", padding: "10px", fontSize: "14px" },
              }}
              style={{ marginTop: "0" }}
            >
              {priorityOption.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <FormControl
            style={{
              display: "flex",
              marginTop: "10px",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor="Assignee" style={{ marginTop: "5px" }}>
              Assignee
            </label>
            <TextField
              select
              name="assignee"
              value={editedData.assignee || ""}
              onChange={handleStatusChange}
              fullWidth
              margin="normal"
              error={!!errors.assignee}
              helperText={errors.assignee}
              inputProps={{
                style: { color: "#555", padding: "10px", fontSize: "14px" },
              }}
              style={{ marginTop: "0" }}
            >
              {assigneeOption.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </TextField>
          </FormControl>
          <CardActions>
            <ButtonComponent
              variant="contained"
              type="button"
              onClick={handleSaveChanges}
              style={{
                background: "#1976d2",
                padding: "5px 15px",
              }}
              name="Update"
            ></ButtonComponent>
            <ButtonComponent
              variant="contained"
              type="button"
              onClick={handleDelete}
              style={{
                background: "#eaeaea",
                padding: "5px 15px",
                color: "#555",
              }}
              name="delete"
            ></ButtonComponent>
          </CardActions>
        </form>
      </Box>
    </div>
  );
};

export default UpdateTask;
