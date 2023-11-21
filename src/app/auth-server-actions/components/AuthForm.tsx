'use client'

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/tabs";
import OAuthForm from "./OAuthForm";
import LoginForm from "@/components/UI/login-form/login-form";
import RegisterForm from "@/components/UI/register-form/register-form";

export function AuthForm() {
  return (
  <div className="w-full space-y-5">
    <Tabs defaultValue="signin" className="w-full">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="signin">SignIn</TabsTrigger>
        <TabsTrigger value="register">Register</TabsTrigger>
      </TabsList>
      <TabsContent value="signin">
        <LoginForm />
      </TabsContent>
      <TabsContent value="register">
        <RegisterForm />
      </TabsContent>
    </Tabs>
    <OAuthForm />
  </div>
  );
}

