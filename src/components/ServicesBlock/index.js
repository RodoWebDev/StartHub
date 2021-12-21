import React, { useContext } from 'react';
import { FaLongArrowAltRight } from 'react-icons/fa';
import { LoginContext } from 'contexts/LoginContextContainer';
import { BlockOrder } from 'utils/utils';
import './styles.scss';

const ServicesBlock = () => {
  const { datas } = useContext(LoginContext);
  const subPages = datas?.filter(data => data.pageTitle !== "Home");
  const blockData = datas?.filter(data => data.pageTitle === "Home")[0]?.sections?.filter(section => section.type === 'Business')[0];
  const { items, subTitle, description, action, title } = blockData;

  const getNumber = (num) => {
    return num < 10 ? `0${num}` : num;
  }

  return (
    <section className="services" id="services">
      <div className="services-block">
        <div className="services-title">
          <h1>{title}</h1>
        </div>
        <div className="services-container" >
          <div className="services-grid">
            {BlockOrder?.map((block, index) => {
              const page = subPages.filter(page => page.type === block)[0];
              if (page) {
                let url = `/${block}`;
                if (block === 'find-employees') {
                  url = 'https://www.isap.jobs'
                } else if (block === 'iSAP-domains') {
                  url = 'https://www.isap.domains'
                }
                return (
                  <a href={url} className="services-grid-cell" key={items[index].title}>
                    <div>
                      <h2 className="grid-cell-index">{getNumber(index + 1)}</h2>
                      <div className="grid-cell-container">
                        <span className="more-details-link">more <FaLongArrowAltRight /></span>
                        <div className="grid-cell-title">
                          <h2>{items[index].title}</h2>
                        </div>
                      </div>
                    </div>
                  </a>
                )
              } else {
                return null;
              }
            })}
          </div>
        </div>
        <div className="about-us">
          <article>
            <h2>{subTitle}</h2>
            <br />
            <span>{description}</span>
          </article>
          <br/>
          <span className="more-details-link">{action} <FaLongArrowAltRight /></span>
        </div>
      </div>
    </section>
  );
};

export default ServicesBlock;