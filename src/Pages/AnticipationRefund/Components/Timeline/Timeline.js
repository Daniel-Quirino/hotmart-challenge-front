import React, { useEffect } from 'react';

import { Store } from '../../../../Infrastructure/Store/Store';
import doGetTimeline from '../../../../Infrastructure/Actions/Timeline';
import { renderFontAwesomeIcon } from './Components/Icons';
import { formatTimeSpanToDefault } from '../../../../Common/date';

import './Timeline.scss';
import timeline from '../../../../Mocks/timeline';


const renderExpanseCardIconData = (item) => {
  return (
    <li className='timeline__icon'>
      <div className='timeline__icon-flex'>            
        <div className='timeline__icon-radius'>
          {renderFontAwesomeIcon(item.cardType, item.expenseTypeCode)}
        </div>
      <p className='timeline__text'>{formatTimeSpanToDefault(item.cardDate)}</p>
      </div>
    </li>
  )
}


const renderExpanseCardAction = (label, strongText, text) => {
  return (
    <li className='timeline__action'>
      <p className='timeline__label'> {label} </p>
      <p className='timeline__strong_text'> {strongText} </p>
      <p className='timeline__text'> {text} </p>
    </li>
  )
}

const renderExpanseCardValue = (label, strongText, text) => {
  return (
    <li className='timeline__value'>
      <p className='timeline__label'> {label} </p>
      <p className='timeline__strong_text'> {strongText} </p>
      <p className='timeline__text'> {text} </p>
    </li>
  )
}

const renderExpanseCardStatus = (label, aproveButtonText, deductibleButtonText, text) => {
  return (
    <li className='timeline__status'>
      <p className='timeline__label'> {label} </p>
      {aproveText()}
      {deductibleText()}
      <p className='timeline__text'> {text} </p>
    </li>
  )
}

const aproveText = () => {
  return (
    <p className='timeline__aprove_button'>
      Aprovado
    </p>
  )
}

const deductibleText = () => {
  return (
    <p className='timeline__dedutive_text'>
      Dedutível
    </p>
  )
}

const renderExpanseCardReceipt = () => {
  return (
    <li className='timeline__receipt'>
      <a href='http://localhost:3000' className='timeline__link'>
        {renderFontAwesomeIcon('RECEIPT')} Ver nota fiscal
      </a>
    </li>
  )
}

const renderExpenseCard = (item) => {
  return (
    <li className='timeline__grid'>
      {renderExpanseCardIconData(item)}
      {renderExpanseCardAction('Ação', 'Almoço', 'Almoço com cliente')}
      {renderExpanseCardValue('Valor', 'BRL 3.458,94', 'Valor da nota: BRL 220,00')}
      {renderExpanseCardStatus('Status', 'Aprovado', 'Dedutível', 'Valor aprovação 220,00')}
      {renderExpanseCardReceipt()}
    </li>
  )
}

const renderTimelineList = () => {
  return (
    timeline.content.map(itemTimeline => {
      switch(itemTimeline.cardType  ) {
        case 'EXPENSE':
          return renderExpenseCard(itemTimeline);
        case 'ACCOUNTABILITY_SUBMITTED':
          return renderExpenseCard(itemTimeline);
        case 'EVALUATION':
          return renderExpenseCard(itemTimeline);
        default:
          return <></>
      }
    })
  )
}

const renderTimeline = () => {
  return (
    <ul className='flex_column' >
      {renderTimelineList()}
    </ul>
  )
}


const Timeline = () => {
  const { state, dispatch } = React.useContext(Store);
  const [ timeline, setTimeline ] = React.useState([]);

  useEffect(() => {
    doGetTimeline(dispatch);
  }, []);

  useEffect(() => {
    if(state.timeline) setTimeline(state.timeline);
  }, [state]);

  if(!timeline)
    return <></>

  return (
    <div className='timeline' >
      {renderTimeline()}
    </div>
  );
}

export default Timeline;

