import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import loginSneaker from "../../assets/loginSneaker.jpg";

export default async function LoginPage() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        py: { xs: 6, md: 10 },
        px: { xs: 2, md: 4 },
        backgroundColor: "paper.background",
        borderRadius: 2,
        boxShadow: 3,
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          position: "relative",
          height: "60vh",
        }}
      >
        <Box
          sx={{
            width: "50%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            px: 4,
          }}
        >
          <Typography
            variant="h3"
            component="h1"
            color="paper.background"
            gutterBottom
          >
            Welcome back!
          </Typography>
        </Box>
        <Box
          sx={{
            position: "relative",
            width: "50%",
            height: "auto",
            boxSizing: "content-box",
          }}
        >
          <Image
            src={loginSneaker}
            alt="Login Illustration"
            fill
            style={{ objectFit: "contain" }}
            priority
          />
        </Box>
      </Box>
    </Container>
  );
}
