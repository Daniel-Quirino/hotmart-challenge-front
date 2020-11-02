import './Status.scss';

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

const pendingText = () => {
  return (
    <p className='timeline__pending_text'>
      Pendente
    </p>
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