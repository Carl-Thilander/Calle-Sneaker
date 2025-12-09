import { Box, Container, Typography } from "@mui/material";

export default function ProfilePage() {
  return (
    <Container>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Typography>Hello User! </Typography>
        <Typography>If you can read this, then you have an account!</Typography>
      </Box>
    </Container>
  );
}
