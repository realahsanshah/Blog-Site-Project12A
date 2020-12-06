import * as React from "react"
import HomeComponent from "../components/HomeComponent";
import Layout from "../Layout/Layout";

const IndexPage = () => {
  return (
    <div>
      <Layout title="Gatsby Blogs">
      <HomeComponent author="Ahsan Ali Shah" link="/blogs"/>
      </Layout>
    </div>
  )
}

export default IndexPage
