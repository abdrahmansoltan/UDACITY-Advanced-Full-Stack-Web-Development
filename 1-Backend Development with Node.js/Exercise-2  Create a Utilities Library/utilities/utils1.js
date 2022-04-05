// Add numbers in an array
const sum = (arr) => {
  let total = 0;
  arr.forEach((x) => {
    total += x;
  });
  return total;
};

// Concatenate two arrays
const concat = (arr1, arr2) => {
  return [...arr1, ...arr2];
};

module.exports = {
  sum,
  concat,
};
