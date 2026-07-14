import type { Metadata } from "next";
import AuthLayout from "@/components/auth/AuthLayout";
import RegisterForm from "@/components/auth/RegisterForm";

export const metadata: Metadata = {
  title: "Create Account | MehndiGo - Book Premium Mehndi Artists",
  description: "Join MehndiGo today. Discover and book India's best professional verified Mehndi artists for weddings and festivals.",
};

export default function RegisterPage() {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
}
