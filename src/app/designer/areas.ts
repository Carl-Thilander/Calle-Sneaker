export const DESIGN_AREAS = [
  {
    id: "base",
    label: "Base",
    mask: "/masks/base_mask.png",
    shading: "/masks/entireSneaker.png",
  },
  {
    id: "logo",
    label: "Logo",
    mask: "/masks/swoosh.png",
    shading: "/masks/swoosh_shading.png",
  },
  {
    id: "sole",
    label: "Sole",
    mask: "/masks/sole.png",
    shading: "/masks/sole_shading.png",
  },
] as const;

export type DesignAreaId = (typeof DESIGN_AREAS)[number]["id"];

export type SneakerConfig = Record<DesignAreaId, string>;
