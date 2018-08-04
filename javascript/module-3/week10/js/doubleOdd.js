let numbers = [1, 2, 3, 4];
let doubleOddNumber = numbers
							.filter(number=>number %2 !==0)
							.map(oddNumber=> oddNumber*2);


console.log("The doubled odd numbers are", doubleOddNumber); // [2, 6]