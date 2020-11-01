import React from 'react';
import QuickOps from '../QuickOps';
import Timeline from '../Timeline';

import './Home.scss';

const Home = () => {
  console.log('Passou aqui')
  return (
      <div>
        <QuickOps />
        <Timeline />
      </div>
  );
}

export default Home;
