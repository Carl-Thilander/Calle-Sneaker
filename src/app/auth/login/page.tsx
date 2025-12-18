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
        <Typography color="rgba(255,255,255,0.7)">
          No account?{" "}
          <Link
            href="/auth/register"
            style={{ color: "rgba(255,255,255,0.9)" }}
          >
            Create one
          </Link>
        </Typography>
      }
    >
      <LoginForm />
    </AuthCard>
  );
}
