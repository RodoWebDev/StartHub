import React, { useContext } from 'react';
import archived_bg_img from 'assets/images/archived-bg.png';
import { LoginContext } from 'contexts/LoginContextContainer';
import './styles.scss';

const ArchivedBlock = () => {
  const { datas } = useContext(LoginContext);
  const homePage = datas?.filter(data => data.pageTitle === 'Home')[0];
  const newsData = homePage?.sections?.filter(section => section.type === 'Status')[0];
  const { title, items } = newsData;

  return(
    <section className="archived">
      <div className="container">
        <div className="background-image">
          <img  className="image" src={archived_bg_img} alt="Archived_Image"></img>
        </div>
        <div className="title">
          <h3>{title}</h3>
        </div>
        <div className="context">
          {items.map(item => {
            const { id, subTitle, value } = item;
            return (
              <div className="archived-item" key={id}>
                <h5>{subTitle}</h5>
                {id !== 3 && <h2>+ {value}</h2>}
                {id === 3 && <h2>{value}%</h2>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ArchivedBlock;