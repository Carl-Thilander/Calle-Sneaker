"use client";

import { DESIGN_AREAS } from "@/app/features/designer/areas";
import { DesignAreaId, SneakerConfig } from "@/app/features/designer/types";
import { Box } from "@mui/material";
import { keyframes } from "@mui/system";
import { useEffect, useState } from "react";

const glowPulse = keyframes`
  0% {
    opacity: 0;
    transform: scale(1.0);
    filter: blur(20px);
  }
  40% {
    opacity: 0.8;
    transform: scale(1.0);
    filter: blur(6px);
  }
  100% {
    opacity: 0;
    transform: scale(1.0);
    filter: blur(18px);
  }
`;

type Props = {
  config: SneakerConfig;
  activeAreaId: DesignAreaId;
  size?: "small" | "large";
};

export default function SneakerPreview({
  config,
  activeAreaId,
  size = "large",
}: Props) {
  const dimensions =
    size === "small"
      ? { width: 200, height: 200 }
      : { width: { xs: 260, md: 560 }, height: { xs: 260, md: 560 } };
  const [highlightedAreaId, setHighlightedAreaId] = useState(activeAreaId);
  const [glowKey, setGlowKey] = useState(0);

  useEffect(() => {
    setHighlightedAreaId(activeAreaId);
    setGlowKey((prev) => prev + 1);
  }, [activeAreaId]);

  return (
    <Box
      sx={{
        position: "relative",
        ...dimensions,
        margin: 0,
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
          {area.id === highlightedAreaId && (
            <Box
              key={`${area.id}-${glowKey}`}
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
                mixBlendMode: "screen",
                filter: "blur(14px)",
                opacity: 0,
                pointerEvents: "none",
                animation: `${glowPulse} 900ms ease-out`,
              }}
            />
          )}
        </Box>
      ))}
    </Box>
  );
}
