import { renderFontAwesomeIcon } from '../../../Icons/Icons';
import { formatTimeSpanToDefault } from '../../../../../../Common/date';
import { formatCardType } from '../utils'
import './AccountAbilityCard.scss';

export const renderExpanseCardIconData = (item) => {
  return (
    <li className='timeline__icon' key={item.id+item.cardDate}>
      <div className='timeline__icon-flex'>            
        <div className='timeline__icon-radius'>
          {renderFontAwesomeIcon(item.cardType, item.expenseTypeCode)}
        </div>
      <span className='timeline__text'>{formatTimeSpanToDefault(item.cardDate)}</span>
      </div>
    </li>
  )
}

const renderExpanseCardtype = (label, strongText, text) => {
  return (
    <li className='timeline__type' key={label + text}>
      <span className='timeline__label'> {label} </span>
      <span className='timeline__strong_text'> {strongText} </span>
      <span className='timeline__text'> {text} </span>
    </li>
  )
}

export const renderAccountAbilityCard = (item) => {
  return (
    <ul className='timeline__grid' key={item.id}>
      {renderExpanseCardIconData(item)}
      {renderExpanseCardtype('Tipo', formatCardType(item.cardType, item.author.name))}
    </ul>
  )
}
