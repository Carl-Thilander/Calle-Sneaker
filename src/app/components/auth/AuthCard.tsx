"use client";
import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";

type Props = {
  title: string;
  subtitle: string;
  children: React.ReactNode;
  footer: React.ReactNode;
};

export default function AuthCard({ title, subtitle, children, footer }: Props) {
  return (
    <Container maxWidth="lg" sx={{ py: { xs: 6, md: 10 } }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          gap: 3,
          alignItems: "stretch",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {/* Left: brand panel */}
        <Card
          variant="outlined"
          sx={{
            borderRadius: 4,
            borderColor: "divider",
            bgcolor: "background.default",
            backdropFilter: "blur(12px)",
            overflow: "hidden",
            position: "relative",
            width: { xs: "100%", md: "40%" },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              background:
                "radial-gradient(700px 500px at 20% 30%, rgba(56,199,116,0.26), transparent 60%)," +
                "radial-gradient(650px 500px at 80% 20%, rgba(255,58,58,0.20), transparent 60%)," +
                "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
              opacity: 0.9,
            }}
          />
          <CardContent sx={{ position: "relative", p: { xs: 3, md: 4 } }}>
            <Typography
              variant="overline"
              sx={{ letterSpacing: 2, color: "text.primary" }}
            >
              CUSTOMKICKS • AUTH
            </Typography>

            <Typography
              variant="h3"
              sx={{
                mt: 1,
                fontWeight: 900,
                textTransform: "uppercase",
                letterSpacing: 0.6,
                color: "text.primary",
                lineHeight: 1,
              }}
            >
              Your lineup,
              <br />
              saved.
            </Typography>

            <Typography sx={{ mt: 2, color: "text.primary", maxWidth: 520 }}>
              Save designs, continue drafts, and refine colorways. Clean
              workflow with a culture-first look.
            </Typography>
          </CardContent>
        </Card>

        {/* Right: form */}
        <Card
          variant="outlined"
          sx={{
            borderRadius: 4,
            borderColor: "divider",
            bgcolor: "background.paper",
            backdropFilter: "blur(12px)",
            width: { xs: "100%", md: "40%" },
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack spacing={1}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 900, color: "text.primary" }}
              >
                {title}
              </Typography>
              <Typography color="text.primary">{subtitle}</Typography>
            </Stack>

            <Box sx={{ mt: 3 }}>{children}</Box>

            <Box sx={{ mt: 3 }}>{footer}</Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
