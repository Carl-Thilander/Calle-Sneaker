import type { DesignAreaId } from "./types";

export type ColorOption = {
  name: string;
  hex: string;
};

export const COLOR_PALETTE: Record<DesignAreaId, ColorOption[]> = {
  base: [
    { name: "Black", hex: "#312f2fff" },
    { name: "Gray", hex: "#808080" },
  ],
  logo: [
    { name: "Volt", hex: "#CEFF00" },
    { name: "Royal Blue", hex: "#0057FF" },
    { name: "Red", hex: "#D40000" },
    { name: "Black", hex: "#312f2fff" },
    { name: "White", hex: "#FFFFFF" },
    { name: "Green", hex: "#195330" },
  ],
  sole: [
    { name: "White", hex: "#FFFFFF" },
    { name: "Gum", hex: "#C88C4A" },
    { name: "Gray", hex: "#B8B8B8" },
    { name: "Black", hex: "#312f2fff" },
    { name: "Red", hex: "#D40000" },
    { name: "Blue", hex: "#0057FF" },
  ],
  front: [
    { name: "White", hex: "#FFFFFF" },
    { name: "Black", hex: "#312f2fff" },
    { name: "Cream", hex: "#f5ede2" },
    { name: "Navy", hex: "#1F2A44" },
    { name: "Forrest Green", hex: "#195330" },
    { name: "Bourdaux", hex: "#6e2731" },
  ],
  front_toe: [
    { name: "White", hex: "#FFFFFF" },
    { name: "Black", hex: "#312f2fff" },
    { name: "Cream", hex: "#f5ede2" },
    { name: "Navy", hex: "#1F2A44" },
    { name: "Forrest Green", hex: "#195330" },
    { name: "Bourdaux", hex: "#6e2731" },
  ],
  logobg: [
    { name: "White", hex: "#FFFFFF" },
    { name: "Black", hex: "#312f2fff" },
    { name: "Gray", hex: "#808080" },
    { name: "Navy", hex: "#1F2A44" },
    { name: "Red", hex: "#D40000" },
    { name: "Green", hex: "#195330" },
  ],
  laces: [
    { name: "White", hex: "#FFFFFF" },
    { name: "Black", hex: "#312f2fff" },
    { name: "Gray", hex: "#808080" },
    { name: "Navy", hex: "#1F2A44" },
    { name: "Red", hex: "#D40000" },
    { name: "Green", hex: "#195330" },
  ],
  laceBase: [
    { name: "White", hex: "#FFFFFF" },
    { name: "Black", hex: "#312f2fff" },
    { name: "Cream", hex: "#f5ede2" },
    { name: "Navy", hex: "#1F2A44" },
    { name: "Forrest Green", hex: "#195330" },
    { name: "Bourdaux", hex: "#6e2731" },
  ],
  backpart: [
    { name: "White", hex: "#FFFFFF" },
    { name: "Black", hex: "#312f2fff" },
    { name: "Cream", hex: "#f5ede2" },
    { name: "Navy", hex: "#1F2A44" },
    { name: "Forrest Green", hex: "#195330" },
    { name: "Bourdaux", hex: "#6e2731" },
  ],
  heelPatch: [
    { name: "White", hex: "#FFFFFF" },
    { name: "Black", hex: "#312f2fff" },
    { name: "Cream", hex: "#f5ede2" },
    { name: "Navy", hex: "#1F2A44" },
    { name: "Forrest Green", hex: "#195330" },
    { name: "Bourdaux", hex: "#6e2731" },
  ],
} as const;
