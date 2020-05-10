import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
// @ts-ignore: SVG Import
import githubSVG from '../../images/github.svg';
import Icon from '../../components/Icon';


const IndexPage: React.SFC = () => (
  <Layout>
    <SEO title="About" />
    <h1 className='font-serif text-4xl font-normal'>About</h1>
    <div className='font-serif text-xl'>
      <p>Hello there! Welcome to my blog/portfolio/storeroom for work, side-projects and procrastinations.</p>
      <i>"The most creative work is done while avoiding other work"</i>
      <div className='my-10'>

        <a title='github' href='https://github.com/danielkhoo'>
          <Icon width={40} height={40} SVG={githubSVG} />
        </a>
      </div>
    </div>
  </Layout>
);

export default IndexPage;
