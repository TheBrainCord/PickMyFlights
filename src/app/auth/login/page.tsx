// app/auth/login/page.tsx
import AuthPages from '@/components/auth/AuthPages';
import AuthLayout from '@/components/auth/AuthLayout';

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthPages />
    </AuthLayout>
  );
}

