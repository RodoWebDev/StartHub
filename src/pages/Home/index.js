import React, { useContext, useEffect } from 'react';
import ServicesBlock from 'components/ServicesBlock';
import ArchivedBlock from 'components/ArchivedBlock';
import RecentNewsBlock from 'components/RecentNewsBlock';
import Layout from '../../layout';
import { LoginContext } from 'contexts/LoginContextContainer';
import Spinner from 'components/Spinner';

const Home = () => {
  const { pagesLoading, datas } = useContext(LoginContext);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  if (pagesLoading || !datas[0].sections) {
		return <Spinner />;
	}

  return (
    <Layout type={'background'}>
      <ServicesBlock />
      <ArchivedBlock />
      <RecentNewsBlock />
    </Layout> 
  )
}

export default Home

