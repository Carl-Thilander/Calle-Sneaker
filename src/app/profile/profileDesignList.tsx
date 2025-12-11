"use client";

import { Box, Button, Link, Stack, Typography } from "@mui/material";
import { useState } from "react";
import SneakerPreview from "../designer/SneakerPreview";
import { deleteDesign, SneakerConfig } from "./designs/actions";

type Design = {
  id: string;
  name: string;
  createdAt: string | Date;
  config: any;
};

type Props = {
  initialDesigns: Design[];
};

export default function ProfileDesignList({ initialDesigns }: Props) {
  const [designs, setDesigns] = useState(initialDesigns);

  async function handleDelete(id: string) {
    const res = await deleteDesign(id);
    if (res.success) {
      setDesigns((prev) => prev.filter((d) => d.id !== id));
    }
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
    <Stack spacing={2} mt={3}>
      {designs.map((d) => (
        <Box
          key={d.id}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            border: "1px solid",
            borderColor: "divider",
            borderRadius: 2,
            p: 2,
            flexDirection: { xs: "column", md: "row" },
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
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <SneakerPreview
              config={d.config as SneakerConfig}
              size="small"
              activeAreaId={"base"}
            />
          </Box>

          <Stack direction="row" spacing={1}>
            <Button size="small" component={Link} href={`/designer/${d.id}`}>
              Edit
            </Button>
            <Button
              size="small"
              color="error"
              onClick={() => handleDelete(d.id)}
            >
              Delete
            </Button>
          </Stack>
        </Box>
      ))}
    </Stack>
  );
}
