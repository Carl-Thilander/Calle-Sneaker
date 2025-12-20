import { DESIGN_AREAS } from "./areas";

export type DesignAreaId = (typeof DESIGN_AREAS)[number]["id"];

export type SneakerConfig = Record<DesignAreaId, string>;
