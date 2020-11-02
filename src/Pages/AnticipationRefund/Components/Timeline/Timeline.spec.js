import { formatTimeSpanToDefault } from '../../../../Common/date';
import { 
  getExpenseType,
  formatedApprovedValue
} from './Components/utils';

import timeline from '../../../../Mocks/timeline';

describe('QuickOps Timeline', () => {
  describe('Format Tiemline Data', () => {
    it('format header with correct type and purpose', () => {
      const date = formatTimeSpanToDefault(timeline.content[2].cardDate);
      expect(date).toEqual('24/03/2020');
    });
  });

  describe('Get value by Enum', () => {
    it('Get value by Enum of Expenses with type hotel-fee', () => {
      const purpose = getExpenseType(timeline.content[0].expenseTypeCode);
      expect(purpose).toEqual('Hotel');
    });

    it('Get value by Enum of Expenses with type foood', () => {
      const purpose = getExpenseType(timeline.content[1].expenseTypeCode);
      expect(purpose).toEqual('Alimentação');
    });
  });

  describe('Get format Value', () => {
    it('Get value with brazil symbol', () => {
      const formatValue = formatedApprovedValue(timeline.content[0].currencySymbol, timeline.content[0].amountTotal);
      expect(formatValue).toEqual('R$222.22');
    });
  });

});