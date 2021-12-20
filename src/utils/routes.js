import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import CommonPage from 'pages/CommonPage';
import { LoginContext } from 'contexts/LoginContextContainer';
import Spinner from 'components/Spinner';
import CompanyDetails from 'pages/CompanyDetails';

export const PublicRoutes = () => {
  const { datas, pagesLoading, companyId } = useContext(LoginContext);
  const subPages = datas?.filter(data => data.pageTitle !== "Home");
	if (pagesLoading || !datas[0].sections) {
		return <Spinner />;
	}
  return (
    <Switch>
      <Route exact path='/' component={ Home }/>
      {companyId && <Route exact path='/details' component={ CompanyDetails }/>}
      <Route exact path='/details' component={ CompanyDetails }/>
      {subPages?.map((page, index) => (
        <Route path={`/${page.type}`} exact component={CommonPage} key={index} />
      ))}
    </Switch>
  )
}

export const PrivateRoutes = () => {
  const { datas, companyId } = useContext(LoginContext);
  const subPages = datas?.filter(data => data.pageTitle !== "Home");
  return (
    <Switch>
      <Route exact path='/' component={ Home }/>
      {companyId && <Route exact path='/details' component={ CompanyDetails }/>}
      <Route exact path='/details' component={ CompanyDetails }/>
      {subPages.map((page, index) => (
        <Route path={`/${page.type}`} exact component={CommonPage} key={index} />
      ))}
    </Switch>
  )
}
