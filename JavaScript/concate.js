const names = ['abcd', 'efgh', 'ijklm'];
const concatenated = names.reduce((accumulator, currentValue) => accumulator + ' ' + currentValue, '');
console.log(concatenated); // Output: "abcd efgh ijklm"
