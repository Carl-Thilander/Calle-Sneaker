// src/app/designer/SneakerPreview.tsx
"use client";

import { Box } from "@mui/material";
import { DESIGN_AREAS, SneakerConfig } from "./areas";

type Props = {
  config: SneakerConfig;
};

export default function SneakerPreview({ config }: Props) {
  return (
    <Box
      sx={{
        position: "relative",
        width: { xs: 260, md: 560 },
        height: { xs: 260, md: 560 },
        mx: "auto",
      }}
    >
      {DESIGN_AREAS.map((area) => (
        <Box key={area.id} sx={{ position: "absolute", inset: 0 }}>
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundColor: config[area.id],
              WebkitMaskImage: `url(${area.mask})`,
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskSize: "contain",
              WebkitMaskPosition: "center",
              maskImage: `url(${area.mask})`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
              transition: "background-color 0.25s ease",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundImage: `url(${area.shading})`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "contain",
              backgroundPosition: "center",
              mixBlendMode: "multiply",
              opacity: 1,
              pointerEvents: "none",
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
