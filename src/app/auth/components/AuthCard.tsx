"use client";

import { Box, Card, CardContent, Typography } from "@mui/material";

type Props = {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
};

export default function AuthCard({ title, subtitle, children }: Props) {
  return (
    <Box
      sx={{
        minheight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 2,
      }}
    >
      <Card
        elevation={0}
        sx={{
          width: "100%",
          maxWidth: 400,
          borderRadius: 4,
          border: "2px solid",
          p: 3,
        }}
      >
        <CardContent>
          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            align="center"
          >
            {title}
          </Typography>
          {subtitle && (
            <Typography
              variant="subtitle1"
              color="textSecondary"
              gutterBottom
              align="center"
            >
              {subtitle}
            </Typography>
          )}
          {children}
        </CardContent>
      </Card>
    </Box>
  );
}
