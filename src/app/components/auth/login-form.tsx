"use client";

import { Box, Button, Container, Link, TextField, Typography } from "@mui/material";
import AuthCard from "./AuthCard";
import React, { useState } from "react";
import { signIn } from "next-auth/react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLElement>) {
    e.preventDefault();
    setError(null);
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

    window.location.href="/profile";
  }
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
      }}
    >
      <AuthCard title="Welcome Back!" subtitle="Please log in to your account">
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
        >
          <TextField label="Email" type="email" fullWidth required value={email} onChange={e => setEmail(e.target.value)} />
          <TextField label="Password" type="password" fullWidth required value={password} onChange={e => setPassword(e.target.value)} />


          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, borderRadius: 5 }}
          >
            {loading ? "Logging in..." : "Log in"}
            
          </Button>

          <Box textAlign="center" mt={2}>
            <Link href="/auth/register" style={{ textDecoration: "none" }}>
              Dont have an account yet? Create one here!
            </Link>
          </Box>
        </Box>
      </AuthCard>
    </Container>
  );
}
