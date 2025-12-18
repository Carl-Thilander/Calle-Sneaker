"use client";
import {
  Box,
  Card,
  CardContent,
  Chip,
  Container,
  Stack,
  Typography,
} from "@mui/material";
import Link from "next/link";

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
          display: "grid",
          gridTemplateColumns: { xs: "1fr", md: "1.05fr 0.95fr" },
          gap: 3,
          alignItems: "stretch",
        }}
      >
        {/* Left: brand panel */}
        <Card
          variant="outlined"
          sx={{
            borderRadius: 4,
            borderColor: "rgba(255,255,255,0.14)",
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
                "radial-gradient(700px 500px at 20% 30%, rgba(56,199,116,0.26), transparent 60%)," +
                "radial-gradient(650px 500px at 80% 20%, rgba(255,58,58,0.20), transparent 60%)," +
                "linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
              opacity: 0.9,
            }}
          />
          <CardContent sx={{ position: "relative", p: { xs: 3, md: 4 } }}>
            <Typography
              variant="overline"
              sx={{ letterSpacing: 2, color: "rgba(255,255,255,0.72)" }}
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
                color: "rgba(255,255,255,0.95)",
                lineHeight: 1,
              }}
            >
              Your lineup,
              <br />
              saved.
            </Typography>

            <Typography
              sx={{ mt: 2, color: "rgba(255,255,255,0.72)", maxWidth: 520 }}
            >
              Save designs, continue drafts, and refine colorways. Clean
              workflow with a culture-first look.
            </Typography>

            <Stack
              direction="row"
              spacing={1}
              flexWrap="wrap"
              useFlexGap
              sx={{ mt: 3 }}
            >
              {[
                "Curated palettes",
                "Saved designs",
                "Fast preview",
                "Dark mode",
              ].map((t) => (
                <Chip
                  key={t}
                  size="small"
                  label={t}
                  sx={{
                    bgcolor: "rgba(0,0,0,0.18)",
                    border: "1px solid rgba(255,255,255,0.14)",
                    color: "rgba(255,255,255,0.86)",
                  }}
                />
              ))}
            </Stack>

            <Typography
              variant="caption"
              sx={{ display: "block", mt: 3, color: "rgba(255,255,255,0.55)" }}
            >
              By continuing you agree to our{" "}
              <Box
                component={Link}
                href="/about"
                sx={{ color: "rgba(255,255,255,0.75)" }}
              >
                terms
              </Box>
              .
            </Typography>
          </CardContent>
        </Card>

        {/* Right: form */}
        <Card
          variant="outlined"
          sx={{
            borderRadius: 4,
            borderColor: "rgba(255,255,255,0.14)",
            bgcolor: "rgba(10,10,10,0.55)",
            backdropFilter: "blur(12px)",
          }}
        >
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Stack spacing={1}>
              <Typography
                variant="h4"
                sx={{ fontWeight: 900, color: "rgba(255,255,255,0.95)" }}
              >
                {title}
              </Typography>
              <Typography color="rgba(255,255,255,0.68)">{subtitle}</Typography>
            </Stack>

            <Box sx={{ mt: 3 }}>{children}</Box>

            <Box sx={{ mt: 3 }}>{footer}</Box>
          </CardContent>
        </Card>
      </Box>
    </Container>
  );
}
