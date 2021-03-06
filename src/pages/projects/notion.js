import React from "react"
import Layout from "../../components/App"
import SEO from "../../components/seo"
import { graphql } from "gatsby" 
import Img from "gatsby-image" 
import ProjectOverview from "../../components/ProjectOverview"
import ProjectGallery from "../../components/ProjectGallery"
import ProjectText from "../../components/ProjectText"
import ServicesList from "../../components/ServicesList"
import Quote from "../../components/Quote"
import Pagination from "../../components/Pagination"
import Helmet from 'react-helmet'
import MediaQuery from 'react-responsive'

const servicesItems = ['Art Direction', 'Branding', 'Brand Strategy', 'Illustration', 'Print Design', 'Social Media', 'Website Build', 'Website Design'];
const quoteSource = ['Nicholas Douglas, MD, Notion'];
const quoteText = ['Working with Back To Front has really helped us understand and develop our brand identity, website and full digital potential more than any previous web development agencies we\'d previously worked with. After our relaunch we doubled our digital readership in under a year. Its no coincidence this is partly due to Back To Front\'s knowledge and creativity within the world of the web.'];


const ProjectNotion = ( { data } ) => (

  <Layout>

    <Helmet htmlAttributes={{class: 'project-notion'}}/>

    <SEO 
      title="Notion"
      description="We re-launched Notion’s digitial offerings. Helping to double their online readership in less than a year"
    />

    <ProjectText>

      <ProjectOverview
        title="Notion"
        text="We re-launched Notion’s digitial offerings. Helping to double their online readership in less than a year."
        linkName="notion.online"
        linkURL="https://notion.online"
        link2Name="studionotion.online"
        link2URL="https://studionotion.online"
        >

        <ServicesList list={servicesItems} />

      </ProjectOverview>

      <MediaQuery minWidth={768}>
        <Quote
          source={quoteSource}
          text={quoteText}
        />
      </MediaQuery>

    </ProjectText>

    <ProjectGallery>
      <Img
        fluid={data.imgNotion1.childImageSharp.fluid}
        alt="Notion"
      />
      <Img
        fluid={data.imgNotion2.childImageSharp.fluid}
        alt="Notion"
      />
      <Img
        fluid={data.imgNotion3.childImageSharp.fluid}
        alt="Notion"
      />
      <Img
        fluid={data.imgNotion4.childImageSharp.fluid}
        alt="Notion"
      />
      <Img
        fluid={data.imgNotion5.childImageSharp.fluid}
        alt="Notion"
      />
      <Img
        fluid={data.imgNotion6.childImageSharp.fluid}
        alt="Notion"
      />            
    </ProjectGallery>

    <MediaQuery maxWidth={767}>
      <Quote
        source={quoteSource}
        text={quoteText}
      />
    </MediaQuery>
       
    <Pagination
      linkBefore="/projects/rosetta-arts"
      linkMore="/projects/pished-fish"
    />

  </Layout>
)

export const query = graphql`
  query {
    imgNotion1: file(relativePath: { eq: "projects/project_gallery_notion_1.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgNotion2: file(relativePath: { eq: "projects/project_gallery_notion_2.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgNotion3: file(relativePath: { eq: "projects/project_gallery_notion_3.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgNotion4: file(relativePath: { eq: "projects/project_gallery_notion_4.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgNotion5: file(relativePath: { eq: "projects/project_gallery_notion_5.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },
    imgNotion6: file(relativePath: { eq: "projects/project_gallery_notion_6.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1070, quality: 90) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    },       
  } 
  
`

export default ProjectNotion