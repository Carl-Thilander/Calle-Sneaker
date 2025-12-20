"use client";

import SneakerPreview from "../components/Designer/SneakerPreview";
import { DesignAreaId, SneakerConfig } from "../features/designer/types";

type Props = {
  config: SneakerConfig;
  activeAreaId: DesignAreaId;
  size?: "small" | "large";
};

export default function HeroPreview({ config, activeAreaId }: Props) {
  return (
    <SneakerPreview
      config={config}
      activeAreaId={activeAreaId}
      size={"small"}
    />
  );
}
