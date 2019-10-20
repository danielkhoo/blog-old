import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import './index.scss'
import OverviewBlogCard from '../components/Overview/OverviewBlogCard';
export interface IPost {
  path: string,
  date: string,
  title: string,
  description: string
}
const IndexPage = ({ data }) => {
  const { edges } = data.allMarkdownRemark; // data.allMarkdownRemark.edges holds our post data
  const posts: IPost[] = edges.map((edge) => {
    return edge.node.frontmatter as IPost
  })

  return (
    <Layout showSideBar={true}>
      <SEO title="Home" />
      <div className='overview-blog'>
        {posts.map((post) =>
          <OverviewBlogCard
            title={post.title}
            path={post.path}
            date={post.date}
            description={post.description}
          />
        )}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query {
      allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }, limit: 1000) {
        edges {
          node {
            frontmatter {
              path
              date
              title
              description
            }
          }
        }
      }
  }
`

export default IndexPage
