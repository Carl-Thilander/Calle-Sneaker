"use client";

import { registerUser } from "@/app/auth/register/actions";
import {
  Box,
  Button,
  Container,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import { signIn } from "next-auth/react";
import { useState } from "react";

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
      <Box
        component="form"
        noValidate
        onSubmit={handleSubmit}
        sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
      >
        <Tooltip
          title="Name must be at least 2 characters long"
          placement="bottom"
        >
          <span>
            <TextField label="Name" type="text" name="name" fullWidth />
          </span>
        </Tooltip>
        <Tooltip title="Email must be a valid email address" placement="bottom">
          <span>
            <TextField label="Email" type="email" name="email" fullWidth />
          </span>
        </Tooltip>
        <Tooltip
          title="Password must be at least 6 characters and include a capital letter"
          placement="bottom"
        >
          <span>
            <TextField
              label="Password"
              type="password"
              name="password"
              fullWidth
            />
          </span>
        </Tooltip>

        <Button
          aria-label="create-account-button"
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2, borderRadius: 5 }}
        >
          Create Acount
        </Button>

        {message && <Typography color="error">{message}</Typography>}
      </Box>
    </Container>
  );
}
