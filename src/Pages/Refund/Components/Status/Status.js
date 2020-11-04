import './Status.scss';

const aproveText = () => {
  return (
    <span className='timeline__aprove_button'>
      Aprovado
    </span>
  )
}

const deductibleText = () => {
  return (
    <span className='timeline__dedutive_text'>
      Dedutível
    </span>
  )
}

const pendingText = () => {
  return (
    <span className='timeline__pending_text'>
      Pendente
    </span>
  )
}


export const formatedStatus = (status) => {
  let textStatus = <></>;

  switch(status) {
    case 'PENDING':
      textStatus = pendingText();
      break;
    case 'APPROVED':
      textStatus = aproveText();
      break;
    case 'DEDUCTIBLE':
      textStatus = deductibleText();
      break;
    default:
      textStatus = pendingText();
      break;
  }

  return textStatus;
}


export const openStatusCard = (status) => {
  return (
    <div className="status-container">
      <strong className="status-container__label_status">
        Status
      </strong>
      <span className="status-container__text_status">
        {status === 'OPEN' ? 'Concluído' : status}
      </span>
    </div>
  )
}
