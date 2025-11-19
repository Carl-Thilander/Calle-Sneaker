"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import { Box, Toolbar } from "@mui/material";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <>
      <Box component="footer" sx={{ mt: 4 }}>
        <Toolbar
          sx={{
            gap: 2,
            backgroundColor: "#251F1F",
            height: "30vh",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "100%",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography
              variant="h3"
              color="white"
              sx={{ mb: 4, textAlign: "center" }}
            >
              Contact us
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 4,
              }}
            >
              <GitHubIcon
                sx={{
                  color: "white",
                  cursor: "pointer",
                  fontSize: { xs: 35, md: 50 },
                }}
              />
              <XIcon
                sx={{
                  color: "white",
                  cursor: "pointer",
                  fontSize: { xs: 35, md: 50 },
                }}
              />
              <InstagramIcon
                sx={{
                  color: "white",
                  cursor: "pointer",
                  fontSize: { xs: 35, md: 50 },
                }}
              />
              <FacebookIcon
                sx={{
                  color: "white",
                  cursor: "pointer",
                  fontSize: { xs: 35, md: 50 },
                }}
              />
            </Box>
          </Box>
        </Toolbar>
      </Box>
    </>
  );
}
