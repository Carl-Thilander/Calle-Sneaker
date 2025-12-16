"use client";

import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { jsPDF } from "jspdf";
import { useState } from "react";
import SneakerPreview from "../designer/SneakerPreview";
import { DESIGN_AREAS, SneakerConfig } from "../designer/areas";
import { deleteDesign } from "./designs/actions";

type Design = {
  id: string;
  name: string;
  createdAt: string | Date;
  config: SneakerConfig;
};

type Props = {
  initialDesigns: RawDesign[];
};

type RawDesign = Omit<Design, "config"> & {
  config: any;
};

function normalizeConfig(config: any): SneakerConfig {
  return DESIGN_AREAS.reduce((acc, area) => {
    const value =
      config &&
      typeof config === "object" &&
      typeof config[area.id] === "string"
        ? (config[area.id] as string)
        : "#ffffff";
    acc[area.id] = value;
    return acc;
  }, {} as SneakerConfig);
}

const imageCache: Record<string, Promise<HTMLImageElement>> = {};

function loadImage(src: string) {
  if (!imageCache[src]) {
    imageCache[src] = new Promise((resolve, reject) => {
      const img = new Image();
      img.crossOrigin = "anonymous";
      img.onload = () => resolve(img);
      img.onerror = reject;
      img.src = src;
    });
  }
  return imageCache[src];
}

const MAX_EXPORT_DIMENSION = 3000;

async function renderSneakerImage(config: SneakerConfig) {
  const masks = await Promise.all(
    DESIGN_AREAS.map((area) => loadImage(area.mask))
  );
  const shadings = await Promise.all(
    DESIGN_AREAS.map((area) => loadImage(area.shading))
  );

  const baseWidth = masks[0]?.naturalWidth || 1000;
  const baseHeight = masks[0]?.naturalHeight || 1000;
  const scale = Math.min(
    1,
    MAX_EXPORT_DIMENSION / baseWidth,
    MAX_EXPORT_DIMENSION / baseHeight
  );
  const width = Math.round(baseWidth * scale);
  const height = Math.round(baseHeight * scale);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d");
  if (!ctx) {
    throw new Error("Canvas 2D context not available");
  }

  const areaCanvas = document.createElement("canvas");
  areaCanvas.width = width;
  areaCanvas.height = height;
  const areaCtx = areaCanvas.getContext("2d");
  const gradient = ctx.createRadialGradient(
    width / 2,
    height * 0.4,
    width * 0.1,
    width / 2,
    height * 0.6,
    Math.max(width, height) * 0.75
  );
  gradient.addColorStop(0, "#3b4566ff");
  gradient.addColorStop(0.45, "#3b4566be");
  gradient.addColorStop(1, "#2d354ebe");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  DESIGN_AREAS.forEach((area, index) => {
    const maskImg = masks[index];
    if (!maskImg) return;
    if (!areaCtx) return;
    areaCtx.clearRect(0, 0, width, height);
    areaCtx.globalCompositeOperation = "source-over";
    areaCtx.fillStyle = config[area.id] ?? "#ffffff";
    areaCtx.fillRect(0, 0, width, height);
    areaCtx.globalCompositeOperation = "destination-in";
    areaCtx.drawImage(maskImg, 0, 0, width, height);
    areaCtx.globalCompositeOperation = "source-over";
    ctx.drawImage(areaCanvas, 0, 0, width, height);
    const shadingImg = shadings[index];
    if (shadingImg) {
      ctx.save();
      ctx.globalCompositeOperation = "multiply";
      ctx.drawImage(shadingImg, 0, 0, width, height);
      ctx.restore();
    }
  });

  return canvas.toDataURL("image/jpeg", 0.85);
}

export default function ProfileDesignList({ initialDesigns }: Props) {
  const [designs, setDesigns] = useState<Design[]>(() =>
    initialDesigns.map((design) => ({
      ...design,
      config: normalizeConfig(design.config),
    }))
  );

  const handleDownloadPdf = async (design: Design) => {
    console.log("Preparing PDF for:", design.id, design.config);
    const data = await renderSneakerImage(design.config);

    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "px",
      format: "a4",
    });

    const pdfWidth = pdf.internal.pageSize.getWidth();
    const pdfHeight = pdf.internal.pageSize.getHeight();

    pdf.addImage(data, "PNG", 0, 0, pdfWidth, pdfHeight);

    pdf.save(`${design.id}-sneaker-design.pdf`);
  };
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState<{
    id: string;
    name: string;
  } | null>(null);

  const openDeleteDialog = (id: string, name: string) => {
    setDeleteTarget({ id, name });
    setDeleteOpen(true);
  };

  const closeDeleteDialog = () => {
    setDeleteOpen(false);
    setDeleteTarget(null);
  };

  async function confirmDelete() {
    if (!deleteTarget) return;
    const res = await deleteDesign(deleteTarget.id);
    if (res.success) {
      setDesigns((prev) => prev.filter((d) => d.id !== deleteTarget.id));
    }
    closeDeleteDialog();
  }

  if (designs.length === 0) {
    return (
      <Typography color="text.secondary">
        You have not saved a design yet. Create something epic and make sure to
        save it for a nice display here
      </Typography>
    );
  }

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 2,
          p: 4,
        }}
      >
        {designs.map((d) => (
          <Box
            key={d.id}
            sx={{
              display: "flex",
              flexWrap: "wrap",
              width: "fit-content",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: 2,
              alignItems: "center",
              border: "1px solid",
              borderColor: "divider",
              borderRadius: 2,
              boxShadow: "2px 2px 8px rgba(0,0,0,0.1)",
              p: 2,
              ":hover": {
                boxShadow: "4px 4px 12px rgba(0,0,0,0.2)",
                scale: 1.05,
              },
            }}
          >
            <Box>
              <Typography variant="subtitle1">{d.name}</Typography>
              <Typography variant="caption" color="text.secondary">
                {new Date(d.createdAt).toLocaleString()}
              </Typography>
            </Box>
            <Box
              sx={{
                flexShrink: 0,
                display: "grid",
                placeItems: "center",
              }}
            >
              <SneakerPreview
                config={d.config}
                size="small"
                activeAreaId={"base"}
              />
            </Box>

            <Stack direction="row" spacing={2}>
              <Button
                size="medium"
                variant="outlined"
                component={Link}
                href={`/designer/${d.id}`}
              >
                Edit
              </Button>
              <Button
                size="medium"
                color="error"
                variant="outlined"
                onClick={() => openDeleteDialog(d.id, d.name)}
              >
                Delete
              </Button>
            </Stack>
            <Button
              fullWidth
              size="medium"
              variant="contained"
              onClick={() => handleDownloadPdf(d)}
            >
              Download PDF
            </Button>
          </Box>
        ))}
      </Box>
      <Dialog open={deleteOpen} onClose={closeDeleteDialog}>
        <DialogTitle>Delete design</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete "{deleteTarget?.name}"? This action
            cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={closeDeleteDialog}>Cancel</Button>
          <Button onClick={confirmDelete} color="error" autoFocus>
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
