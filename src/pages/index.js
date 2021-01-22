import * as React from "react"
import Portfolio from "./Portfolio/Portfolio"
import { Helmet } from "react-helmet"
import logo from '../images/icon.png';
const IndexPage = () => {
  return (
    <main>
      <Helmet>
          <meta charSet="utf-8" />
          <title>Kit Harvey Caubalejo | Portfolio</title>
          <meta name="description" content="A front-end web developer's portfolio." />
          <link rel="icon" type = "image/x-icon" href={logo} />
        </Helmet>
      <Portfolio />
    </main>
  )
}

export default IndexPage
