import { Box, Button, Container, Link, TextField } from "@mui/material";
import AuthCard from "../components/AuthCard";

export default async function LoginPage() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
      }}
    >
      <AuthCard title="Welcome Back!" subtitle="Please log in to your account">
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
        >
          <TextField label="Email" type="email" fullWidth required />
          <TextField label="Password" type="password" fullWidth required />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Log In
          </Button>

          <Box textAlign="center" mt={2}>
            <Link href="/auth/register" style={{ textDecoration: "none" }}>
              Dont't have an account yet? Create one here!
            </Link>
          </Box>
        </Box>
      </AuthCard>
    </Container>
  );
}
