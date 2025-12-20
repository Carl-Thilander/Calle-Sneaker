"use client";

import { Box, useTheme } from "@mui/material";

export default function GlobalBackground() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <>
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
          background: isDark
            ? `
              radial-gradient(1200px 700px at 15% 20%, rgba(56,199,116,0.18), transparent 60%),
              radial-gradient(900px 600px at 80% 25%, rgba(255,58,58,0.14), transparent 55%),
              radial-gradient(900px 700px at 60% 90%, rgba(82,113,255,0.12), transparent 55%),
              linear-gradient(180deg, #0a0a0a, #0d0d0d)
            `
            : `
              radial-gradient(1200px 700px at 15% 20%, rgba(56,199,116,0.12), transparent 60%),
              radial-gradient(900px 600px at 80% 25%, rgba(255,58,58,0.10), transparent 55%),
              radial-gradient(900px 700px at 60% 90%, rgba(82,113,255,0.10), transparent 55%),
              linear-gradient(180deg, #fafafa, #ffffff)
            `,
        }}
      />

      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          opacity: isDark ? 0.18 : 0.08,
        }}
      />
    </>
  );
}
