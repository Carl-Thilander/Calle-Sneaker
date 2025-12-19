import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

const steps = [
  {
    title: "1. Get inspired",
    body: "Browse our trendy sneaker images powered by Pexels and find a direction for your personal design.",
  },
  {
    title: "2. Customize",
    body: "Pick parts of the sneaker and apply colors from our palette to keep it clean and premium.",
  },
  {
    title: "3. Save & export",
    body: "Use our quick and easy authentication to save designs to your profile, keep editing until it feels perfect, then export as PDF to share or print.",
  },
];

export default function AboutPage() {
  return (
    <Box sx={{ py: { xs: 6, md: 10 } }}>
      <Container
        maxWidth="lg"
        sx={{
          bgcolor: "background.default",
          p: { xs: 3, md: 4 },
          borderRadius: 2,
          boxShadow: 3,
          border: "1px solid",
          borderColor: "divider",
        }}
      >
        <Box textAlign="center" mb={4}>
          <Typography variant="h1" sx={{ lineHeight: 1.05 }}>
            About Sneakers
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ mt: 2, maxWidth: 620, mx: "auto" }}
          >
            Sneakers is a minimalist sneaker design tool built for fast
            iteration. No clutter — just a clean workflow, curated palettes, and
            the ability to save and export your best ideas.
          </Typography>

          <Box
            sx={{
              mt: 4,
              display: "flex",
              gap: { xs: 0, md: 2 },
              justifyContent: { xs: "space-between", md: "flex-start" },
            }}
          >
            <Button
              aria-label="go-to-designer"
              href="/designer"
              variant="contained"
              sx={{ borderRadius: 2, px: 2.5, py: 1.25 }}
            >
              Start designing
            </Button>

            <Button
              aria-label="go-to-inspired"
              href="/inspired"
              variant="contained"
              sx={{
                borderRadius: 2,
                px: 2.5,
                py: 1.25,
                bgcolor: "secondary.light",
                color: "black",
                "&:hover": { bgcolor: "secondary.main" },
              }}
            >
              Get inspired
            </Button>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            gap: 2,
          }}
        >
          {steps.map((s) => (
            <Card
              key={s.title}
              variant="outlined"
              sx={{
                borderRadius: 3,
                height: "100%",
                backgroundColor: "background.paper",
                borderColor: "divider",
                flex: 1,
                minHeight: { xs: 100, md: 150 },
              }}
            >
              <CardContent sx={{ p: 3 }}>
                <Typography variant="h5" sx={{ mb: 1 }}>
                  {s.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {s.body}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Box>

        <Card
          sx={{
            mt: { xs: 4, md: 6 },
            borderRadius: 3,
            p: { xs: 3, md: 4 },
          }}
          variant="outlined"
        >
          <Box
            sx={{
              bgcolor: "background.default",
              display: "flex",
              flexDirection: { xs: "column", md: "row" },
              alignItems: { xs: "stretch", md: "center" },
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h6" sx={{ mb: 0.5 }}>
                Ready to build your next colorway?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Jump into the designer and save your first draft within the
                minute.
              </Typography>
            </Box>

            <Button
              aria-label="go-to-designer"
              href="/designer"
              variant="contained"
              sx={{
                borderRadius: 2,
                px: 3,
                py: 1.25,
                marginTop: { xs: 2, md: 0 },
                alignSelf: { xs: "flex-start", md: "auto" },
              }}
            >
              Open Designer
            </Button>
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
