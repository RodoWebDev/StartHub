import React from 'react';
import DescriptionList from 'components/DescriptionList';
import RegisterForm from 'components/RegisterForm';
import RecentNewsBlock from 'components/RecentNewsBlock';
import Layout from '../../layout';
import "./styles.scss";

const FundingRegister = () => {
  return (
    <Layout pageTitle="Crowd Funding">
      <DescriptionList registerType="business"/>
      <RegisterForm registerType="business"/>
      <RecentNewsBlock />
    </Layout>
  );
}

export default FundingRegister;
