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

const badges = [
  "Drop-ready",
  "Curated palettes",
  "Save & iterate",
  "Fast preview",
];

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
    <Box sx={{ position: "relative", overflow: "hidden" }}>
      {/* Background: gradient + grain */}
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          background:
            "radial-gradient(1200px 700px at 15% 20%, rgba(56,199,116,0.35), transparent 60%)," +
            "radial-gradient(900px 600px at 80% 25%, rgba(255,58,58,0.30), transparent 55%)," +
            "radial-gradient(900px 700px at 60% 90%, rgba(82,113,255,0.28), transparent 55%)," +
            "linear-gradient(180deg, rgba(10,10,10,0.92), rgba(10,10,10,0.98))",
          zIndex: 0,
        }}
      />
      <Box
        sx={{
          position: "absolute",
          inset: 0,
          zIndex: 1,
          opacity: 0.22,
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='180' height='180'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='180' height='180' filter='url(%23n)' opacity='.45'/%3E%3C/svg%3E\")",
          mixBlendMode: "overlay",
          pointerEvents: "none",
        }}
      />

      {/* HERO */}
      <Container
        maxWidth="lg"
        sx={{ position: "relative", zIndex: 2, py: { xs: 7, md: 10 } }}
      >
        <Stack spacing={4}>
          {/* Top row: chips + "sticker" */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={2}
            alignItems={{ xs: "flex-start", md: "center" }}
            justifyContent="space-between"
          >
            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
              {badges.map((b) => (
                <Chip
                  key={b}
                  label={b}
                  variant="outlined"
                  sx={{
                    borderColor: "rgba(255,255,255,0.22)",
                    color: "rgba(255,255,255,0.92)",
                    backdropFilter: "blur(8px)",
                    bgcolor: "rgba(255,255,255,0.04)",
                    fontWeight: 600,
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
                bgcolor: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.16)",
                backdropFilter: "blur(10px)",
              }}
            >
              <Typography
                variant="caption"
                sx={{ letterSpacing: 1.6, color: "rgba(255,255,255,0.85)" }}
              >
                NEW SEASON • COLORWAY LAB
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
                  color: "rgba(255,255,255,0.96)",
                  lineHeight: 0.92,
                  letterSpacing: -1.2,
                  textTransform: "uppercase",
                  fontWeight: 900,
                  fontSize: { xs: 44, sm: 56, md: 76 },
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
                  color: "rgba(255,255,255,0.75)",
                  fontSize: { xs: 15, md: 16 },
                }}
              >
                A loud, culture-first sneaker designer. Curated palettes. Fast
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
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 0.7,
                  }}
                >
                  Start customizing
                </Button>
                <Button
                  href="/inspired"
                  variant="outlined"
                  sx={{
                    borderRadius: 3,
                    px: 3,
                    py: 1.4,
                    fontWeight: 800,
                    textTransform: "uppercase",
                    letterSpacing: 0.7,
                    borderColor: "rgba(255,255,255,0.22)",
                    color: "rgba(255,255,255,0.9)",
                    "&:hover": { borderColor: "rgba(255,255,255,0.35)" },
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
                      bgcolor: "rgba(255,255,255,0.05)",
                      border: "1px solid rgba(255,255,255,0.14)",
                      backdropFilter: "blur(10px)",
                      minWidth: 120,
                    }}
                  >
                    <Typography
                      sx={{
                        color: "rgba(255,255,255,0.92)",
                        fontWeight: 900,
                        fontSize: 18,
                      }}
                    >
                      {s.k}
                    </Typography>
                    <Typography
                      variant="caption"
                      sx={{ color: "rgba(255,255,255,0.68)" }}
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
                bgcolor: "rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
                overflow: "hidden",
                position: "relative",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  inset: 0,
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.10), rgba(255,255,255,0.02))",
                }}
              />
              <CardContent sx={{ position: "relative", p: 3 }}>
                <Typography
                  variant="overline"
                  sx={{ color: "rgba(255,255,255,0.75)", letterSpacing: 2 }}
                >
                  Featured drop
                </Typography>

                <Typography
                  variant="h5"
                  sx={{
                    mt: 0.5,
                    fontWeight: 900,
                    textTransform: "uppercase",
                    letterSpacing: 0.6,
                    color: "rgba(255,255,255,0.95)",
                  }}
                >
                  “Street Lab Pack”
                </Typography>

                <Typography
                  variant="body2"
                  sx={{ mt: 1, color: "rgba(255,255,255,0.72)" }}
                >
                  Tight palette. Clean contrast. Built for attention.
                </Typography>

                <Divider
                  sx={{ my: 2, borderColor: "rgba(255,255,255,0.14)" }}
                />

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
                      width: 260,
                      height: 260,
                      borderRadius: "50%",
                      bgcolor: "rgba(255,58,58,0.14)",
                      filter: "blur(18px)",
                      bottom: -90,
                      left: -70,
                    }}
                  />
                  <Typography
                    sx={{
                      color: "rgba(255,255,255,0.78)",
                      fontWeight: 800,
                      textTransform: "uppercase",
                      letterSpacing: 1.5,
                    }}
                  >
                    Sneaker preview area
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "rgba(255,255,255,0.58)" }}
                  >
                    (Plug your SneakerPreview here)
                  </Typography>
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
                        bgcolor: "rgba(0,0,0,0.18)",
                        border: "1px solid rgba(255,255,255,0.14)",
                        color: "rgba(255,255,255,0.85)",
                      }}
                    />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Box>

          {/* Marquee */}
          <Box
            sx={{
              mt: { xs: 3, md: 4 },
              borderTop: "1px solid rgba(255,255,255,0.12)",
              borderBottom: "1px solid rgba(255,255,255,0.12)",
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
                color: "rgba(255,255,255,0.78)",
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
              display: "grid",
              gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)" },
              gap: 2,
              mt: { xs: 3, md: 4 },
            }}
          >
            {features.map((f) => (
              <Card
                key={f.title}
                variant="outlined"
                sx={{
                  borderRadius: 4,
                  borderColor: "rgba(255,255,255,0.14)",
                  bgcolor: "rgba(255,255,255,0.05)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <CardContent sx={{ p: 3 }}>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: 900,
                      textTransform: "uppercase",
                      letterSpacing: 0.6,
                      color: "rgba(255,255,255,0.92)",
                      mb: 1,
                    }}
                  >
                    {f.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: "rgba(255,255,255,0.72)" }}
                  >
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
