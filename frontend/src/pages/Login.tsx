import LoginForm from "@/components/LoginForm";
import { withUnauthenticated } from "@/components/hocs/withUnauthenticated";
import React from "react";

export const LoginPage = withUnauthenticated(() => {
  return <LoginForm />;
});
