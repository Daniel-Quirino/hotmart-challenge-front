import { enumExpenseTypes } from '../../../../Enum/Timeline';

export const getExpenseType = (type) => {
  return enumExpenseTypes[type];
}

export const formatedApprovedValue = (symbol, value) => {
  return symbol + value.toString();
}

