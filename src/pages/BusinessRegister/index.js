import React from 'react';
import DescriptionList from 'components/DescriptionList';
import RegisterForm from 'components/RegisterForm';
import RecentNewsBlock from 'components/RecentNewsBlock';
import Layout from '../../layout';

const BusinessRegister = () => {
  return (
    <Layout pageTitle="Register your business">
      <DescriptionList registerType="business"/>
      <RegisterForm registerType="business"/>
      <RecentNewsBlock />
    </Layout>
  );
}

export default BusinessRegister;
