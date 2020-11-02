import React, { useEffect } from 'react';

import { renderExpenseCard } from './Components/Cards/ExpansiveCard';
import { Store } from '../../../../Infrastructure/Store/Store';
import doGetTimeline from '../../../../Infrastructure/Actions/Timeline';

import './Timeline.scss';


const Timeline = () => {
  const { state, dispatch } = React.useContext(Store);
  const [ timeline, setTimeline ] = React.useState([]);

  useEffect(() => {
    doGetTimeline(dispatch);
  }, []);

  useEffect(() => {
    if(state.timeline) setTimeline(state.timeline);
  }, [state]);

  const renderTimelineList = () => {
    return (
      timeline.content.map((itemTimeline) => {
        switch(itemTimeline.cardType  ) {
          case 'EXPENSE':
            return renderExpenseCard(itemTimeline);
          case 'ACCOUNTABILITY_SUBMITTED':
            return renderExpenseCard(itemTimeline);
          case 'ACCOUNTABILITY_CREATED':
            return renderExpenseCard(itemTimeline);
          case 'EVALUATION':
            return renderExpenseCard(itemTimeline);
          default:
            return <div key={itemTimeline.id}></div>
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
  
  
  if(!timeline.content)
    return <></>

  return (
    <div className='timeline' >
      {renderTimeline()}
    </div>
  );
}

export default Timeline;

