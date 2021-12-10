import React from 'react';
import { Link } from 'react-router-dom';
import { FaLongArrowAltRight } from 'react-icons/fa';
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
            <Link to="/business-register" className="services-grid-cell">
              <div>
                <h2 className="grid-cell-index">01</h2>
                <div className="grid-cell-container">
                  <span className="more-details-link">more <FaLongArrowAltRight /></span>
                  <div className="grid-cell-title">
                    <h2>Business Registration</h2>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/patenting-register" className="services-grid-cell">
              <div>
                <h2 className="grid-cell-index">02</h2>
                <div className="grid-cell-container">
                  <span className="more-details-link">more <FaLongArrowAltRight /></span>
                  <div className="grid-cell-title">
                    <h2>Patenting</h2>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/licensing-register" className="services-grid-cell">
              <div>
                <h2 className="grid-cell-index">03</h2>
                <div className="grid-cell-container">
                  <span className="more-details-link">more <FaLongArrowAltRight /></span>
                  <div className="grid-cell-title">
                    <h2>Licensing</h2>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/stream-register" className="services-grid-cell">
              <div>
                <h2 className="grid-cell-index">04</h2>
                <div className="grid-cell-container">
                  <span className="more-details-link">more <FaLongArrowAltRight /></span>
                  <div className="grid-cell-title">
                    <h2>Investor's Pitch Stream</h2>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/residency-register" className="services-grid-cell">
              <div>
                <h2 className="grid-cell-index">05</h2>
                <div className="grid-cell-container">
                  <span className="more-details-link">more <FaLongArrowAltRight /></span>
                  <div className="grid-cell-title">
                    <h2>Residency Visa Packages</h2>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/funding-register" className="services-grid-cell">
              <div>
                <h2 className="grid-cell-index">06</h2>
                <div className="grid-cell-container">
                  <span className="more-details-link">more <FaLongArrowAltRight /></span>
                  <div className="grid-cell-title">
                    <h2>Crowd Funding</h2>
                  </div>
                </div>
              </div>
            </Link>
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
          <span className="more-details-link">more <FaLongArrowAltRight /></span>
        </div>
      </div>
    </section>
  );
};

export default ServicesBlock;