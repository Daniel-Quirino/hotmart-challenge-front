import { enumExpenseTypes, enumCardTypes } from '../../../../../Enum/Timeline';

export const getExpenseType = (type) => {
  return enumExpenseTypes[type];
}

export const formatCardType = (type, name) => {
  return `${enumCardTypes[type]} ${name}`;
}

export const formatedApprovedValue = (symbol, value) => {
  return symbol + value;
}

export const formatedSpentValue = (symbol, value) => {
  return `Valor aprovado: ${symbol}  ${value}`
}

