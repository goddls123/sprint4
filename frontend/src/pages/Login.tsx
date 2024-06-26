import LoginForm from "@/components/LoginForm";
import { withUnauthenticated } from "@/components/hocs/withUnauthenticated";

export const LoginPage = withUnauthenticated(() => {
  return <LoginForm />;
});
