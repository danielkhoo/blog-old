import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HelloWorld from './posts/HelloWorld';
import './index.scss'
const IndexPage = () => {
  return (
    <Layout>

      <SEO title="Home" />
      <div className='blog'>
        <HelloWorld
          key='Hello World'
          title={'Hello World'}
          href={'/posts/hello-world'}
          description={'GPS-based Multiplayer Android Game'}
          date='28 / 07 / 2018' />
      </div>
    </Layout>
  )
}
export default IndexPage
