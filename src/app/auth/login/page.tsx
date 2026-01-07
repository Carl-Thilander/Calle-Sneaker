import AuthCard from "@/app/components/auth/AuthCard";
import LoginForm from "@/app/components/auth/login-form";

import { Link, Typography } from "@mui/material";

export default function LoginPage() {
  return (
    <AuthCard
      title="Log in"
      subtitle="Welcome back. Continue your drafts and saved designs."
      footer={
        <Typography
          component={Link}
          color="text.primary"
          href="/auth/register"
          sx={{
            textDecoration: "none",
          }}
        >
          No account? Create one here!
        </Typography>
      }
    >
      <LoginForm />
    </AuthCard>
  );
}
