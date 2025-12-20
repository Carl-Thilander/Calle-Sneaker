import AuthCard from "@/app/components/Auth/AuthCard";
import RegisterForm from "@/app/components/Auth/register-form";

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
