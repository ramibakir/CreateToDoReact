import React from 'react';

const Title = (info) => (
  <>
    <section id="headerFlex">
      <h2>{info.title}</h2>
      <h2>{info.name}</h2>
    </section>
  </>
);

export default Title;
