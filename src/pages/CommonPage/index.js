import React, { useContext, useEffect } from 'react';
import DescriptionList from 'components/DescriptionList';
import RegisterForm from 'components/RegisterForm';
import RecentNewsBlock from 'components/RecentNewsBlock';
import { LoginContext } from 'contexts/LoginContextContainer';
import Layout from 'layout';

const CommonPage = (props) => {
  const { match } = props;
  const { datas } = useContext(LoginContext);
  const componentType = match.path.replace('/', '');
  const currentPage = datas?.filter(data => data.type === componentType)[0];
  const { pageTitle, sections, containsNews, formType, formTitle, submitButtonText, dropText } = currentPage;
  const formData = {
    formType,
    formTitle,
    submitButtonText,
    dropText,
  }

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  return (
    <Layout pageTitle={pageTitle}>
      <DescriptionList sections={sections}/>
      <RegisterForm {...formData} />
      {containsNews && <RecentNewsBlock />}
    </Layout>
  );
}

export default CommonPage;
