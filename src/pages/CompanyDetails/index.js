import CompanyRegisterDetails from 'components/CompanyRegisterDetails';
import React, { useEffect } from 'react';
import Layout from '../../layout';

const CompanyDetails = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <Layout>
      <CompanyRegisterDetails />
    </Layout> 
  )
}

export default CompanyDetails

