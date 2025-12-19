import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Divider,
  Typography,
} from "@mui/material";
import Stack from "@mui/material/Stack";
import { Suspense } from "react";
import HeroPreview from "./landing/HeroPreview";
import { FEATURED_CONFIG } from "./landing/featuredSneaker";

const badges = ["Browse", "Create", "Save & iterate", "Export"];

const features = [
  {
    title: "Design by parts",
    body: "Pick areas like sole, laces, logo and build a colorway that feels intentional — not random.",
  },
  {
    title: "Culture-first vibes",
    body: "Bold layouts, fast iteration and a workflow that feels like sketching on a moodboard.",
  },
  {
    title: "Save your lineup",
    body: "Store designs in your profile and keep refining until it’s ready for the ‘fit check’.",
  },
];

export default function HomePage() {
  return (
    <Box sx={{ position: "relative", py: { xs: 0, md: 10 } }}>
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          opacity: 0.22,
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />

      {/* HERO */}
      <Container
        maxWidth="lg"
        sx={{
          position: "relative",
          zIndex: 2,
          p: { xs: 3, md: 4 },
          backgroundColor: "background.default",
          borderRadius: 2,
          boxShadow: 3,
          backdropFilter: "blur(12px)",
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Stack spacing={4}>
          {/* Top row: chips */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems={{ xs: "center", md: "center" }}
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {badges.map((b) => (
                <Chip
                  key={b}
                  label={b}
                  variant="outlined"
                  sx={{
                    borderColor: "text.primary",
                    color: "text.primary",
                    backdropFilter: "blur(8px)",
                    bgcolor: "background.paper",
                    fontWeight: 600,
                    border: "2px solid",
                  }}
                />
              ))}
            </Stack>

            <Box
              sx={{
                transform: { xs: "rotate(-2deg)", md: "rotate(3deg)" },
                borderRadius: 3,
                px: 2.2,
                py: 1.1,
                bgcolor: "background.paper",
                border: "2px dashed",
                borderColor: "text.primary",
                backdropFilter: "blur(10px)",
              }}
            >
              <Typography
                variant="caption"
                sx={{ letterSpacing: 1.6, color: "text.primary" }}
              >
                NEW SEASON • NEW DESIGNS
              </Typography>
            </Box>
          </Stack>

          {/* Main hero grid */}
          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "1.25fr 0.75fr" },
              gap: { xs: 3, md: 3 },
              alignItems: "stretch",
            }}
          >
            {/* Left: headline */}
            <Box>
              <Typography
                variant="h1"
                sx={{
                  color: "text.primary",
                  lineHeight: 0.92,
                  letterSpacing: -1.2,
                  textTransform: "uppercase",
                  fontWeight: 900,
                  fontSize: { xs: 34, sm: 56, md: 76 },
                }}
              >
                Build your
                <Box component="span" sx={{ display: "block" }}>
                  next
                  <Box
                    component="span"
                    sx={{
                      mx: 1,
                      px: 1,
                      borderRadius: 1.5,
                      bgcolor: "rgba(56,199,116,0.22)",
                      border: "1px solid rgba(56,199,116,0.35)",
                    }}
                  >
                    colorway
                  </Box>
                </Box>
              </Typography>

              <Typography
                variant="body1"
                sx={{
                  mt: 2,
                  maxWidth: 720,
                  color: "text.secondary",
                  fontSize: { xs: 15, md: 16 },
                }}
              >
                Minimalist, culture-first sneaker designer. Tight palettes. Fast
                iteration. Save your best ideas and refine them like a real
                drop.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={1.5}
                sx={{ mt: 3 }}
              >
                <Button
                  href="/designer"
                  variant="contained"
                  sx={{
                    borderRadius: 3,
                    px: 3,
                    py: 1.4,
                    color: "black",
                  }}
                >
                  Start customizing
                </Button>
                <Button
                  href="/inspired"
                  variant="outlined"
                  sx={{
                    color: "secondary.main",
                    borderColor: "secondary.main",
                    border: "2px solid",
                    px: 2,
                    ":hover": {
                      background: "secondary.light",
                      bgcolor: "secondary.main",
                      color: "white",
                    },
                  }}
                >
                  Get inspired
                </Button>
              </Stack>

              {/* Micro stats */}
              <Stack
                direction="row"
                spacing={2}
                sx={{ mt: 4, flexWrap: "wrap" }}
                useFlexGap
              >
                {[
                  { k: "10+", v: "Areas" },
                  { k: "∞", v: "Combos" },
                  { k: "1", v: "Clean workflow" },
                ].map((s) => (
                  <Box
                    key={s.v}
                    sx={{
                      px: 2,
                      py: 1.2,
                      borderRadius: 3,
                      bgcolor: "background.paper",
                      border: "2px solid",
                      borderColor: "text.primary",
                      backdropFilter: "blur(10px)",
                      minWidth: 120,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "text.primary",
                        fontWeight: 900,
                        fontSize: 18,
                      }}
                    >
                      {s.k}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "text.secondary" }}
                    >
                      {s.v}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>

            {/* Right: “poster” */}
            <Card
              variant="outlined"
              sx={{
                borderRadius: 4,
                height: "100%",
                borderColor: "rgba(255,255,255,0.16)",
                bgcolor: "background.paper",
                backdropFilter: "blur(12px)",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02))",
                  borderRadius: 4,
                  border: "1px solid",
                  borderColor: "divider",
                  pointerEvents: "none",
                }}
              />
              <CardContent sx={{ position: "relative", p: 3 }}>
                <Typography
                  variant="overline"
                  sx={{ color: "text.primary", letterSpacing: 2 }}
                >
                  Featured design by <i>Jonsson</i>
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    mt: 0.5,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: 0.6,
                    color: "text.primary",
                  }}
                >
                  “Red lace”
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ mt: 1, color: "text.secondary" }}
                >
                  Tight palette. Clean contrast. Built for attention.
                </Typography>

                <Divider sx={{ my: 2, borderColor: "divider" }} />

                {/* Placeholder “sneaker poster” */}
                <Box
                  sx={{
                    borderRadius: 3,
                    border: "1px dashed rgba(255,255,255,0.22)",
                    bgcolor: "rgba(0,0,0,0.18)",
                    height: 220,
                    display: "grid",
                    placeItems: "center",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      width: 300,
                      height: 300,
                      borderRadius: "50%",
                      bgcolor: "rgba(56,199,116,0.18)",
                      filter: "blur(18px)",
                      top: -80,
                      right: -90,
                    }}
                  />
                  <Box
                    sx={{
                      position: "absolute",
                      width: { xs: 240, md: 260 },
                      height: 260,
                      borderRadius: "50%",
                      bgcolor: "rgba(255,58,58,0.14)",
                      filter: "blur(18px)",
                      bottom: -90,
                      left: -70,
                    }}
                  />
                  <Suspense fallback={<div>Loading epic sneaker</div>}>
                    <span>
                      <HeroPreview
                        config={FEATURED_CONFIG}
                        activeAreaId={"base"}
                      />
                    </span>
                  </Suspense>
                </Box>

                <Stack
                  direction="row"
                  spacing={1}
                  sx={{ mt: 2 }}
                  flexWrap="wrap"
                  useFlexGap
                >
                  {["High contrast", "Muted base", "Pop accent"].map((t) => (
                    <Chip
                      key={t}
                      size="small"
                      label={t}
                      sx={{
                        bgcolor: "background.paper",
                        border: "2px solid ",
                        borderColor: "text.primary",
                        p: 1.2,
                        color: "text.primary",
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Box>

          {/* Carousel */}
          <Box
            sx={{
              mt: { xs: 3, md: 4 },
              border: "1px solid",
              borderColor: "text.primary",
              bgcolor: "background.paper",
              py: 1.2,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <Typography
              sx={{
                whiteSpace: "nowrap",
                display: "inline-block",
                animation: "marquee 18s linear infinite",
                color: "text.primary",
                fontWeight: 900,
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              CUSTOMKICKS • COLORWAY LAB • SAVE YOUR LINEUP • CURATED PALETTES •
              FAST ITERATION • DROP ENERGY • CUSTOMKICKS • COLORWAY LAB •
            </Typography>

            <Box
              component="style"
              sx={{ display: "none" }}
              dangerouslySetInnerHTML={{
                __html: `
                  @keyframes marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(-50%); }
                  }
                `,
              }}
            />
          </Box>

          {/* Features row */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", md: "row" },

              mt: { xs: 3, md: 4 },
            }}
          >
            {features.map((f) => (
              <Card
                key={f.title}
                variant="outlined"
                sx={{
                  borderRadius: 4,
                  borderColor: "text.primary",
                  bgcolor: "background.paper",
                  backdropFilter: "blur(10px)",
                  border: "2px solid",
                  m: 2,
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: 0.6,
                      color: "text.primary",
                      mb: 1,
                    }}
                  >
                    {f.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {f.body}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
