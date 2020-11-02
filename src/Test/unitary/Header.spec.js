import { 
  handleHeaderTitle, 
  getTypeByIdentifier, 
  getPurposeByIdentifier, 
  formatAmountOfPeople
} from '../../Pages/AnticipationRefund/Components/Header/utils';

import header from '../../Mocks/header';

describe('QuickOps Header', () => {
  describe('Format header', () => {
    it('format header with correct type and purpose', () => {
      const title = handleHeaderTitle(header);
      expect(title).toEqual('Reembolso - Confraternização');
    });

    it('format header with type ADVANCE and purpose empty', () => {
      let mockTitle = {...header, type: 'ADVANCE', purpose: ''};
      const title = handleHeaderTitle(mockTitle);
      expect(title).toEqual('Adiantamento - Sem motivo');
    });

    it('format header with incorrect empty type and FRATERNIZATION purpose', () => {
      let mockTitle = {...header, type: '', purpose: 'FRATERNIZATION'};
      const title = handleHeaderTitle(mockTitle);
      expect(title).toEqual('Sem tipo - Confraternização');
    });
  });

  describe('Get value by Enum', () => {
    it('Get value by Enum of Purpose', () => {
      const purpose = getPurposeByIdentifier(header.purpose);
      expect(purpose).toEqual('Confraternização');
    });

    it('Get value by Enum of Type', () => {
      const type = getTypeByIdentifier(header.type);
      expect(type).toEqual('Reembolso');
    });
  });

  describe('Format Amount of peoople', () => {
    it('Get format by 0 person', () => {
      const amountOfPeople = formatAmountOfPeople(0);
      expect(amountOfPeople).toEqual('Nenhuma pessoa');
    });

    it('Get format by 1 person', () => {
      const amountOfPeople = formatAmountOfPeople(header.accountabilityExtraInfo.amountOfPeople);
      expect(amountOfPeople).toEqual('1 pessoa');
    });

    it('Get format by 4 person', () => {
      const amountOfPeople = formatAmountOfPeople(4);
      expect(amountOfPeople).toEqual('4 pessoas');
    });
  });
});