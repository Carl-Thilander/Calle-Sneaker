"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Container,
  Divider,
  IconButton,
  Step,
  StepButton,
  Stepper,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";

import SneakerPreview from "./SneakerPreview";
import { DESIGN_AREAS, DesignAreaId, SneakerConfig } from "./areas";
import { COLOR_PALETTE as COLOR_PALETTES } from "./colors";

const AREAS: DesignAreaId[] = DESIGN_AREAS.map((a) => a.id);

const DEFAULT_CONFIG: SneakerConfig = {
  base: "#FFFFFF",
  sole: "#FFFFFF",
  logo: "#201f1fff",
  front: "#FFFFFF",
  front_toe: "#FFFFFF",
  logobg: "#FFFFFF",
  laces: "#FFFFFF",
  laceBase: "#FFFFFF",
  backpart: "#FFFFFF",
  heelPatch: "#FFFFFF",
};

export default function Designer() {
  const [config, setConfig] = useState<SneakerConfig>(DEFAULT_CONFIG);
  const [activeIndex, setActiveIndex] = useState(0);

  const activeAreaId = AREAS[activeIndex];
  const activeAreaMeta = useMemo(
    () => DESIGN_AREAS.find((a) => a.id === activeAreaId)!,
    [activeAreaId]
  );
  const colorsForArea = COLOR_PALETTES[activeAreaId];

  const handleColorChange = (areaId: DesignAreaId, hex: string) => {
    setConfig((prev) => ({ ...prev, [areaId]: hex }));
  };

  const goPrev = () => {
    setActiveIndex((prev) => (prev - 1 + AREAS.length) % AREAS.length);
  };

  const goNext = () => {
    setActiveIndex((prev) => (prev + 1) % AREAS.length);
  };

  return (
    <Container maxWidth="lg" sx={{ py: { xs: 4, md: 6 } }}>
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.2fr 0.8fr" },
          gap: { xs: 4, md: 1 },
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h3" mb={1}>
            Design your new sneaker
          </Typography>
          <Typography variant="body1" color="text.secondary" mb={4}>
            Choose between our base model and curated colorways to create
            something unique.
          </Typography>

          <SneakerPreview config={config} />
        </Box>

        <Box>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 2,
              mb: 1,
            }}
          >
            <IconButton onClick={goPrev}>
              <ChevronLeftIcon />
            </IconButton>

            <Typography variant="subtitle1" fontWeight="medium">
              {activeAreaMeta.label}
            </Typography>

            <IconButton onClick={goNext}>
              <ChevronRightIcon />
            </IconButton>
          </Box>
          <Typography
            variant="caption"
            color="text.secondary"
            display="block"
            textAlign="center"
            mb={2}
          >
            Choose a color for the {activeAreaMeta.label.toLowerCase()}
          </Typography>

          <Divider sx={{ mb: 3 }} />

          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {colorsForArea.map((color) => {
              const isActive = config[activeAreaId] === color.hex;
              return (
                <Box
                  key={color.hex}
                  onClick={() => handleColorChange(activeAreaId, color.hex)}
                  sx={{
                    width: 32,
                    height: 32,
                    borderRadius: "25%",
                    backgroundColor: color.hex,
                    border: isActive
                      ? "3px solid #111"
                      : "2px solid rgba(0,0,0,0.12)",
                    boxShadow: isActive ? "0 0 0 2px rgba(0,0,0,0.15)" : "none",
                    cursor: "pointer",
                    transition:
                      "transform 0.15s ease, border 0.15s ease, box-shadow 0.15s ease",
                    "&:hover": {
                      transform: "scale(1.1)",
                    },
                  }}
                />
              );
            })}
          </Box>
        </Box>
      </Box>
      <Box sx={{ width: "100%" }}>
        <Stepper
          nonLinear
          activeStep={activeIndex}
          alternativeLabel
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "flex-start",
            mt: 1,
            gap: 1,
          }}
        >
          {DESIGN_AREAS.map((area, index) => (
            <Step key={area.id}>
              <StepButton onClick={() => setActiveIndex(index)}>
                {area.label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
      </Box>
    </Container>
  );
}
