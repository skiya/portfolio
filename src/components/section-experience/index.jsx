import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionExperience = ({ title, experience }) => {
  if (!experience.length) return null;

  return (
    <Section title={title}>
      {experience.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionExperience;
