function formatCreditCard(cardNumber) {
    //get the last three digit 
    const lastDigits = cardNumber.slice(-3);
    const formatted = lastDigits.padStart(cardNumber.length, '*');
    return `${formatted}`;

}


const creditCardNumber = '9183645732827364';
const formattedCard = formatCreditCard(creditCardNumber);
console.log(formattedCard);
//o/p : "*************364"
