import React, { useContext } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { LoginContext } from 'contexts/LoginContextContainer';
import Spinner from 'components/Spinner';
import './styles.scss';

const RecentNewsBlock = () => {
  const { datas, pagesLoading } = useContext(LoginContext);
  if (pagesLoading || !datas[0].sections) {
		return <Spinner />;
	}
  const homePage = datas?.filter(data => data.pageTitle === 'Home')[0];
  const newsData = homePage?.sections?.filter(section => section.type === 'News')[0];
  const { title, items } = newsData;
  return(
    <section className="recent-news" id="news">
      <div className="title">
        <h2>{title}</h2>
      </div>
      <div className="container">
        {items.map((item, index) => {
          const { createdAt, imgUrl, title, description, action } = item;
          return (
            <article className="news-item" key={index}>
              <img className="image" src={imgUrl} alt="NewsItem"/>
              <div className="content">
                <h5 className="date">{createdAt}</h5>
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
                <span className="more-details">{action}<FaLongArrowAltRight /></span>
              </div>          
            </article>
          )
        })}
      </div>
    </section>  
  );
}

export default RecentNewsBlock;