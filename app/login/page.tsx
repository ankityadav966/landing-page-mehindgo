import type { Metadata } from "next";
import AuthLayout from "@/components/auth/AuthLayout";
import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Login | MehndiGo - Book Premium Mehndi Artists",
  description: "Sign in to your MehndiGo account to book professional verified Mehndi artists at your convenience.",
};

export default function LoginPage() {
  return (
    <AuthLayout>
      <LoginForm />
    </AuthLayout>
  );
}
