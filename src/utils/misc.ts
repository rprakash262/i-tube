export const getUniqueArrayItems = (array: string[]) => {
  return array.filter((item, index) => array.indexOf(item) === index);
};
