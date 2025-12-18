"use client";

import { Box, useTheme } from "@mui/material";

export default function GlobalBackground() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";

  return (
    <>
      {/* Gradient layer */}
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

      {/* Grain */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          pointerEvents: "none",
          opacity: isDark ? 0.18 : 0.08,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E\")",
          mixBlendMode: "overlay",
        }}
      />
    </>
  );
}
