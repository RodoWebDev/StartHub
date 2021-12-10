import React from 'react';
import DescriptionList from 'components/DescriptionList';
import RegisterForm from 'components/RegisterForm';
import RecentNewsBlock from 'components/RecentNewsBlock';
import Layout from '../../layout';
import "./styles.scss";

const StreamRegister = () => {
  return (
    <Layout pageTitle="Investor's Pitch Stream">
      <DescriptionList registerType="business"/>
      <RegisterForm registerType="business"/>
      <RecentNewsBlock />
    </Layout>
  );
}

export default StreamRegister;
