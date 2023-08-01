function formatCreditCard(cardNumber) {
    //get the last three digit 
    const lastDigits = cardNumber.slice(-3);
    const formatted = lastDigits.padStart(cardNumber.length, '*');
    return `${formatted}`;
}

function formatCreditCard1(cardNumber) {
    const firstDigits = cardNumber.slice(0, 2);
    const lastDigits = cardNumber.slice(-4);
    const asterisks = '*'.repeat(cardNumber.length - 6);
    return `${firstDigits}${asterisks}${lastDigits}`;
}
//method 1
const creditCardNumber = '9183645732827364';
const formattedCard = formatCreditCard(creditCardNumber);
console.log(formattedCard);
//o/p : "*************364"

//method 2
const formattedCard1 = formatCreditCard1(creditCardNumber);
console.log(formattedCard1);
//o/p : "91**********7364"
