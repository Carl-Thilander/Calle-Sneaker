import AuthCard from "@/app/components/auth/AuthCard";
import RegisterForm from "@/app/components/auth/register-form";

export default function RegisterPage() {
  return (
    <AuthCard
      title="Register"
      subtitle="Create a new account in seconds!"
      footer={null}
    >
      <RegisterForm />
    </AuthCard>
  );
}
