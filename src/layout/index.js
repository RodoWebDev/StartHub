import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from 'layout/Header';
import HeaderWithBackground from 'layout/HeaderWithBackground';
import './styles.scss';

const Layout = (props) => {
  const { children, type = 'no-background', pageTitle = '' } = props
  return (
    <>
      {type === 'background' && <HeaderWithBackground />}
      {type === 'no-background' && <Header title={pageTitle} />}
      <main>
        {children}
      </main>
    </>
  )
}

export default withRouter(Layout)
