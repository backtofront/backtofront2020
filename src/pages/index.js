import React from "react"
import Layout from "../components/App"
import SEO from "../components/seo"
import ContentBlockGif from "../components/ContentBlockGif"
import CardWide from "../components/CardWide"
import { graphql } from "gatsby" 
import Img from "gatsby-image" 
import styled from 'styled-components'
import Heading from "../components/Heading"
import Helmet from 'react-helmet'
import { Link } from "gatsby"

const ProjectsGroup = styled.div`
  display: grid;
  grid-template-columns: 100%;
  grid-gap: 10px;
`
const ProjectsGroupTitle = styled(Heading)`
  padding-top: 20px;
`

const AboutLink = styled(Link)`
  &:link, &:visited {
    color: #fff;
    padding-bottom: 1px;
    border-bottom: 2px solid ${({ theme }) => theme.colorLightBlue};
  }
  &:hover, &:active, &:focus {
    color: ${({ theme }) => theme.colorLightBlue};
  }
`

const IndexPage = (  { data } ) => (

  <Layout>

    <Helmet htmlAttributes={{class: 'page-home'}}/>

    <SEO 
      title="We design brands and we build websites"
      description="We hand-pick our team for your brief using our network of talented designers, developers, writers, animators and everything in between"
    />

    <ContentBlockGif> 
      <Heading
        text="We design brands and we build websites for brand-new businesses, or businesses trying something brand-new."
        tag="h1"
      />
      <p>Our people are the very best at what they do, but our services are surprisingly affordable because of <AboutLink to="/about/">how we choose to work</AboutLink>.</p>
      <p>We love what we do and are proud of our long term relationships; we continue to partner with all of the clients shown here.</p>
    </ContentBlockGif>

    <ProjectsGroupTitle
      text="How our work works"
      tag="h1"
    />

    <ProjectsGroup>
      <CardWide
        text="We partnered with a New York mortgage disruptor to go from MVP to market within ten weeks"
        link="/projects/zenden"
        >
        <Img
          fluid={data.imgZenden.childImageSharp.fluid}
          alt="Zenden"
        />
      </CardWide>
      <CardWide
        text="We made a smoked salmon company leap from garden shed hobby to the shelves of Harrods, Selfridges &amp; Waitrose"
        link="/projects/pished-fish"
        >
        <Img
          fluid={data.imgPishedfish.childImageSharp.fluid}
          alt="Pished Fish"
        />
      </CardWide>
      <CardWide
        text="We re-launched Notion’s digitial offerings. Helping to double their online readership in less than a year"
        link="/projects/notion"
        >
        <Img
          fluid={data.imgNotion.childImageSharp.fluid}
          alt="Notion"
        />
      </CardWide>
    </ProjectsGroup>

  </Layout>
)

export const query = graphql`
  query {
    imgZenden: file(relativePath: { eq: "projects/project_gallery_zenden_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgNotion: file(relativePath: { eq: "projects/project_gallery_notion_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgPishedfish: file(relativePath: { eq: "projects/project_gallery_pished_fish_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
  } 
  
`

export default IndexPage