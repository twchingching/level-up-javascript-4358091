// Write your code here
/*
using the array reduce function to calculate the total bill
from a trip to the coffee shpo with your friends
[2,3,1,5]
Price per coffee = $1.25
sum of coffees = $13.75
"The total bill is ${total}"
*/

function coffee(coffeeArray) {
  let coffeeSum = coffeeArray.reduce(
    (totalCoffees, numCoffee) => (totalCoffees += numCoffee)
  );
  return `The total bill is $${coffeeSum * 1.25}`;
}

console.log(coffee([2, 5, 7, 1, 4]));
