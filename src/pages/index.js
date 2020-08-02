import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => 
{
  console.log(data);
  return (
    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Layout>
  )
}
export const query = graphql`
{
  datoCmsHomepage
  {
  	sections
    {
      ... on DatoCmsAboutUsSection
      {
        titolo
        descrizione
        immagine
        {
          url
        }
      }
      ... on DatoCmsAboutCodingBunkerSection
      {
        titolo
        descrizione
        immagine
        {
          url
        }
      }	
      ... on DatoCmsEventSection
      {
        carte
        {
          tipoCarta
          {
            ... on DatoCmsEvento
            {
              dataEvento
            }
          }
        }
      }
      ... on DatoCmsDiscordSection
  		{
        immagineDiscord
        {
          url
        }
        immagineBackground
        {
          url
        }
        descrizione
        linkDiscord
        {
          nome
          link
        }
      }
      ... on DatoCmsProjectSection
      {
        titolo
        descrizione
        linkPaginaProgetti
        progetti
        {
          tipoCarta{
            ... on DatoCmsProgetto
            {
              immagine
              {
                url
              }
            }
          }
        }
      }
      ... on DatoCmsQuoteSection
      {
        riferimentoQuote
        {
          nomeStaff
          testoCitato
          immagineStaff {
            url
          }
          ruoloStaff
        }
      }
      ... on DatoCmsPartnerSection
      {
        partners
        {
          immaginePartner
          {
            url
          }
        }
      }
    }
  }
}`



export default IndexPage
