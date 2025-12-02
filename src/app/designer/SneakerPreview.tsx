"use client";

import { Box } from "@mui/material";
import { DESIGN_AREAS, DesignAreaId, SneakerConfig } from "./areas";

type Props = {
  config: SneakerConfig;
  activeAreaId: DesignAreaId;
};

export default function SneakerPreview({ config, activeAreaId }: Props) {
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
              transition: "background-color 0.45s ease",
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
          {/* {area.id === activeAreaId && (
            <Box
              sx={{
                position: "absolute",
                inset: 0,
                backgroundColor: "rgba(196, 25, 25, 1)",
                maskImage: `url(${area.mask})`,
                maskRepeat: "no-repeat",
                maskSize: "contain",
                maskPosition: "center",
                mixBlendMode: "screen",
                transition: "opacity 1s ease",
                opacity: 0.8,
                pointerEvents: "none",
              }}
            />
          )} */}
        </Box>
      ))}
    </Box>
  );
}
