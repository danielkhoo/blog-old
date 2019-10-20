import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import OverviewProjectCard from '../../components/Overview/OverviewProjectCard';



const IndexPage: React.SFC = () => (
  <Layout showSideBar={true}>
    <SEO title="Projects" />
    <div className='overview-projects'>
      <OverviewProjectCard
        title={'nric'}
        href={'https://www.npmjs.com/package/nric'}
        description={'An npm library for generating and validating Singapore NRIC numbers'}
        dotColor={'#f1e05a'}
        tags={['Javascript', 'NPM']}
        year='2019'
        shield={'https://img.shields.io/npm/dw/nric?label=npm%20downloads&style=flat-square'}
      />
      <OverviewProjectCard
        title={'Graduate Employment Visualisation'}
        href={'https://danielkhoo.github.io/ges'}
        description={'A visualisation of employmenet and salary data by school and degree from GES 2018'}
        dotColor={'rgb(97, 218, 251)'}
        tags={['React', 'd3']}
        year='2019' />
      <OverviewProjectCard
        title={'TRUN'}
        href={'https://www.youtube.com/watch?v=ZVCYgMpj1ks'}
        description={'A TRON-inspired GPS-based Multiplayer Android Game. Like Snake but players have to run for real'}
        dotColor={'#689f38'}
        tags={['Android', 'Firebase']}
        year='2018' />
    </div>
  </Layout>


);

export default IndexPage;
