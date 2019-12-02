import React from "react";
import Layout from "./layout";

const appWrapper = ({ children }) => {

  return (
    <Layout>
      {children}
    </Layout>
  )
}

export default appWrapper;
