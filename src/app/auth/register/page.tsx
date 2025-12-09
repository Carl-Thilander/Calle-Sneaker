import RegisterForm from "@/app/components/auth/register-form";
import { Suspense } from "react";

export default function RegisterPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <RegisterForm />
    </Suspense>
  );
}
