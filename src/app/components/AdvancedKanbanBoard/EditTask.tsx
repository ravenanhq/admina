import React, { useEffect, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import {
  Modal,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  SelectChangeEvent,
  FormHelperText,
  Box,
  Typography,
  IconButton,
  Grid,
  Alert,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";
import users from "./users.json";
import CommentSection from "./CommentSection";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import DOMPurify from "dompurify";

interface Task {
  id: string;
  content: string;
  assignees: string[];
  title: string;
  status: string;
  priority: string;
  sprint?: string;
}

interface Status {
  id: string;
  title: string;
}

interface EditTaskProps {
  open: boolean;
  task: Task | null;
  onClose: () => void;
  onSave: (updatedTask: Task) => void;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | { name?: string; value: string | number }
    >
  ) => void;
  statuses: Status[];
}

const EditTask: React.FC<EditTaskProps> = ({
  open,
  task,
  onClose,
  onSave,
  onChange,
  statuses,
}) => {
  const [localTask, setLocalTask] = useState<Task | null>(task);
  const [selectedAssignees, setSelectedAssignees] = useState<string[]>([]);
  const [errors, setErrors] = useState({
    title: "",
    content: "",
    status: "",
    priority: "",
    sprint: "",
  });
  const [isTitleEditMode, setIsTitleEditMode] = useState(false);
  const [isContentEditMode, setIsContentEditMode] = useState(false);

  useEffect(() => {
    if (task) {
      setLocalTask(task);
      setSelectedAssignees(task.assignees || []);
    }
  }, [task]);

  const handleInputChange = (
    event: React.ChangeEvent<
      HTMLInputElement | { name?: string; value: string | number }
    >
  ) => {
    const { name, value } = event.target;
    if (localTask) {
      setLocalTask({ ...localTask, [name!]: value as string });
      onChange(event);
    }
  };

  const handleAssigneeChange = (
    event: SelectChangeEvent<string | string[]>
  ) => {
    const selectedValues = event.target.value || [];
    setSelectedAssignees(
      Array.isArray(selectedValues) ? selectedValues : [selectedValues]
    );
    if (localTask) {
      setLocalTask({
        ...localTask,
        assignees: Array.isArray(selectedValues)
          ? selectedValues
          : [selectedValues],
      });
    }
  };

  const handleSelectChange = (event: SelectChangeEvent<string>) => {
    const { name, value } = event.target;
    if (localTask && name) {
      setLocalTask({ ...localTask, [name]: value });
    }
  };

  const handleContentChange = (value: string) => {
    if (localTask) {
      setLocalTask({ ...localTask, content: value });
      console.log("Content Changed: ", value);
    }
  };

  const validateFields = () => {
    const newErrors = {
      title: localTask?.title ? "" : "Title is required",
      status: localTask?.status ? "" : "Status is required",
      priority: localTask?.priority ? "" : "Priority is required",
      sprint: localTask?.sprint ? "" : "Sprint is required",
      content: localTask?.content ? "" : "Content is required",
    };

    const sanitizedContent = DOMPurify.sanitize(localTask?.content || "");
    const contentWithoutTags = sanitizedContent
      .replace(/<[^>]*>?/gm, "")
      .trim();

    if (!contentWithoutTags) {
      newErrors.content = "Content is required";
    }

    setErrors(newErrors);
    return !Object.values(newErrors).some((error) => error);
  };

  const handleSave = () => {
    if (localTask && validateFields()) {
      onSave(localTask);
    }
  };

  const handleClose = () => {
    setErrors({
      title: "",
      content: "",
      status: "",
      priority: "",
      sprint: "",
    });
    onClose();
  };

  const handleChipDelete = (value: string) => {
    const updatedAssignees = selectedAssignees.filter((item) => item !== value);
    setSelectedAssignees(updatedAssignees);
    if (localTask) {
      setLocalTask({ ...localTask, assignees: updatedAssignees });
    }
  };

  const toggleTitleEditMode = () => {
    setIsTitleEditMode(!isTitleEditMode);
  };

  const toggleContentEditMode = () => {
    setIsContentEditMode(!isContentEditMode);
  };

  const saveTitle = () => {
    if (localTask?.title.trim()) {
      console.log("test2");
      setIsTitleEditMode(false);
      setErrors({ ...errors, title: "" });
    } else {
      console.log("test1");
      setErrors({ ...errors, title: "Title is required" });
    }
  };

  const saveContent = () => {
    const sanitizedContent = DOMPurify.sanitize(localTask?.content || "");

    const contentWithoutTags = sanitizedContent
      .replace(/<[^>]*>?/gm, "")
      .trim();
    const containsImage = /<img[^>]*src=["'][^"']*["'][^>]*>/gm.test(
      sanitizedContent
    );

    if (contentWithoutTags || containsImage) {
      setIsContentEditMode(false);
      setErrors({ ...errors, content: "" });
    } else {
      setErrors({ ...errors, content: "Content cannot be empty." });
    }
  };

  const cancelEditTitle = () => {
    setIsTitleEditMode(false);
    if (task) {
      setLocalTask({ ...localTask, title: task.title });
    }
  };

  const cancelEditContent = () => {
    setIsContentEditMode(false);
    if (task) {
      setLocalTask({ ...localTask, content: task.content });
    }
  };

  const modules = {
    toolbar: {
      container: [
        [{ font: [] }],
        [{ size: ["small", false, "large", "huge"] }],
        ["bold", "italic", "underline"],
        [{ color: [] }, { background: [] }],
        [{ script: "sub" }, { script: "super" }],
        [{ header: "1" }, { header: "2" }, "blockquote"],
        [
          { list: "ordered" },
          { list: "bullet" },
          { indent: "-1" },
          { indent: "+1" },
        ],
        ["direction", { align: [] }],
        ["link", "image", "video"],
        ["clean"],
      ],
    },
  };
  const formats = [
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "color",
    "background",
    "script",
    "header",
    "blockquote",
    "code-block",
    "indent",
    "list",
    "direction",
    "align",
    "link",
    "image",
    "video",
    "formula",
  ];

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "1000px",
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 3,
          maxHeight: "90vh",
          overflowY: "auto",
        }}
      >
        <Grid container spacing={3}>
          {localTask && (
            <>
              <Grid item xs={12} sm={7}>
                {isTitleEditMode ? (
                  <Box display="flex" alignItems="center">
                    <TextField
                      name="title"
                      value={localTask.title}
                      fullWidth
                      margin="normal"
                      onChange={handleInputChange}
                      error={!!errors.title}
                      helperText={errors.title}
                    />
                    <IconButton onClick={saveTitle}>
                      <SaveIcon />
                    </IconButton>
                    <IconButton onClick={cancelEditTitle}>
                      <CloseIcon />
                    </IconButton>
                  </Box>
                ) : (
                  <Box
                    display="flex"
                    alignItems="center"
                    onClick={toggleTitleEditMode}
                  >
                    <Typography variant="h6">
                      <span style={{ color: "#003d7f", fontWeight: 700 }}>
                        #{localTask.id}{" "}
                      </span>{" "}
                      {localTask.title}
                    </Typography>
                  </Box>
                )}
                {isContentEditMode ? (
                  <Box>
                    <ReactQuill
                      value={localTask.content}
                      onChange={handleContentChange}
                      modules={modules}
                      formats={formats}
                    />
                    {errors.content && (
                      <Alert severity="error" sx={{ marginBottom: "16px" }}>
                        {errors.content}
                      </Alert>
                    )}
                    <Box
                      display="flex"
                      alignItems="center"
                      style={{ justifyContent: "right", marginTop: "13px" }}
                    >
                      <Button
                        variant="text"
                        color="secondary"
                        onClick={cancelEditContent}
                        sx={{ color: "#1f7ad3" }}
                      >
                        Cancel
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={saveContent}
                        sx={{ ml: 2 }}
                      >
                        Update
                      </Button>
                    </Box>
                  </Box>
                ) : (
                  <Box
                    display="flex"
                    alignItems="center"
                    onClick={toggleContentEditMode}
                    style={{ padding: "10px 0" }}
                    className="taskContent"
                  >
                    <Typography>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: DOMPurify.sanitize(localTask.content || ""),
                        }}
                      />
                    </Typography>
                  </Box>
                )}
                <CommentSection />
              </Grid>
              <Grid item xs={12} sm={5}>
                <Box sx={{ border: "1px solid #ccc", p: 2 }}>
                  <Typography variant="h5" style={{ paddingBottom: "10px" }}>
                    Details
                  </Typography>

                  <FormControl
                    variant="standard"
                    fullWidth
                    margin="normal"
                    error={!!errors.status}
                  >
                    <InputLabel>Status</InputLabel>
                    <Select
                      name="status"
                      value={localTask.status}
                      onChange={handleSelectChange}
                      fullWidth
                    >
                      {statuses.map((status) => (
                        <MenuItem key={status.id} value={status.id}>
                          {status.title}
                        </MenuItem>
                      ))}
                    </Select>
                    <FormHelperText>{errors.status}</FormHelperText>
                  </FormControl>

                  <FormControl
                    variant="standard"
                    fullWidth
                    margin="normal"
                    error={!!errors.priority}
                  >
                    <InputLabel>Priority</InputLabel>
                    <Select
                      name="priority"
                      value={localTask.priority}
                      onChange={handleSelectChange}
                      fullWidth
                    >
                      <MenuItem value="Low">Low</MenuItem>
                      <MenuItem value="Medium">Medium</MenuItem>
                      <MenuItem value="High">High</MenuItem>
                      <MenuItem value="Highest">Highest</MenuItem>
                    </Select>
                    <FormHelperText>{errors.priority}</FormHelperText>
                  </FormControl>

                  <FormControl variant="standard" fullWidth margin="normal">
                    <InputLabel>Assignees</InputLabel>
                    <Select
                      name="assignees"
                      multiple
                      value={selectedAssignees || []}
                      onChange={handleAssigneeChange}
                      renderValue={(selected) => (
                        <div style={{ display: "flex", flexWrap: "wrap" }}>
                          {(selected as string[]).map((value) => (
                            <Chip
                              key={value}
                              onDelete={(event) => {
                                event.preventDefault();
                                handleChipDelete(value);
                              }}
                              label={
                                users.find((user) => user.id === value)?.name ||
                                value
                              }
                              onMouseDown={(event) => {
                                event.stopPropagation();
                              }}
                            />
                          ))}
                        </div>
                      )}
                    >
                      {users.map((user) => (
                        <MenuItem key={user.id} value={user.id}>
                          {user.name}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                  <FormControl variant="standard" fullWidth margin="normal">
                    <TextField
                      label="Sprint"
                      name="sprint"
                      placeholder="sprint"
                      variant="standard"
                      value={localTask.sprint}
                      fullWidth
                      onChange={handleInputChange}
                      error={!!errors.sprint}
                      helperText={errors.sprint}
                      InputLabelProps={{ shrink: true }}
                    />
                  </FormControl>

                  <Grid
                    item
                    xs={12}
                    style={{ textAlign: "right", marginTop: "10px" }}
                  >
                    <Button onClick={handleClose} style={{ marginRight: 10 }}>
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleSave}
                    >
                      Save
                    </Button>
                  </Grid>
                </Box>
              </Grid>
            </>
          )}
        </Grid>
      </Box>
    </Modal>
  );
};

export default EditTask;
