// PROGRAM FOR EVEN AND ODD
const enterNumber = 13;
let even = "even";
let odd = "odd";
let result;

if (enterNumber % 2===0) {
    result = "The number " + enterNumber + " is " + even;
}
else {
    result = "The number " + enterNumber + " is " + odd;
}

console.log(result);
