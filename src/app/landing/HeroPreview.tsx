"use client";
import { DesignAreaId, SneakerConfig } from "../designer/areas";
import SneakerPreview from "../designer/SneakerPreview";

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
