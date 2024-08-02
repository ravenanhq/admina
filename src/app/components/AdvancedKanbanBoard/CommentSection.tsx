import React, { useState, useRef, useEffect } from "react";
import {
  Box,
  Button,
  Typography,
  Paper,
  IconButton,
  Avatar,
  Alert,
} from "@mui/material";
import Quill from "quill";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import DOMPurify from "dompurify";
import parse from "html-react-parser";

const CommentSection = () => {
  const [content, setContent] = useState("");
  const [comments, setComments] = useState<
    { content: string; dateTime: string; author: string }[]
  >([]);
  const [editingIndex, setEditingIndex] = useState<number | null>(null);
  const [error, setError] = useState<string>("");

  const editorRef = useRef<HTMLDivElement | null>(null);
  const quillRef = useRef<Quill | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (editorRef.current && !quillRef.current) {
      const icons = Quill.import("ui/icons");
      icons["attachFile"] =
        '<svg viewBox="0 0 18 18"><path d="M10.5 4.5V11h-3V4.5H5l4-4 4 4h-2.5zM3 16v-3h12v3H3z" /></svg>';

      quillRef.current = new Quill(editorRef.current, {
        theme: "snow",
        modules: {
          toolbar: {
            container: [
              [
                { header: "1" },
                { header: "2" },
                { header: [3, 4, 5, 6, false] },
                { paragraph: "p" },
                { font: [] },
              ],
              ["bold", "italic", "underline", "strike", "blockquote"],
              [{ color: [] }, { background: [] }],
              [{ script: "sub" }, { script: "super" }],
              [{ list: "ordered" }, { list: "bullet" }],
              ["link", "video"],
              ["clean"],
              ["attachFile"],
            ],
            handlers: {
              attachFile: () => {
                fileInputRef.current?.click();
              },
            },
          },
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

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = async () => {
        const url = reader.result as string;
        const fileName = file.name;

        const range = quillRef.current?.getSelection(true);
        if (range) {
          quillRef.current?.clipboard.dangerouslyPasteHTML(
            range.index,
            `<img src="${url}" alt="${fileName}" style="max-width: 100%;" />`
          );
        }
      };
      reader.readAsDataURL(file);
    } else {
      setError("Only image files are allowed.");
    }
  };

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
        content,
        dateTime: formattedDateTime,
        author: "John",
      };
      setComments(updatedComments);
      setEditingIndex(null);
    } else {
      setComments([
        { content, dateTime: formattedDateTime, author: "John" },
        ...comments,
      ]);
    }

    setContent("");
    quillRef.current?.setContents([]);
    setError("");
  };

  const handleEditClick = (index: number) => {
    setEditingIndex(index);
    const commentToEdit = comments[index];
    quillRef.current?.clipboard.dangerouslyPasteHTML(commentToEdit.content);
    setContent(commentToEdit.content);
  };

  const handleDeleteClick = (index: number) => {
    const updatedComments = comments.filter((_, i) => i !== index);
    setComments(updatedComments);
  };

  const handleCancelEdit = () => {
    setEditingIndex(null);
    setContent("");
    quillRef.current?.setContents([]);
    setError("");
  };

  return (
    <Box sx={{ minHeight: "200px" }} className="richTextEditor">
      <Typography variant="h5" style={{ padding: "10px 0" }}>
        Comments
      </Typography>
      <div
        ref={editorRef}
        style={{
          minHeight: "100px",
          border: "1px solid #ccc",
          padding: "8px",
        }}
      />
      <input
        type="file"
        ref={fileInputRef}
        accept="image/*"
        style={{ display: "none" }}
        onChange={handleFileChange}
      />
      {error && (
        <Alert severity="error" sx={{ marginBottom: "16px" }}>
          {error}
        </Alert>
      )}
      <Box sx={{ marginTop: "16px", textAlign: "right" }}>
        <Button variant="contained" color="primary" onClick={handleSaveClick}>
          {editingIndex === null ? "Save" : "Update"}
        </Button>
        {editingIndex !== null && (
          <Button
            variant="contained"
            color="secondary"
            onClick={handleCancelEdit}
            sx={{ ml: 2 }}
          >
            Cancel
          </Button>
        )}
      </Box>
      {comments.map((comment, index) => (
        <Paper
          key={index}
          sx={{
            position: "relative",
            boxShadow: "none",
            marginBottom: "8px",
            padding: "8px",
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
          <Typography variant="body1">
            {parse(DOMPurify.sanitize(comment.content))}
          </Typography>
        </Paper>
      ))}
    </Box>
  );
};

export default CommentSection;
