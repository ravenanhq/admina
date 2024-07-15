import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  IconButton,
  TextField,
  Avatar,
  Alert,
} from "@mui/material";
import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css"; // Optional: Snow theme CSS
import DOMPurify from "dompurify";

import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";
import CloseIcon from "@mui/icons-material/Close";

const CommentSection = () => {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState<
    { content: string; dateTime: string; author: string }[]
  >([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [editingContent, setEditingContent] = useState<string>("");
  const [error, setError] = useState<string>("");

  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<Quill | null>(null);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: [
            [
              { header: "1" },
              { header: "2" },
              { header: [3, 4, 5, 6, false] },
              { paragraph: "p" },
              { font: [] },
            ],
            ["bold", "italic", "underline", "strike", "blockquote"],
            [{ list: "ordered" }, { list: "bullet" }],
            ["link", "image", "video"],
            ["clean"],
          ],
        },
      });

      quillRef.current.on("text-change", () => {
        setContent(quillRef.current?.root.innerHTML || "");
      });
    }

    return () => {
      if (quillRef.current) {
        quillRef.current.off("text-change");
        quillRef.current = null;
      }
    };
  }, []);

  const handleSaveClick = () => {
    if (!content.trim()) {
      setError("Comment content cannot be empty.");
      return;
    }

    const now = new Date();
    const formattedDateTime = `${now.toLocaleDateString()} ${now.toLocaleTimeString()}`;

    if (editingIndex !== null) {
      const updatedComments = [...comments];
      updatedComments[editingIndex] = {
        content: editingContent,
        dateTime: formattedDateTime,
        author: "John", // Replace with actual author name or identifier
      };
      setComments(updatedComments);
      setEditingIndex(null);
      setEditingContent("");
    } else {
      setComments([
        { content, dateTime: formattedDateTime, author: "John" },
        ...comments,
      ]);
      setContent("");
      quillRef.current?.setContents([]); // Clear Quill editor content
    }

    setError(""); // Clear error message after successful save
  };

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
    setEditingContent(
      DOMPurify.sanitize(comments[index].content, { ALLOWED_TAGS: [] })
    ); // Strip HTML tags
  };

  const handleDeleteClick = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setEditingContent("");
    setError(""); // Clear error message on cancel
  };

  return (
    <Box sx={{ minHeight: "200px" }} className="richTextEditor">
      <Typography variant="h5" style={{ padding: "10px 0" }}>
        Comments
      </Typography>
      {editingIndex === null && (
        <>
          <div
            ref={editorRef}
            style={{
              minHeight: "100px",
              border: "1px solid #ccc",
              padding: "8px",
            }}
          />
          {error && (
            <Alert severity="error" sx={{ marginBottom: "16px" }}>
              {error}
            </Alert>
          )}

          <Box sx={{ marginTop: "16px", textAlign: "right" }}>
            <Button
              variant="contained"
              color="primary"
              onClick={handleSaveClick}
            >
              Save
            </Button>
          </Box>
        </>
      )}
      {comments.map((comment, index) => (
        <Paper
          key={index}
          sx={{
            position: "relative",
            boxShadow: "none",
          }}
        >
          {editingIndex === index ? (
            <>
              <TextField
                value={editingContent}
                onChange={(e) => setEditingContent(e.target.value)}
                multiline
                fullWidth
                rows={4}
                variant="outlined"
              />
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  marginTop: "8px",
                }}
              >
                <IconButton onClick={handleSaveClick}>
                  <SaveIcon />
                </IconButton>
                <IconButton onClick={handleCancelEdit}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </>
          ) : (
            <>
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
                    src="/static/images/avatar/1.jpg" // Replace with actual avatar image source
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

              <Typography
                variant="body1"
                dangerouslySetInnerHTML={{ __html: comment.content }}
              />
            </>
          )}
        </Paper>
      ))}
    </Box>
  );
};

export default CommentSection;
