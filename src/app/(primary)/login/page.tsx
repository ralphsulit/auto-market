import LoginForm from "@/app/ui/login-form/login-form";


export default function Login() {
  return (
    <div className="w-full max-w-sm p-6 my-8 m-auto mx-auto bg-white rounded-lg shadow-md">
      <div className="flex justify-center mx-auto text-2xl">
        Sign In
      </div>
      <LoginForm />
    </div>
  )
}