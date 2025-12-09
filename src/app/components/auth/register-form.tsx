"use client";
import { registerUser } from "@/app/auth/register/actions";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import React, { useState } from "react";
import AuthCard from "./AuthCard";

export default function RegisterForm() {
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    const result = await registerUser(formData);

    if ("error" in result) {
      setMessage(result.error);
      return;
    }
    await signIn("credentials", {
      email: result.email,
      password: result.password,
      redirect: true,
      callbackUrl: "/profile",
    });
  }
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
      }}
    >
      <AuthCard title="Create your account below" subtitle="">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
        >
          <TextField label="Name" type="text" name="name" fullWidth required />
          <TextField
            label="Email"
            type="email"
            name="email"
            fullWidth
            required
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            fullWidth
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, borderRadius: 5 }}
          >
            Create Acount
          </Button>

          {message && <Typography color="primary">{message}</Typography>}
        </Box>
      </AuthCard>
    </Container>
  );
}
