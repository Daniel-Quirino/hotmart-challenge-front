import headerTypes from './Enum/HeaderTypes';

export const handleHeaderTitle = (header) => {
  if(!header || !header.type) return 'Reembolso ou Adiantamento...';
  const { type, id } = header;
  const SPACING = ' - ';

  console.log(headerTypes);

  console.log(header)
  console.log(type);
  console.log(headerTypes[type])

  return headerTypes[type]
          .concat(SPACING)
          .concat(id.toString());  
}