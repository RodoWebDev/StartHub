import React, { useContext } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from 'pages/Home';
import CommonPage from 'pages/CommonPage';
import { LoginContext } from 'contexts/LoginContextContainer';

export const PublicRoutes = () => {
  const { datas } = useContext(LoginContext);
  const subPages = datas?.filter(data => data.pageTitle !== "Home");
  return (
    <Switch>
      <Route exact path='/' component={ Home }/>
      {subPages.map(page => (
        <Route path={`/${page.type}`} exact component={CommonPage} key={page.id} />
      ))}
    </Switch>
  )
}

export const PrivateRoutes = () => {
  const { datas } = useContext(LoginContext);
  const subPages = datas?.filter(data => data.pageTitle !== "Home");
  return (
    <Switch>
      <Route exact path='/' component={ Home }/>
      {subPages.map(page => (
        <Route path={`/${page.type}`} exact component={CommonPage} key={page.id} />
      ))}
    </Switch>
  )
}
