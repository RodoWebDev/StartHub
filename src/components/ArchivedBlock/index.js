import React from 'react';
import archived_bg_img from 'assets/images/archived-bg.png';
import './styles.scss';

const ArchivedBlock = () => {
  return(
    <section className="archived">
      <div className="container">
        <div className="background-image">
          <img  className="image" src={archived_bg_img} alt="Archived_Image"></img>
        </div>
        <div className="title">
          <h3>Take your business to Greater Hights in Dubai with StartHub</h3>
        </div>
        <div className="context">
          <div className="archived-item">
            <h5>Registered Businesses</h5>
            <h2>+ 8540</h2>
          </div>
          <div className="archived-item">
            <h5>Patents &amp; Licenses</h5>
            <h2>+ 3580</h2>
          </div>
          <div className="archived-item">
            <h5>Successes</h5>
            <h2>100%</h2>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ArchivedBlock;