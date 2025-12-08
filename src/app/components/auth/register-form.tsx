import { Box, Button, Container, Link, TextField } from "@mui/material";
import AuthCard from "./AuthCard";

export default function RegisterForm() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
      }}
    >
      <AuthCard title="Create your account below" subtitle="">
        <Box
          component="form"
          sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
        >
          <TextField label="Name" type="text" fullWidth required />
          <TextField label="Email" type="email" fullWidth required />
          <TextField label="Password" type="password" fullWidth required />
          <TextField
            label="Re-enter your password"
            type="password"
            fullWidth
            required
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2, borderRadius: 5 }}
          >
            Create Acount
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
