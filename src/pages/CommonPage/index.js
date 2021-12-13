import React, { useContext } from 'react';
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
  return (
    <Layout pageTitle={pageTitle}>
      <DescriptionList sections={sections}/>
      {containsNews && <RegisterForm {...formData} />}
      <RecentNewsBlock />
    </Layout>
  );
}

export default CommonPage;