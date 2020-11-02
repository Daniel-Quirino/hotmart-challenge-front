import { renderFontAwesomeIcon } from '../Icons/Icons';
import { formatTimeSpanToDefault } from '../../../../../../Common/date';
import { formatCardType } from './utils'
import { formatedStatus } from '../Cards/Status';
import { formatedSpentValue } from './utils';

import './EvaluationCard.scss';

const renderExpanseCardIconData = (item) => {
  return (
    <li className='timeline__icon' key={item.id+item.cardDate}>
      <div className='timeline__icon-flex'>            
        <div className='timeline__icon-radius'>
          {renderFontAwesomeIcon(item.cardType, item.expenseTypeCode)}
        </div>
      <p className='timeline__text'>{formatTimeSpanToDefault(item.cardDate)}</p>
      </div>
    </li>
  )
}

const renderExpanseCardtype = (label, strongText, text) => {
  return (
    <li className='timeline__type' key={label + text}>
      <p className='timeline__label'> {label} </p>
      <p className='timeline__strong_text'> {strongText} </p>
      <p className='timeline__text'> {text} </p>
    </li>
  )
}

const renderExpanseCardStatus = (label, status, text) => {
  return (
    <li className='timeline__status' key={label + text}>
      <p className='timeline__label'> {label} </p>
      {formatedStatus(status)}
      <p className='timeline__text'> {text} </p>
    </li>
  )
}

const renderExpanseCardReceipt = (id) => {
  return (
    <li className='timeline__receipt' key={id}>
      <a href='http://localhost:3000' className='timeline__link'>
        {renderFontAwesomeIcon('RECEIPT')} Ver nota fiscal
      </a>
    </li>
  )
}

export const evaluationCard = (item) => {
  return (
    <ul className='timeline__grid' key={item.id}>
      {renderExpanseCardIconData(item)}
      {renderExpanseCardtype('Tipo', formatCardType(item.cardType, item.author.name))}
      {renderExpanseCardStatus('Status', item.status, formatedSpentValue(item.currencySymbol, item.amountSpent))}
      {renderExpanseCardReceipt(item.id)}
    </ul>
  )
}
