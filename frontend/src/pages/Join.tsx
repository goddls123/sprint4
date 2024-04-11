import JoinForm, { JoinFormProps } from "@/components/JoinForm";
import { withUnauthenticated } from "@/components/hocs/withUnauthenticated";
import { useJoin } from "@/hooks/useJoin";
import { useNavigate } from "react-router";
export const JoinPage = withUnauthenticated(() => {
  const { join } = useJoin();
  const navigate = useNavigate();
  const onSubmit = async (data: JoinFormProps) => {
    const { result, message } = await join(data);
    if (result === "unauthorized") {
      return alert(message);
    } else if (result === "success") {
      alert("회원가입에 성공하였습니다.");
      return navigate("/login");
    }
  };
  return <JoinForm onSubmit={onSubmit} />;
});
