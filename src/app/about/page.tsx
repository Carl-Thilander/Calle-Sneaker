import { Box, Card, CardContent, Container, Typography } from "@mui/material";
import DesignerButton from "../components/Buttons/DesignerButton";
import GetInspiredButton from "../components/Buttons/GetInspiredButton";

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
          bgcolor: "background.paper",
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
            <DesignerButton title="Start designing" />

            <GetInspiredButton />
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
                <Typography component={"h2"} variant="h5" sx={{ mb: 1 }}>
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
              gap: { xs: 2 },
            }}
          >
            <Box>
              <Typography component={"h3"} variant="h6" sx={{ mb: 0.5 }}>
                Ready to build your next colorway?
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Jump into the designer and save your first draft within the
                minute.
              </Typography>
            </Box>

            <DesignerButton title="Open designer" />
          </Box>
        </Card>
      </Container>
    </Box>
  );
}
