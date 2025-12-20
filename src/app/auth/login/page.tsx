import AuthCard from "@/app/components/Auth/AuthCard";
import LoginForm from "@/app/components/Auth/login-form";
import { Link, Typography } from "@mui/material";

export default function LoginPage() {
  return (
    <AuthCard
      title="Log in"
      subtitle="Welcome back. Continue your drafts and saved designs."
      footer={
        <Typography color="text.primary">
          No account?{" "}
          <Link href="/auth/register" color="text.primary">
            Create one here
          </Link>
        </Typography>
      }
    >
      <LoginForm />
    </AuthCard>
  );
}
