import LoginForm from "@/app/components/auth/login-form";
import { Suspense } from "react";

export default function LoginInPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  );
}
