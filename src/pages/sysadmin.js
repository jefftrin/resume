import React from "react"
import { Link } from "gatsby"
import SEO from "../components/seo"

const Sysadmin = () => (
  <div>
    <SEO title="SysAdmin" />
    <h1>Hi from the second page</h1>
    <p>Welcome to Systems Admin Page</p>
    <Link to="/">Go back to the homepage</Link>
  </div>
)

export default Sysadmin
