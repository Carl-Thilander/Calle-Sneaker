"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import {
  Box,
  Button,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
  Step,
  StepButton,
  Stepper,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useMemo, useState } from "react";

import { createDesign, updateDesign } from "../profile/designs/actions";
import SneakerPreview from "./SneakerPreview";
import { DESIGN_AREAS, DesignAreaId, SneakerConfig } from "./areas";
import { COLOR_PALETTE as COLOR_PALETTES } from "./colors";

const AREAS: DesignAreaId[] = DESIGN_AREAS.map((a) => a.id);

type DesignerProps = {
  initialDesignId?: string;
  initialName?: string;
  initialConfig?: SneakerConfig;
};

export default function Designer(props: DesignerProps) {
  const [name, setName] = useState(props.initialName ?? "My new design");
  const [config, setConfig] = useState<SneakerConfig>(
    props.initialConfig ?? {
      base: "#FFFFFF",
      sole: "#FFFFFF",
      logo: "#38C774",
      front: "#FFFFFF",
      front_toe: "#FFFFFF",
      logobg: "#FFFFFF",
      laces: "#FFFFFF",
      laceBase: "#FFFFFF",
      backpart: "#FFFFFF",
      heelPatch: "#FFFFFF",
    }
  );

  const [designId, setDesignId] = useState<string | undefined>(
    props.initialDesignId
  );

  const [savedOpen, setSavedOpen] = useState(false);

  async function handleSave() {
    if (designId) {
      const res = await updateDesign({ id: designId, name, config });
      if (res.success) {
        setDesignId(res.design.id);
        setSavedOpen(true);
      }
    } else {
      const res = await createDesign({ name, config });
      if (res.success) {
        setDesignId(res.design.id);
        setSavedOpen(true);
      }
    }
  }

  const closeSavedDialog = () => setSavedOpen(false);

  const [activeIndex, setActiveIndex] = useState(0);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
    <>
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
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
              }}
            >
              <TextField
                label="Name of design"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Button
                variant="contained"
                onClick={handleSave}
                sx={{
                  padding: 2,
                  borderRadius: 2,
                }}
              >
                {designId ? "Update design" : "Save design"}
              </Button>
            </Box>

            <SneakerPreview
              config={config}
              activeAreaId={activeAreaId}
              size="large"
            />
          </Box>

          <Box>
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
                  <ChevronLeftIcon aria-label="Previous" />
                </IconButton>

                <Typography variant="subtitle1" fontWeight="medium">
                  {activeAreaMeta.label}
                </Typography>

                <IconButton onClick={goNext}>
                  <ChevronRightIcon aria-label="Next" />
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
                        boxShadow: isActive
                          ? "0 0 0 2px rgba(0,0,0,0.15)"
                          : "none",
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
        </Box>
        <Box sx={{ width: "100%" }}>
          {!isMobile && (
            <Stepper
              nonLinear
              activeStep={activeIndex}
              alternativeLabel
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                py: 4,
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
          )}
          {isMobile && (
            <Box
              sx={{
                display: "flex",
                overflowX: "auto",
                gap: 1,
                px: 1,
                py: 6,
                "::-webkit-scrollbar": { display: "none" },
              }}
            >
              {DESIGN_AREAS.map((area, index) => {
                const isActive = index === activeIndex;
                return (
                  <Box
                    key={area.id}
                    onClick={() => setActiveIndex(index)}
                    sx={{
                      flexShrink: 0,
                      px: 1.5,
                      py: 0.75,
                      borderRadius: 999,
                      fontSize: 12,
                      cursor: "pointer",
                      border: "1px solid",
                      borderColor: isActive ? "primary.main" : "divider",
                      bgcolor: isActive ? "primary.main" : "background.paper",
                      color: isActive
                        ? "primary.contrastText"
                        : "text.secondary",
                      transition:
                        "background-color 0.15s ease, border-color 0.15s ease, transform 0.15s ease",
                      "&:active": {
                        transform: "scale(0.8)",
                      },
                    }}
                  >
                    {index + 1}. {area.label}
                  </Box>
                );
              })}
            </Box>
          )}
        </Box>
      </Container>
      <Dialog
        open={savedOpen}
        onClose={closeSavedDialog}
        maxWidth="xs"
        fullWidth
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <DialogTitle>{name} was saved to your profile</DialogTitle>
        <DialogContent>
          <Typography>
            Make sure to check your profile to see and edit your designs.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeSavedDialog} variant="contained" autoFocus>
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
