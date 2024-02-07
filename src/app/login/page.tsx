"use client";
import Container from "@mui/material/Container";
import StandardSigninForm from "../components/Signin/StandardSigninForm/StandardSigninForm";

export default function Login() {
  return (
    <Container component="div" maxWidth="xs">
      <StandardSigninForm />
    </Container>
  );
}
