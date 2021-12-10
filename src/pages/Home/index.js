import React from 'react';
import ServicesBlock from 'components/ServicesBlock';
import ArchivedBlock from 'components/ArchivedBlock';
import RecentNewsBlock from 'components/RecentNewsBlock';
import Layout from '../../layout';
import './styles.scss';

const Home = () => {
  return (
    <Layout>
      <ServicesBlock />
      <ArchivedBlock />
      <RecentNewsBlock />
    </Layout> 
  )
}

export default Home

