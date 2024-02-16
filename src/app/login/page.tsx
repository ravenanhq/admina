"use client";
import Container from "@mui/material/Container";
import LoginForm from "../components/Login/Login";

export default function Login() {
  return (
    <Container component="div" maxWidth="sm">
      <LoginForm />
    </Container>
  );
}
