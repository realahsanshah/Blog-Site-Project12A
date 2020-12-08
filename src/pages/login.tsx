import * as React from "react"
import LoginComponent from "../components/LoginComponent";
import Layout from "../Layout/Layout";

const LoginPage = () => {
  return (
    <div>
      <Layout title="Gatsby Blogs">
      <LoginComponent/>
      </Layout>
    </div>
  )
}

export default LoginPage
