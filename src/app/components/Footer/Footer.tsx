"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Box, Toolbar, useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";
import ColorButton from "./colorButton";

export default function Footer() {
  const theme = useTheme();
  const isDark = theme.palette.mode === "dark";
  const borderColor = isDark
    ? theme.palette.common.white
    : theme.palette.common.black;
  return (
    <>
      <Box
        component="footer"
        sx={{ mt: 4, borderTop: `3px solid ${borderColor}` }}
      >
        <Toolbar
          sx={{
            gap: 2,
            backgroundColor: "background.paper",
            height: { xs: "20vh", md: "10vh" },
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: "center",
              gap: 3,
              justifyContent: "flex-end",
              width: "100%",
              flexWrap: "wrap",
            }}
          >
            <ColorButton />
            <Typography variant="h5" color="text.primary">
              Connect with us!
            </Typography>
            <Box sx={{ display: "flex", gap: 2 }}>
              <GitHubIcon
                sx={{
                  color: "text.primary",
                  cursor: "pointer",
                  fontSize: { xs: 20, md: 30 },
                }}
              />
              <XIcon
                sx={{
                  color: "text.primary",
                  cursor: "pointer",
                  fontSize: { xs: 20, md: 30 },
                }}
              />
              <InstagramIcon
                sx={{
                  color: "text.primary",
                  cursor: "pointer",
                  fontSize: { xs: 20, md: 30 },
                }}
              />
              <FacebookIcon
                sx={{
                  color: "text.primary",
                  cursor: "pointer",
                  fontSize: { xs: 20, md: 30 },
                }}
              />
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
}
