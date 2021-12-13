import React, { useContext } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { LoginContext } from 'contexts/LoginContextContainer';
import './styles.scss';

const RecentNewsBlock = () => {
  const { datas } = useContext(LoginContext);
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
        {/* <article className="news-item">
          <img className="image" src={NEWS_ITEM_IMG_2} alt="NewsItem"/>
          <div className="content">
            <h5 className="date">24th October 2021</h5>
            <h3 className="title">Lorem Ipsum is simply dummy text</h3>
            <p className="description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <span className="more-details">more <FaLongArrowAltRight /></span>
          </div>
        </article>
        <article className="news-item">
          <img className="image" src={NEWS_ITEM_IMG_3} alt="NewsItem"/>
          <div className="content">
            <h5 className="date">24th October 2021</h5>
            <h3 className="title">Lorem Ipsum is simply dummy text</h3>
            <p className="description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <span className="more-details">more <FaLongArrowAltRight /></span>
          </div>
          
        </article>
        <article className="news-item">
          <img className="image" src={NEWS_ITEM_IMG_4} alt="NewsItem"/>
          <div className="content">
            <h5 className="date">24th October 2021</h5>
            <h3 className="title">Lorem Ipsum is simply dummy text</h3>
            <p className="description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <span className="more-details">more <FaLongArrowAltRight /></span>
          </div>
        </article> */}
      </div>
    </section>  
  );
}

export default RecentNewsBlock;