import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Article from '../components/article'

const IndexPage = () => (
  <Layout>
    <div className="page">
      <SEO title="Home - blog" keywords={ ['blog', 'gatsby'] } />
      <Article />
    </div>
  </Layout>
)

export default IndexPage
