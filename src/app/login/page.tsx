"use client";
import Container from "@mui/material/Container";
import LoginForm from "../components/Login/Login";

export default function Login() {
  return (
    <Container component="div" maxWidth="md" style={{ padding: "0", margin: "0 auto", display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh",overflowX:"hidden"}}>
      <LoginForm />
    </Container>
  );
}
