"use client";

import { loginSchema } from "@/lib/validation";
import { Box, Button, Container, TextField, Typography } from "@mui/material";
import { signIn } from "next-auth/react";
import React, { useState } from "react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    const parsedResult = loginSchema.safeParse({ email, password });
    if (!parsedResult.success) {
      setError(parsedResult.error.issues[0]?.message || "Invalid input data");
      return;
    }
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);

    if (result?.error) {
      setError("Incorrect email or password");
      return;
    }

    window.location.href = "/profile";
  }
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
      }}
    >
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
      >
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          label="Password"
          type="password"
          fullWidth
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && (
          <Typography color="error" variant="body2">
            {error}
          </Typography>
        )}
        <Button
          aria-label="login-button"
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, borderRadius: 5 }}
        >
          {loading ? "Logging in..." : "Log in"}
        </Button>
      </Box>
    </Container>
  );
}
