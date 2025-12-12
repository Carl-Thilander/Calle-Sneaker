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
                config={d.config as SneakerConfig}
                size="small"
                activeAreaId={"base"}
              />
            </Box>

            <Stack direction="row" spacing={1}>
              <Button
                size="small"
                variant="outlined"
                component={Link}
                href={`/designer/${d.id}`}
              >
                Edit
              </Button>
              <Button
                size="small"
                color="error"
                variant="outlined"
                onClick={() => openDeleteDialog(d.id, d.name)}
              >
                Delete
              </Button>
            </Stack>
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
