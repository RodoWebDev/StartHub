import React from 'react';
import { Link } from 'react-router-dom';
import './styles.scss';
const ServicesBlock = () => {

  return (
    <section className="services" id="services">
      <div className="services-block">
        <div className="services-title">
          <h1>Set up your business today</h1>
        </div>
        <div className="services-container" >
          <div className="services-grid">
            <div className="services-grid-cell">
              <Link to="/business-register" >
                <h2 className="grid-cell-index">01</h2>
                <div className="grid-cell-container">
                  <span className="more-details-link">more <i className="fas fa-long-arrow-alt-right"></i></span>
                  <div className="grid-cell-title">
                    <h2>Business Registration</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="services-grid-cell">
              <Link offset="0" to="/patenting-register">
                <h2 className="grid-cell-index">02</h2>
                <div className="grid-cell-container">
                  <span className="more-details-link">more <i className="fas fa-long-arrow-alt-right"></i></span>
                  <div className="grid-cell-title">
                    <h2>Patenting</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="services-grid-cell">
              <Link to="/licensing-register">
              <h2 className="grid-cell-index">03</h2>
              <div className="grid-cell-container">
                <span className="more-details-link">more <i className="fas fa-long-arrow-alt-right"></i></span>
                <div className="grid-cell-title">
                  <h2>Licensing</h2>
                </div>
              </div>
              </Link>
            </div>
            <div className="services-grid-cell">
              <Link to="/stream-register">
                <h2 className="grid-cell-index">04</h2>
                <div className="grid-cell-container">
                  <span className="more-details-link">more <i className="fas fa-long-arrow-alt-right"></i></span>
                  <div className="grid-cell-title">
                    <h2>Investor's Pitch Stream</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="services-grid-cell">
              <Link to="/residency-register">
                <h2 className="grid-cell-index">05</h2>
                <div className="grid-cell-container">
                  <span className="more-details-link">more <i className="fas fa-long-arrow-alt-right"></i></span>
                  <div className="grid-cell-title">
                    <h2>Residency Visa Packages</h2>
                  </div>
                </div>
              </Link>
            </div>
            <div className="services-grid-cell">
              <Link to="/funding-register">
                <h2 className="grid-cell-index">06</h2>
                <div className="grid-cell-container">
                  <span className="more-details-link">more <i className="fas fa-long-arrow-alt-right"></i></span>
                  <div className="grid-cell-title">
                    <h2>Crowd Funding</h2>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="about-us">
          <article>
            <h2>About us</h2>
            <br />
            <span>
              Dubai-based Start up consultancy with global 
              reach. StartHub Agency has a proven track 
              record of helping businesses of all sizes, from 
              global banks to start-ups. We are passionate 
              about helping our customers across our three 
              disciplines; strategy, design and registering in 
              short time.
            </span>
          </article>
          <br/>
          <span className="more-details-link">more <i className="fas fa-long-arrow-alt-right"></i></span>
        </div>
      </div>
    </section>
  );
};

export default ServicesBlock;