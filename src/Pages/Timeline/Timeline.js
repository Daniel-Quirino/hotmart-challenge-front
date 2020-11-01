import React, { useEffect } from 'react';

import { Store } from '../../Infrastructure/Store/Store';

import './Timeline.scss';

const renderIcon = () => {
  return (
    <div className='timeline__icon'>
      <div className='timeline__icon-flex'>            
        <div className='timeline__icon-radius'></div>
        <p className='timeline__label'>21/05/2019</p>
      </div>
    </div>
  )
}


const renderTimelineData = (className, label, data) => {
  return (
    <li className={className}>
      <p className='timeline__label'> {label} </p>
      <p className='timeline__label'> {data} </p>
    </li>  
  )
}

const renderReceipt = () => {
  return (
    <li className='timeline__receipt'>
      <a href='http://localhost:3000'> Ver recebido</a>
    </li>
  )
}


const Timeline = () => {
  const { state } = React.useContext(Store);

  useEffect(() => {
    console.log(state);
  });

  return (
    <li className='timeline' >
      <ul className='timeline__grid ' >
        {renderIcon()}
        {renderTimelineData('timeline__action', 'Ação', 'Pagamento Realizado')}
        {renderTimelineData('timeline__value', 'Valor', 'BRL 3.458,94')}
        {renderTimelineData('timeline__note', 'Observação', 'Depositamos na conta 12345-32, agência 123, Banco Itaú')}
        {renderReceipt()}
      </ul>
    </li>
  );
}

export default Timeline;

