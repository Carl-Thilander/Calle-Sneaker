import LoginForm from "@/app/components/auth/login-form";
import { Suspense } from "react";

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
