import headerTypes from '../../Enum/HeaderTypes';

export const handleHeaderTitle = (header) => {
  if(!header || !header.type || !header.id) return 'Reembolso ou Adiantamento...';
  const { type, id } = header;
  const SPACING = ' - ';

  return headerTypes[type]
          .concat(SPACING)
          .concat(id.toString());  
}