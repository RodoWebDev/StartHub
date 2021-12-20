import React, { useContext } from 'react';
import { LoginContext } from 'contexts/LoginContextContainer';
import './styles.scss';

const Videos = () => {
  const { videos } = useContext(LoginContext);
  
  return(
    <section className="recent-news" id="news">
      <div className="container">
        {videos.map((video, index) => {
          const { applicationDate, businessType, email, fileUrl, firstName, lastName, originalname, phone } = video;
          return (
            <article className="news-item" key={index}>
              <video
                id={`video-${index}`}
                src={fileUrl}
                type="video/mp4"
                controls
              >
              </video>
              <div className="content">
                <h5 className="date">{`Application Date: ${applicationDate}`}</h5>
                <p className="description">{`Name: ${lastName}, ${firstName}`}</p>
                <p className="description">{`Email: ${email}`}</p>
                <p className="description">{`Business Type: ${businessType}`}</p>
                <p className="description">{`Title: ${originalname}`}</p>
                <p className="description">{`Phone: ${phone}`}</p>
              </div>          
            </article>
          )
        })}
      </div>
    </section>  
  );
}

export default Videos;