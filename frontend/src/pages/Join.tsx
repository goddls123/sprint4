import JoinForm from "@/components/JoinForm";
import { withUnauthenticated } from "@/components/hocs/withUnauthenticated";
import React from "react";
export const JoinPage = withUnauthenticated(() => {
  return <JoinForm />;
});
