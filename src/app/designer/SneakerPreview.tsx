"use client";

import { Box } from "@mui/material";
import { DESIGN_AREAS, SneakerConfig } from "./areas";

type props = {
  config: SneakerConfig;
};

export default function SneakerPreview({ config }: props) {
  return (
    <Box sx={{ position: "relative", width: 660, height: 660 }}>
      {DESIGN_AREAS.map((area) => (
        <Box key={area.id} sx={{ position: "absolute", inset: 0 }}>
          {/* Färg */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              backgroundColor: config[area.id],
              maskImage: `url(${area.mask})`,
              maskRepeat: "no-repeat",
              maskSize: "contain",
              maskPosition: "center",
            }}
          />

          {/* Shading */}
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
            }}
          />
        </Box>
      ))}
    </Box>
  );
}
