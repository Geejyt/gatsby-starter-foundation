import React from "react"
import { Link } from "gatsby"
import { RiArrowLeftSLine, RiBugLine, RiSkullLine } from "react-icons/ri"

import Seo from "../components/seo"
import Layout from "../components/layout"

const NotFound = () => (
  <Layout className="not-found-page">
    <Seo title="Page non trouvée" />
    <div
      className="wrapper"
      style={{
        textAlign: "center",
      }}
    >
      <header>
        <RiSkullLine
          style={{
            fontSize: "128px",
            color: "var(--primary-color)",
          }}
        />
        <h1>Oups, nous ne nous attendions pas à ce que cela se produise</h1>
        <p>
          Avez-vous demandé dans l'inconnu. Laissez-nous vous aider, veuillez jeter un œil aux options ci-dessous Avez-vous erré dans l'inconnu. Laissez-nous vous aider, veuillez jeter un œil aux options ci-dessous
        </p>
      </header>
      <Link to="/" className="button">
        <RiArrowLeftSLine className="icon -left" />
        Retour à la page d'accueil
      </Link>
      <Link to="/contact" className="button -outline">
        Signaler <RiBugLine className="icon -right" />
      </Link>
    </div>
  </Layout>
)

export default NotFound
