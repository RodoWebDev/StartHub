import React from 'react'
import { withRouter } from 'react-router-dom'
import Header from 'layout/Header';
import HeaderWithBackground from 'layout/HeaderWithBackground';
import Navbar from 'components/Navbar';
import Footer from 'components/Footer';
import './styles.scss';

const Layout = (props) => {
  const { children, type = 'no-background', pageTitle = '' } = props
  return (
    <>
      <Navbar />
      {type === 'background' && <HeaderWithBackground />}
      {type === 'no-background' && <Header title={pageTitle} />}
      <main>
        {children}
      </main>
      <Footer />
    </>
  )
}

export default withRouter(Layout)
