import React, { useEffect } from "react";
import {
  Grid,
  List,
  ListItem,
  ListItemText,
  IconButton,
  Typography,
  TextField,
  Button,
  ListItemIcon,
  Box,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import EditIcon from "@mui/icons-material/Edit";
import CommentOutlinedIcon from "@mui/icons-material/CommentOutlined";

const LeftSideComponent = ({
  selectedDate,
  handleRemoveDate,
  selectedFiles,
  handleRemoveFile,
  resetComment,
}) => {
  const [comment, setComment] = React.useState("");
  const [savedComments, setSavedComments] = React.useState([]);
  const [editIndex, setEditIndex] = React.useState(null);
  const [error, setError] = React.useState("");

  useEffect(() => {
    if (resetComment) {
      setComment("");
    }
    localStorage.removeItem("comments");
    setSavedComments([]);
  }, [resetComment]);

  const handleComment = () => {
    if (comment.trim() === "") {
      setError("Comment cannot be empty");
      return;
    }

    let newComments;
    if (editIndex !== null) {
      newComments = [...savedComments];
      newComments[editIndex] = comment;
      setEditIndex(null);
    } else {
      newComments = [...savedComments, comment];
    }
    setSavedComments(newComments);
    setComment("");
    setError("");
    localStorage.setItem("comments", JSON.stringify(newComments));
  };

  const handleEditComment = (index) => {
    setComment(savedComments[index]);
    setEditIndex(index);
  };

  const handleDeleteComment = (index) => {
    const newComments = savedComments.filter((_, i) => i !== index);
    setSavedComments(newComments);
    localStorage.setItem("comments", JSON.stringify(newComments));
  };

  return (
    <Grid item md={8}>
      <Typography
        id="modal-modal-description"
        sx={{
          fontSize: "14px",
          fontWeight: "bold",
          padding: "20px 0 0px 0",
        }}
      >
        Upload Details
      </Typography>
      {selectedDate && (
        <>
          <Typography variant="h6">Date:</Typography>
          <div style={{ display: "flex" }}>
            <Typography variant="body1" sx={{ marginTop: "5px" }}>
              {selectedDate.format("MMMM DD, YYYY HH:mm")}
            </Typography>
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={handleRemoveDate}
              sx={{ color: "#000", marginTop: "-5px" }}
            >
              <CloseIcon />
            </IconButton>
          </div>
        </>
      )}
      <div style={{ flexDirection: "row" }}>
        {selectedFiles.map((image, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center" }}>
            <img
              src={image}
              width={100}
              height={100}
              alt={`Selected Image ${index}`}
            />
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => handleRemoveFile(index)}
              sx={{ color: "#000", marginLeft: "10px" }}
            >
              <CloseIcon />
            </IconButton>
          </div>
        ))}
      </div>
      {savedComments.length > 0 && (
        <List sx={{ marginTop: "10px", marginBottom: "10px" }}>
          {savedComments.map((savedComment, index) => (
            <ListItem
              key={index}
              sx={{
                ":hover .comment-actions": { visibility: "visible" },
                paddingLeft: "0",
              }}
            >
              <ListItemIcon>
                <CommentOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary={savedComment} />
              <Box className="comment-actions" sx={{ visibility: "hidden" }}>
                <IconButton
                  edge="end"
                  aria-label="edit"
                  onClick={() => handleEditComment(index)}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => handleDeleteComment(index)}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
            </ListItem>
          ))}
        </List>
      )}
      <Typography
        sx={{
          fontSize: "14px",
          fontWeight: "normal",
          padding: "10px 0 0 0",
        }}
      >
        Comments <span style={{ color: "#d32f2f" }}> *</span>
      </Typography>
      <TextField
        fullWidth
        id="message"
        label="Your comments"
        name="message"
        multiline
        rows={4}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        error={Boolean(error)}
        helperText={error}
        style={{ marginTop: "6px" }}
      />
      <Button
        variant="contained"
        color="primary"
        style={{ marginTop: "10px" }}
        onClick={handleComment}
      >
        {editIndex !== null ? "Update" : "Save"}
      </Button>
    </Grid>
  );
};

export default LeftSideComponent;
