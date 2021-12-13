import React from 'react';
import "./styles.scss";

const DescriptionList = (props) => {
  const { sections } = props;
  return (
    <section id="description">
      <div className="description-item">
        {sections?.map((section, i) => (
          <dl key={i}>
            <dt>{section.subTitle}</dt>
            <br />
            {section.description?.map((desc, index) => (
              <dd key={index}>
                {desc}
              </dd>
            ))}
          </dl>
        ))}
      </div>
    </section>
  );
}

export default DescriptionList;