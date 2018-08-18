let arr = [];
for (let i = 1; i <= 1000; i++) {
    arr.push(i);
}
console.log(arr);

// here please start your solution
// using closures, functions and (map,filter,reduce)
const divisibleFactory = function(z) {
    return function() {
        return arr.filter((number) => {
            return number % z === 0;
        });
    }
}
const divisbleBy3 = divisibleFactory(3);
const divisbleBy10 = divisibleFactory(10);
const divisbleBy21 = divisibleFactory(21);
console.log(divisbleBy3());
console.log(divisbleBy10());
console.log(divisbleBy21());

function createNumbersArray() {
    let totalDivisibleNumbers = [];

    for (let i = 1; i <= 30; i++) {
        totalDivisibleNumbers.push(divisibleFactory(i)().length);
    }

    return totalDivisibleNumbers;
}


// html output
document.getElementById("homework2_2").innerHTML = `${
  divisbleBy3()
}`
document.getElementById("homework2_3").innerHTML = `${
  divisbleBy10()
}`
document.getElementById("homework2_4").innerHTML = `${
  divisbleBy21()
}`
document.getElementById("homework2_5").innerHTML = `${
  createNumbersArray()
}`