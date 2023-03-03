const areEquals = (arr1, arr2) => {
  return arr1.length === arr2.length && arr1.every((el) => arr2.includes(el));
};
module.exports = { areEquals };
