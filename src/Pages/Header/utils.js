import { enumTypes , enumPurposes } from '../../Enum/Header';

export const handleHeaderTitle = (header) => {
  
  if (!header || (!header.type && !header.purpose)) {
    return 'Reembolso ou Adiantamento...';
  } else if (!header.type) {
    return `Sem tipo - ${enumPurposes[header.purpose]}`;
  } else if (!header.purpose) {
    return `${enumTypes[header.type]} - Sem motivo`;
  }
  
  return enumTypes[header.type]
          .concat(' - ')
          .concat(enumPurposes[header.purpose]);  
}
