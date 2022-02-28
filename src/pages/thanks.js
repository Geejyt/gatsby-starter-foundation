import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiCheckboxCircleLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const Thanks = () => (
  <Layout className="thanks-page">
    <Seo title="Merci" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <RiCheckboxCircleLine
        style={{
          fontSize: "128px",
          color: "var(--primary-color)",
        }}
      />
      <h1>J'ai reçu votre message</h1>
      <p>Merci de nous avoir contactés. Nous vous répondrons sous peu.</p>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Revenons à la page d'accueil
      </Link>
    </div>
  </Layout>
)

export default Thanks
