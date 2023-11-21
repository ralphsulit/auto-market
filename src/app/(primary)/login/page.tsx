import LoginForm from "@/components/UI/login-form/login-form";
import { AuthForm } from "@/app/auth-server-actions/components/AuthForm";

import { jost } from '@/components/fonts';


export default function Login() {
  return (
    <div className="w-full max-w-sm p-6 my-8 m-auto mx-auto bg-white rounded-lg shadow-md">
      <AuthForm />
    </div>
  )
}