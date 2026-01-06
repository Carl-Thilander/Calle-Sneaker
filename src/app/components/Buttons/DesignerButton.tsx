"use client";

import { Button } from "@mui/material";

type Props = {
  title: string;
};

export default function DesignerButton({ title }: Props) {
  return (
    <Button
      href="/designer"
      variant="contained"
      aria-label="go-to-designer"
      sx={{
        borderRadius: 3,
        px: 3,
        py: 1.4,
        color: "black",
      }}
    >
      {title}
    </Button>
  );
}
