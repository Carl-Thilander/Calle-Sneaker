import EastIcon from "@mui/icons-material/East";
import { Button, Typography } from "@mui/material";
import Image from "next/image";
import Container from "node_modules/@mui/material/Container/Container";
import Box from "node_modules/@mui/material/esm/Box/Box";
import sneakerGif from "../assets/new-sneaker-gif.gif";
import sneakerLanding from "../assets/onitsuka-landing.png";

export default function HomePage() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 8,
        py: 8,
      }}
    >
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        alignItems="center"
        width="100%"
        gap={4}
      >
        <Box
          display="flex"
          flexDirection="column"
          flex={1}
          alignItems="flex-start"
        >
          <Typography variant="h4" gutterBottom>
            Welcome to Sneakers
          </Typography>
          <Typography variant="h2" gutterBottom>
            What will you create?
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/designer"
            sx={{ mt: 4, gap: 1, p: 2, border: "1px solid black" }}
          >
            Get started
            <EastIcon />
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
              width: { xs: 320, sm: 450, md: 560, lg: 680 },
              height: { xs: 320, sm: 450, md: 560, lg: 680 },
            }}
          >
            <Image
              src={sneakerLanding}
              alt="Sneaker preview"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>
        </Box>
      </Box>

      <Box
        display="flex"
        flexDirection={{ xs: "column-reverse", md: "row" }}
        alignItems="center"
        width="100%"
        gap={4}
      >
        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          sx={{ mt: { xs: 4, md: 0 } }}
        >
          <Box
            sx={{
              position: "relative",
              width: { xs: 320, sm: 450, md: 560, lg: 680 },
              height: { xs: 320, sm: 450, md: 560, lg: 680 },
            }}
          >
            <Image
              src={sneakerGif}
              alt="Sneaker preview"
              fill
              style={{ objectFit: "contain" }}
              priority
            />
          </Box>
        </Box>

        <Box
          display="flex"
          flexDirection="column"
          flex={1}
          alignItems="flex-start"
        >
          <Typography variant="h2" gutterBottom textAlign={"left"}>
            In need of inspiration?
          </Typography>
          <Typography variant="h4" gutterBottom>
            Check out our gallery where you might get some ideas to get you
            started.
          </Typography>

          <Button
            variant="contained"
            color="primary"
            size="large"
            href="/inspired"
            sx={{ mt: 4, gap: 1, p: 2, border: "1px solid black" }}
          >
            Get inspired
            <EastIcon />
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
