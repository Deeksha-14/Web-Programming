const fruits = ['apple', 'orange', 'banana', 'apple', 'apple'];
const fruitCount = fruits.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(fruitCount); // Output: { apple: 3, orange: 1, banana: 1 }
