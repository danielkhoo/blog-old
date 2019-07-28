import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import OverviewProjectCard from '../../components/Overview/OverviewProjectCard';



const IndexPage: React.SFC = () => (
  <Layout>
    <SEO title="Projects" />
    <div className='overview-projects'>
      <OverviewProjectCard
        
        title={'TRUN'}
        href={'https://www.youtube.com/watch?v=ZVCYgMpj1ks'}
        description={'GPS-based Multiplayer Android Game'}
        tags={['Android', 'Firebase']}
        year='2018' />
      {/* <OverviewProjectCard />
    <OverviewProjectCard /> */}
    </div>
  </Layout>


);

export default IndexPage;
