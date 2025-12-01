export const DESIGN_AREAS = [
  {
    id: "base",
    label: "Base",
    mask: "/masks/entireSneaker.png",
    shading: "/masks/entireSneaker.png",
  },
  {
    id: "logo",
    label: "Logo",
    mask: "/masks/swoosh.png",
    shading: "/masks/swoosh.png",
  },
  {
    id: "sole",
    label: "Sole",
    mask: "/masks/sole.png",
    shading: "/masks/sole.png",
  },
  {
    id: "front",
    label: "Front",
    mask: "/masks/Front.png",
    shading: "/masks/Front.png",
  },
  {
    id: "front_toe",
    label: "Front Toe",
    mask: "/masks/frontToe.png",
    shading: "/masks/frontToe.png",
  },
  {
    id: "logobg",
    label: "Logo Background",
    mask: "/masks/logobg.png",
    shading: "/masks/logobg.png",
  },
  {
    id: "laces",
    label: "Laces",
    mask: "/masks/laces.png",
    shading: "/masks/laces.png",
  },
  {
    id: "backpart",
    label: "Back Part",
    mask: "/masks/backPart.png",
    shading: "/masks/backPart.png",
  },
  {
    id: "laceBase",
    label: "Lace Base",
    mask: "/masks/laceBase.png",
    shading: "/masks/laceBase.png",
  },
  {
    id: "heelPatch",
    label: "Heel Patch",
    mask: "/masks/heelPatch.png",
    shading: "/masks/heelPatch.png",
  }
] as const;

export type DesignAreaId = (typeof DESIGN_AREAS)[number]["id"];

export type SneakerConfig = Record<DesignAreaId, string>;
