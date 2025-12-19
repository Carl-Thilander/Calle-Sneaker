"use client";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LaunchIcon from "@mui/icons-material/Launch";
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
  Tooltip,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";

import { createDesign, updateDesign } from "../profile/designs/actions";
import SneakerPreview from "./SneakerPreview";
import { DESIGN_AREAS, DesignAreaId, SneakerConfig } from "./areas";
import { COLOR_PALETTE as COLOR_PALETTES } from "./colors";

const AREAS: DesignAreaId[] = DESIGN_AREAS.map((a) => a.id);

type DesignerProps = {
  initialDesignId?: string;
  initialName?: string;
  initialConfig?: SneakerConfig;
  isLoggedIn: boolean;
  mode: "create" | "edit";
};

type DraftPayload = {
  name: string;
  config: SneakerConfig;
  activeIndex: number;
  updatedAt: number;
};

function getDraftKey(designId: string | undefined) {
  return designId
    ? `sneaker-design-draft-${designId}`
    : `sneaker-design-draft-new`;
}

function safeParseDraft(raw: string | null): DraftPayload | null {
  if (!raw) return null;
  try {
    return JSON.parse(raw) as DraftPayload;
  } catch {
    return null;
  }
}

export default function DesignerClient(props: DesignerProps) {
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
  const [activeIndex, setActiveIndex] = useState(0);
  const draftKey = useMemo(() => getDraftKey(designId), [designId]);
  const loadedDraftRef = useRef(false);

  // LOAD draft vid mount / när draftKey ändras (t.ex. när designId sätts efter create)
  useEffect(() => {
    const raw = window.localStorage.getItem(draftKey);
    const draft = safeParseDraft(raw);

    // If there is a draft, use it
    if (draft) {
      setName(draft.name ?? props.initialName ?? "My new design");
      setConfig(draft.config ?? props.initialConfig);
      setActiveIndex(
        typeof draft.activeIndex === "number" ? draft.activeIndex : 0
      );
    }

    loadedDraftRef.current = true;
  }, [draftKey]);

  // SAVE draft (debounced) när name/config/activeIndex ändras
  useEffect(() => {
    if (!loadedDraftRef.current) return;

    const payload: DraftPayload = {
      name,
      config,
      activeIndex,
      updatedAt: Date.now(),
    };

    const t = window.setTimeout(() => {
      window.localStorage.setItem(draftKey, JSON.stringify(payload));
    }, 400); //Wait 400ms after last change

    return () => window.clearTimeout(t);
  }, [name, config, activeIndex, draftKey]);

  const clearDraft = () => {
    window.localStorage.removeItem(draftKey);
    setName("My new design");
    setConfig(
      props.initialConfig ?? {
        base: "#353232ff",
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
    setActiveIndex(0);
  };

  const [savedOpen, setSavedOpen] = useState(false);
  const [createdDesignId, setCreatedDesignId] = useState<string | undefined>(
    undefined
  );
  const [savedDesignName, setSavedDesignName] = useState<string | undefined>(
    undefined
  );

  async function handleSave() {
    if (designId) {
      const res = await updateDesign({ id: designId, name, config });
      if (res.success) {
        setDesignId(res.design.id);
        setSavedDesignName(res.design.name);
        setSavedOpen(true);
        clearDraft();
      }
    } else {
      const res = await createDesign({ name, config });
      if (res.success) {
        //User can edit right away if they want to
        // but we don't force it on them, UI is reset to create mode
        setCreatedDesignId(res.design.id);
        setSavedDesignName(res.design.name);
        setSavedOpen(true);
        clearDraft();
      }
    }
  }

  const handleCloseSaved = () => {
    setSavedOpen(false);
    setCreatedDesignId(undefined);
    setSavedDesignName(undefined);
  };

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
      <Container
        maxWidth="lg"
        sx={{ py: { xs: 4, md: 10 }, px: { xs: 0, md: 0 } }}
      >
        <Box
          sx={{
            gap: { xs: 4, md: 1 },
            alignItems: "center",
            bgcolor: "background.paper",
            p: { xs: 3, md: 4 },
            borderRadius: 2,
            boxShadow: 3,
            border: "1px solid",
            borderColor: "divider",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              justifyContent: "space-between",

              p: 2,
              borderRadius: 4,
            }}
          >
            <Box>
              <Typography variant="h3" mb={1}>
                {designId ? "Edit your old design" : "Design your new sneaker"}
              </Typography>
              <Typography
                variant="body1"
                color="text.secondary"
                mb={4}
                maxWidth={550}
              >
                {designId
                  ? ""
                  : "Start by naming your design and then pick colors for each part of the sneaker. We offer two sets of navigation so you always can work quickly."}
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 2,
                flexWrap: "wrap",
                maxWidth: 400,
              }}
            >
              <TextField
                label="Name of design"
                fullWidth
                value={name}
                onChange={(e) => setName(e.target.value)}
              />

              <Tooltip
                title={!props.isLoggedIn ? "Log in to save designs" : ""}
                arrow
              >
                <span>
                  <Button
                    aria-label="save/edit-button"
                    disabled={!props.isLoggedIn}
                    variant="contained"
                    onClick={handleSave}
                    sx={{
                      padding: 2,
                      borderRadius: 2,
                    }}
                  >
                    {designId ? "Update design" : "Save design"}
                  </Button>
                </span>
              </Tooltip>
              <Tooltip title="Clear current design and start fresh" arrow>
                <span>
                  <Button
                    aria-label="reset-design-button"
                    variant="outlined"
                    color="error"
                    onClick={clearDraft}
                    sx={{
                      padding: 2,
                      borderRadius: 2,
                    }}
                  >
                    Reset design
                  </Button>
                </span>
              </Tooltip>
              {!props.isLoggedIn && (
                <Button
                  aria-label="go-to-login-button"
                  component={Link}
                  href="/auth/login"
                  variant="outlined"
                  sx={{ padding: 2, borderRadius: 2 }}
                >
                  Log in
                </Button>
              )}
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <SneakerPreview
              config={config}
              activeAreaId={activeAreaId}
              size="large"
            />

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
                        width: { xs: 25, md: 32 },
                        height: { xs: 25, md: 32 },
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

          <Box sx={{ width: "100%" }}>
            {!isMobile && (
              <Stepper
                nonLinear
                color="secondary.light"
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
        </Box>
      </Container>
      <Dialog
        open={savedOpen}
        onClose={handleCloseSaved}
        maxWidth="xs"
        fullWidth
        sx={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
        }}
      >
        <DialogTitle>
          {savedDesignName ?? name} was saved to your profile
        </DialogTitle>
        <DialogContent>
          <Typography>
            Make sure to check your profile to see and edit your designs.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={handleCloseSaved}
            variant="contained"
            aria-label="close-modal-button"
            autoFocus
          >
            OK
          </Button>
          {createdDesignId && (
            <Button
              aria-label="go-to-profile-button"
              component={Link}
              href={`/profile`}
              onClick={() => {}}
              variant="outlined"
            >
              <LaunchIcon sx={{ mr: 0.5 }} />
              Go to profile
            </Button>
          )}
        </DialogActions>
      </Dialog>
    </>
  );
}
