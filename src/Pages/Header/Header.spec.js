import { handleHeaderTitle } from './utils';
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
});