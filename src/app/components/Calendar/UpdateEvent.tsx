import React, { useEffect, useState } from "react";
import {
  Box,
  CardActions,
  Divider,
  FormControl,
  TextField,
  Typography,
  MenuItem,
  Select,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ButtonComponent from "../BaseComponent/Button";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { labelOption } from "./EventData";

interface RowData {
  id?: string;
  title?: string;
  label?: string;
  start?: Date;
  end?: Date;
}

interface EditModalProps {
  onClose: () => void;
  data: RowData | null;
  onEdit: (editedData: RowData) => void;
  onDelete: () => void;
}

const UpdateEvent: React.FC<EditModalProps> = ({
  data,
  onClose,
  onEdit,
  onDelete,
}) => {
  const [errors, setErrors] = useState({
    title: "",
    label: "",
  });
  const [editedData, setEditedData] = useState<RowData>({});

  useEffect(() => {
    if (data) {
      setEditedData({
        ...data,
        start: data.start ? new Date(data.start) : new Date(),
        end: data.end ? new Date(data.end) : new Date(),
      });
    } else {
      setEditedData({
        start: new Date(),
        end: new Date(),
      });
    }
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

    if (!editedData.label || editedData.label.trim() === "") {
      newErrors.label = "Label is required";
      isValid = false;
    } else {
      newErrors.label = "";
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleStatusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setEditedData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChangeStartDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const startDate = value ? new Date(value) : null;
    setEditedData((prevData) => ({
      ...prevData,
      start: startDate,
    }));
  };

  const handleChangeEndDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const endDate = value ? new Date(value) : null;
    setEditedData((prevData) => ({
      ...prevData,
      end: endDate,
    }));
  };

  const handleSaveChanges = () => {
    if (validateForm()) {
      onEdit(editedData);
      console.log("edit", editedData);
    }
  };

  const handleDelete = () => {
    onDelete();
  };

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const formatDate = (date: Date): string => {
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

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
          Edit Event
        </Typography>
        <CloseIcon
          onClick={onClose}
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
          <div style={{ display: "flex", marginBottom: "10px" }}></div>
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
              onChange={(e) =>
                setEditedData((prevData) => ({
                  ...prevData,
                  title: e.target.value,
                }))
              }
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
          <FormControl fullWidth error={!!errors.label}>
            <label htmlFor="status" style={{ marginBottom: "10px" }}>
              Label
            </label>
            <Select
              value={editedData.label || ""}
              name="label"
              onChange={handleStatusChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Select Label</em>
              </MenuItem>
              {labelOption.map((label) => (
                <MenuItem key={label} value={label}>
                  {label}
                </MenuItem>
              ))}
            </Select>
            {errors.label && (
              <span
                style={{
                  color: "#d32f2f",
                  fontSize: "12px",
                  margin: "4px 13px",
                }}
              >
                {errors.label}
              </span>
            )}
          </FormControl>
          <FormControl
            style={{
              display: "flex",
              marginTop: "0",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor="start" style={{ marginTop: "5px" }}>
              Start Date
            </label>
            <TextField
              name="start"
              type="date"
              value={
                editedData.start instanceof Date
                  ? formatDate(editedData.start)
                  : ""
              }
              onChange={handleChangeStartDate}
              fullWidth
              margin="normal"
              inputProps={{
                style: { padding: "13px", fontSize: "16px" },
              }}
              style={{ marginTop: "10px" }}
            />
          </FormControl>
          <FormControl
            style={{
              display: "flex",
              marginTop: "0",
              justifyContent: "space-between",
            }}
          >
            <label htmlFor="end" style={{ marginTop: "5px" }}>
              End Date
            </label>
            <TextField
              name="end"
              type="date"
              value={
                editedData.end instanceof Date ? formatDate(editedData.end) : ""
              }
              onChange={handleChangeEndDate}
              fullWidth
              margin="normal"
              inputProps={{
                style: { padding: "13px", fontSize: "16px" },
              }}
              style={{ marginTop: "10px" }}
            />
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

export default UpdateEvent;
