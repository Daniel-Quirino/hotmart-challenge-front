import { handleHeaderTitle } from './utils';
import header from '../../Mocks/header';

describe('QuickOps Header', () => {
  describe('Format header', () => {
    it('format header with correct type and id', () => {
      const title = handleHeaderTitle(header);
      expect(title).toEqual('Reembolso - 756');
    });

    it('format header with type ADVANCE', () => {
      let mockTitle = {...header, type: 'ADVANCE'};
      const title = handleHeaderTitle(mockTitle);
      expect(title).toEqual('Adiantamento - 756');
    });

    it('format header with incorrect empty type', () => {
      let mockTitle = {...header, type: ''};
      const title = handleHeaderTitle(mockTitle);
      expect(title).toEqual('Reembolso ou Adiantamento...');
    });

    it('format header with incorrect empty id', () => {
      let mockTitle = {...header, id: ''};
      const title = handleHeaderTitle(mockTitle);
      expect(title).toEqual('Reembolso ou Adiantamento...');
    });




  });
});