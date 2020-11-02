import { enumExpenseTypes } from '../../../../Enum/Timeline';

export const getExpenseType = (type) => {
  return enumExpenseTypes[type];
}

export const formatedApprovedValue = (symbol, value) => {
  return `Valor da nota: ${symbol}  ${value}`
}

export const formatedSpentValue = (symbol, value) => {
  return `Valor aprovado: ${symbol}  ${value}`
}

