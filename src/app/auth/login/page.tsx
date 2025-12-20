import AuthCard from "@/app/components/auth/AuthCard";
import LoginForm from "@/app/components/auth/login-form";

import { Typography } from "@mui/material";
import Link from "next/link";

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
