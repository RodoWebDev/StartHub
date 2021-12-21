import React, { useContext, useEffect } from 'react';
import DescriptionList from 'components/DescriptionList';
import RegisterForm from 'components/RegisterForm';
import RecentNewsBlock from 'components/RecentNewsBlock';
import { LoginContext } from 'contexts/LoginContextContainer';
import Layout from 'layout';
import Spinner from 'components/Spinner';
import Videos from 'components/Videos';
import KYC from 'components/KYC';

const CommonPage = (props) => {
  const { match } = props;
  const { pagesLoading, datas } = useContext(LoginContext);

  useEffect(() => {
    window.scrollTo(0, 0);
    const componentType = match.path.replace('/', '');
    console.log('componentType =>', componentType)
    if (componentType === 'find-employees') {
      window.location.href = 'https://www.isap.jobs'
    } else if (componentType === 'iSAP-domains') {
      window.location.href = 'https://www.isap.domains'
    }
  }, [match.path])

  if (pagesLoading || !datas[0].sections) {
		return <Spinner />;
	}
  const componentType = match.path.replace('/', '');
  const currentPage = datas?.filter(data => data.type === componentType)[0];
  const { type, pageTitle, sections, containsNews, formType, formTitle, submitButtonText, dropText } = currentPage;
  const formData = {
    type,
    formType,
    formTitle,
    submitButtonText,
    dropText,
  }
  console.log('type =>', type)
  return (
    <Layout pageTitle={pageTitle}>
      <DescriptionList sections={sections}/>
      {containsNews && <RegisterForm {...formData} />}
      {type === 'projects' && <Videos />}
      {type === 'kyc' && <KYC />}
      <RecentNewsBlock />
    </Layout>
  );
}

export default CommonPage;
