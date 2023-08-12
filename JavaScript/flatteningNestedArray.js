const nestedArray = [[1, 2], [3, 4], [5, 6]];
const flattened = nestedArray.reduce((accumulator, currentValue) => accumulator.concat(currentValue), []);
console.log(flattened); // Output: [1, 2, 3, 4, 5, 6]
