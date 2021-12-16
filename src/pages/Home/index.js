import React, { useEffect } from 'react';
import ServicesBlock from 'components/ServicesBlock';
import ArchivedBlock from 'components/ArchivedBlock';
import RecentNewsBlock from 'components/RecentNewsBlock';
import Layout from '../../layout';

const Home = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Layout type={'background'}>
      <ServicesBlock />
      <ArchivedBlock />
      <RecentNewsBlock />
    </Layout> 
  )
}

export default Home

