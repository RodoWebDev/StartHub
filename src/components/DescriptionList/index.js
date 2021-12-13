import React from 'react';
import "./styles.scss";

const DescriptionList = (props) => {
  const { sections } = props;
  return (
    <section id="description">
      <div className="description-item">
        {sections?.map(section => (
          <dl key={section.id}>
            <dt>{section.subTitle}</dt>
            <br />
            {section.descriptions.map((desc, index) => (
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