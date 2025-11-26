"use client";

import { Box, Container, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { DESIGN_AREAS, SneakerConfig } from "./areas";
import SneakerPreview from "./SneakerPreview";

const defaultConfig: SneakerConfig = {
  base: "#ffffff",
  logo: "#195330",
  sole: "#000000",
};

export default function Designer() {
  const [config, setConfig] = useState<SneakerConfig>(defaultConfig);
  const [name, setName] = useState("Min sneaker");

  const handleColorChange = (id: keyof SneakerConfig, color: string) => {
    setConfig((prev) => ({ ...prev, [id]: color }));
  };

  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h2" mb={4}>
        Designa din sneaker
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "column" },
          gap: 4,
        }}
      >
        <SneakerPreview config={config} />
        {/* Form */}
        <Box>
          <TextField
            fullWidth
            label="Namn"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 3 }}
          />

          {DESIGN_AREAS.map((area) => (
            <Box
              key={area.id}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                p: 2,
                borderRadius: 2,
                border: "1px solid",
                borderColor: "divider",
                mb: 2,
              }}
            >
              <Typography>{area.label}</Typography>
              <input
                type="color"
                value={config[area.id]}
                onChange={(e) => handleColorChange(area.id, e.target.value)}
                style={{
                  width: 40,
                  height: 40,
                  border: "none",
                  background: "transparent",
                }}
              />
            </Box>
          ))}
        </Box>

        {/* Preview */}
      </Box>
    </Container>
  );
}
