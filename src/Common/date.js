

export const formatTimeSpanToDefault = (date) => {
  let newPatternData = new Date(date);

  return `${(`00${newPatternData.getDate()}`).slice(-2)}/${(`00${newPatternData.getMonth() + 1}`).slice(-2)}/${newPatternData.getFullYear()}`;
}