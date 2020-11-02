import React from 'react';
import Header from './Components/Header';
import Timeline from './Components/Timeline';

import './AnticipationRefund.scss';

const AnticipationRefund = () => {
  console.log('Passou aqui')
  return (
      <div className='quick_ops'>
        <Header />
        <Timeline />
      </div>
  );
}

export default AnticipationRefund;
