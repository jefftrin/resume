import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Cloud = () => (
  <div>
    <SEO title="AWS Cloud" />
    <h1>Hi from the second page</h1>
    <p>Welcome to AWS Page</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Cloud
