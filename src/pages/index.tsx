import React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Banner from "../components/Main/Banner"

const IndexPage = () => (
  <>
    <Layout>
      <Banner />
      <Link to="/about">More Info</Link>
    </Layout>
  </>
)

export default IndexPage
