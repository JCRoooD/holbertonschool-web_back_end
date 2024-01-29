function hasValuesFromArray(set, array) {
  const mark = array.every((item) => set.has(item));
  return mark;
}

export default hasValuesFromArray;
