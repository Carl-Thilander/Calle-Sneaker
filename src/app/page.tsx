import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Container from "node_modules/@mui/material/Container/Container";
import Box from "node_modules/@mui/material/esm/Box/Box";
import sneakerLadning from "../assets/sneaker-landing.webp";

export default function Home() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        width="100%"
        gap={6}
      >
        <Box flex={1}>
          <Typography
            variant="h2"
            component="h1"
            gutterBottom
            sx={{ fontWeight: "bold" }}
          >
            Design your Sneakers
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/designer"
          >
            Start desigining
          </Button>
        </Box>

        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          sx={{ mt: { xs: 4, md: 0 } }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 360, md: 560 },
              height: { xs: 360, md: 560 },
            }}
          >
            <Image
              src={sneakerLadning}
              alt="Sneaker preview"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>
        </Box>
      </Box>
    </Container>
  );
}
