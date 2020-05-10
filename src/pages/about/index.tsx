import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import OverviewBlogCard from '../../components/Overview/OverviewBlogCard';
// @ts-ignore: SVG Import
import githubSVG from '../../images/github.svg';
import Icon from '../../components/Icon';


const IndexPage: React.SFC = () => (
  <Layout>
    <SEO title="About" />
    <p>Hello there! Welcome to my blog/portfolio/storeroom for work, side-projects and procrastinations.</p>
    <i>"The most creative work is done while avoiding other work"</i>
    <h4>Links</h4>
    <a title='github' href='https://github.com/danielkhoo'>
      <Icon width={40} height={40} SVG={githubSVG} />
    </a>


  </Layout>


);

export default IndexPage;
