import React from 'react';
import NEWS_ITEM_IMG_1 from 'assets/images/news-item-1.png';
import NEWS_ITEM_IMG_2 from 'assets/images/news-item-2.png';
import NEWS_ITEM_IMG_3 from 'assets/images/news-item-3.png';
import NEWS_ITEM_IMG_4 from 'assets/images/news-item-4.png';
import { FaLongArrowAltRight } from 'react-icons/fa';
import './styles.scss';

const RecentNewsBlock = () => {
  return(
    <section className="recent-news" id="news">
      <div className="title">
        <h2>Recent News</h2>
      </div>
      <div className="container">
        <article className="news-item">
          <img className="image" src={NEWS_ITEM_IMG_1} alt="NewsItem"/>
          <div className="content">
            <h5 className="date">24th October 2021</h5>
            <h3 className="title">Lorem Ipsum is simply dummy text</h3>
            <p className="description">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book</p>
            <span className="more-details">more <FaLongArrowAltRight /></span>
          </div>
          
        </article>
        <article className="news-item">
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
        </article>
      </div>
    </section>  
  );
}

export default RecentNewsBlock;