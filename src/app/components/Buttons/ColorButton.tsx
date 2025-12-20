"use client";

import { useColorMode } from "@/app/providers";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { Stack, Switch } from "@mui/material";

export default function ColorButton() {
  const { mode, toggleColorMode } = useColorMode();

  return (
    <Stack direction="row" spacing={1} alignItems="center">
      <LightModeIcon fontSize="small" />
      <Switch checked={mode === "dark"} onChange={toggleColorMode} />
      <DarkModeIcon fontSize="small" />
    </Stack>
  );
}
