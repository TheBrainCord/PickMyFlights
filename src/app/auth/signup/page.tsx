// app/auth/signup/page.tsx
import AuthPages from '@/components/auth/AuthPages';
import AuthLayout from '@/components/auth/AuthLayout';

export default function SignupPage() {
  return (
    <AuthLayout>
      <AuthPages />
    </AuthLayout>
  );
}