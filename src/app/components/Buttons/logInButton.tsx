"use client";

import { Button } from "@mui/material";
import Link from "next/link";

export default function LogInButton() {
  return (
    <Button
      aria-label="login-button"
      variant="contained"
      color="primary"
      sx={{
        width: "8rem",
      }}
      component={Link}
      href="/auth/login"
    >
      Log in
    </Button>
  );
}
