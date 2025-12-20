import { jsPDF } from "jspdf";
import { DESIGN_AREAS } from "../designer/areas";
import type { SneakerConfig } from "../designer/types";

export type ExportableDesign = {
  id: string;
  config: SneakerConfig | Record<string, string> | null;
  name: string;
  author?: {
    id: string;
    username: string;
  };
};

export function normalizeDesignConfig(config: any): SneakerConfig {
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
    if (!maskImg || !areaCtx) return;
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

export async function exportDesignPdf(design: ExportableDesign) {
  const normalizedConfig = normalizeDesignConfig(design.config);
  const data = await renderSneakerImage(normalizedConfig);

  const pdf = new jsPDF({
    orientation: "landscape",
    unit: "px",
    format: "a4",
  });

  const pdfWidth = pdf.internal.pageSize.getWidth();
  const pdfHeight = pdf.internal.pageSize.getHeight();

  pdf.addImage(data, "JPEG", 0, 0, pdfWidth, pdfHeight);
  pdf.setFontSize(12);
  pdf.setTextColor(255, 255, 255);
  pdf.text(`Sneaker name: ${design.name}`, 16, pdfHeight - 32);
  const designerName =
    design.author?.username && design.author.username.trim()
      ? design.author.username
      : "Unknown designer";
  pdf.text(`Designer: ${designerName}`, 16, pdfHeight - 16);

  pdf.save(`${design.id}-sneaker-design.pdf`);
}
