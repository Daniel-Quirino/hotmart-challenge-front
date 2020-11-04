import { enumTypes , enumPurposes } from '../../../../Enum/Enum';

export const handleHeaderTitle = (header) => {
  
  if (!header || (!header.type && !header.purpose)) {
    return 'Reembolso ou Adiantamento...';
  } else if (!header.type) {
    return `Sem tipo - ${getPurposeByIdentifier(header.purpose)}`;
  } else if (!header.purpose) {
    return `${getTypeByIdentifier(header.type)} - Sem motivo`;
  }
  
  return getTypeByIdentifier(header.type)
          .concat(' - ')
          .concat(getPurposeByIdentifier(header.purpose));  
}

export const getTypeByIdentifier = (type) => {
  return enumTypes[type];
}

export const getPurposeByIdentifier = (purpose) => {
  return enumPurposes[purpose];
}


export const formatAmountOfPeople = (amountOfPeople) => {
  let formatText = ''

  if (amountOfPeople === 1) {
    formatText = '1 pessoa';
  } else if (amountOfPeople > 1) {
    formatText = `${amountOfPeople} pessoas`;
  } else {
    formatText = 'Nenhuma pessoa';
  }

  return formatText;
}
