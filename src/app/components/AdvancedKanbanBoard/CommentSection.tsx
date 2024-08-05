import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  IconButton,
  Avatar,
  Alert,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DOMPurify from "dompurify";
import parse from "html-react-parser";
import "react-quill/dist/quill.snow.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CommentSection = () => {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState<
    { content: string; dateTime: string; author: string }[]
  >([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editedContent, setEditedContent] = useState("");
  const [error, setError] = useState<string>("");

  const handleSaveClick = () => {
    const sanitizedContent = DOMPurify.sanitize(content || "");
    const contentWithoutTags = sanitizedContent
      .replace(/<[^>]*>?/gm, "")
      .trim();
    const containsImage = /<img[^>]*src=["'][^"']*["'][^>]*>/gm.test(
      sanitizedContent
    );

    if (!contentWithoutTags.trim() && !containsImage) {
      setError("Comment cannot be empty.");
      return;
    }

    const now = new Date();
    const formattedDateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

    setComments([
      {
        content: sanitizedContent,
        dateTime: formattedDateTime,
        author: "John",
      },
      ...comments,
    ]);

    setContent("");
    setError("");
  };

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
    const commentToEdit = comments[index];
    setEditedContent(commentToEdit.content);
  };

  const handleDeleteClick = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditedContent("");
    setError("");
  };

  const handleUpdateClick = () => {
    const sanitizedContent = DOMPurify.sanitize(editedContent || "");
    const contentWithoutTags = sanitizedContent
      .replace(/<[^>]*>?/gm, "")
      .trim();
    const containsImage = /<img[^>]*src=["'][^"']*["'][^>]*>/gm.test(
      sanitizedContent
    );

    if (!contentWithoutTags.trim() && !containsImage) {
      setError("Comment cannot be empty.");
      return;
    }

    const now = new Date();
    const formattedDateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

    const updatedComments = [...comments];
    updatedComments[editingIndex!] = {
      content: sanitizedContent,
      dateTime: formattedDateTime,
      author: "John",
    };
    setComments(updatedComments);
    setEditingIndex(null);
    setEditedContent("");
    setError("");
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
    <Box sx={{ minHeight: "200px" }} className="richTextEditor">
      <Typography variant="h5" style={{ padding: "10px 0" }}>
        Comments
      </Typography>
      <ReactQuill
        value={content}
        onChange={setContent}
        modules={modules}
        formats={formats}
      />
      {error && (
        <Alert severity="error" sx={{ marginBottom: "16px" }}>
          {error}
        </Alert>
      )}
      <Box sx={{ marginTop: "16px", textAlign: "right" }}>
        <Button
          variant="text"
          onClick={handleCancelEdit}
          sx={{ color: "#1f7ad3" }}
        >
          Cancel
        </Button>
        <Button
          variant="contained"
          color="primary"
          onClick={handleSaveClick}
          sx={{ ml: 2 }}
        >
          Save
        </Button>
      </Box>
      {comments.map((comment, index) => (
        <Paper
          key={index}
          sx={{
            position: "relative",
            boxShadow: "none",
            marginBottom: "8px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Avatar
                alt="Avatar"
                src="/static/images/avatar/1.jpg"
                sx={{ width: 32, height: 32, marginRight: 1 }}
              />
              <Typography variant="caption" color="textSecondary">
                <span style={{ color: "#000", fontWeight: "bold" }}>
                  {comment.author}
                </span>{" "}
                {comment.dateTime}
              </Typography>
            </Box>
            <Box>
              <IconButton onClick={() => handleEditClick(index)}>
                <EditIcon />
              </IconButton>
              <IconButton onClick={() => handleDeleteClick(index)}>
                <DeleteIcon />
              </IconButton>
            </Box>
          </Box>
          {editingIndex === index ? (
            <Box>
              <ReactQuill
                value={editedContent}
                onChange={setEditedContent}
                modules={modules}
                formats={formats}
              />
              {error && (
                <Alert severity="error" sx={{ marginBottom: "16px" }}>
                  {error}
                </Alert>
              )}
              <Box sx={{ marginTop: "8px", textAlign: "right" }}>
                <Button
                  variant="text"
                  onClick={handleCancelEdit}
                  sx={{ color: "#1f7ad3" }}
                >
                  Cancel
                </Button>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleUpdateClick}
                  sx={{ ml: 2 }}
                >
                  Update
                </Button>
              </Box>
            </Box>
          ) : (
            <Typography variant="body1" className="commentBox">
              {parse(DOMPurify.sanitize(comment.content))}
            </Typography>
          )}
        </Paper>
      ))}
    </Box>
  );
};

export default CommentSection;
