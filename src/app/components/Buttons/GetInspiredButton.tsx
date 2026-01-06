"use client";

import { Button } from "@mui/material";

export default function getInspiredButton() {
  return (
    <Button
      href="/inspired"
      variant="contained"
      aria-label="go-to-inspired"
      sx={{
        color: "black",
        bgcolor: "secondary.main",
        px: 2,
        "&:hover": {
          bgcolor: "secondary.light",
          color: "black",
          borderColor: "secondary.light",
        },
      }}
    >
      Get inspired
    </Button>
  );
}
