import { withUnauthenticated } from "@/components/hocs/withUnauthenticated";
import { IndexTemplate } from "./Index.template";
import React from "react";
export const IndexPage = withUnauthenticated(() => {
  return <IndexTemplate />;
});
