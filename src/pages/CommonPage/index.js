import React, { useContext, useEffect } from 'react';
import DescriptionList from 'components/DescriptionList';
import RegisterForm from 'components/RegisterForm';
import RecentNewsBlock from 'components/RecentNewsBlock';
import { LoginContext } from 'contexts/LoginContextContainer';
import Layout from 'layout';
import Spinner from 'components/Spinner';
import Videos from 'components/Videos';

const CommonPage = (props) => {
  const { match } = props;
  const { pagesLoading, datas } = useContext(LoginContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

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
  return (
    <Layout pageTitle={pageTitle}>
      <DescriptionList sections={sections}/>
      {containsNews && <RegisterForm {...formData} />}
      {type === 'projects' && <Videos />}
      <RecentNewsBlock />
    </Layout>
  );
}

export default CommonPage;
