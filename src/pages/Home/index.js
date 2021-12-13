import React, { useContext, useEffect } from 'react';
import ServicesBlock from 'components/ServicesBlock';
import ArchivedBlock from 'components/ArchivedBlock';
import RecentNewsBlock from 'components/RecentNewsBlock';
import { LoginContext } from 'contexts/LoginContextContainer';
import Layout from '../../layout';

const Home = () => {
  const { datas } = useContext(LoginContext);
  const homePage = datas?.filter(data => data.pageTitle === "Home")[0];
  const { containsNews } = homePage;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Layout type={'background'}>
      <ServicesBlock />
      <ArchivedBlock />
      {containsNews && <RecentNewsBlock />}
    </Layout> 
  )
}

export default Home

