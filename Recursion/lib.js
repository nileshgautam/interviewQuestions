/**
 * This method is used to get power of given number
 * 
 * @param {int} base 
 * @param {int} exponent 
 * @returns 
 */
const power = (base, exponent) => {
    if (exponent === 0) return 1;
    return base * power(base, exponent - 1);
}

/**
 * This function is used to get factorial of given numbers
 * 
 * @param {int} base 
 * @param {int} exponent 
 * @returns 
 */
const factorial = (base) => {
    if (base === 0) return 1;
    return base * factorial(base - 1);
}
/**
 * This function is used to get product of given array
 * 
 * @param {int} base 
 * @param {int} exponent 
 * @returns int
 */
const poa = (arr) => {
    if (arr.length === 0) return 1;
    return arr[0] * poa(arr.slice(1));
}

/**
 * 
 * @param string string 
 * @returns string
 */
function reverse(string) {
    let reversed = "";
    if (string.length === 0) return 1;
    for (let char of string) {
        reversed = char + reversed;
    }
    return reversed;
}

/**
 * This function is used to return recursive range of given number;
 * 
 * @param int num 
 * @returns 
 */
function recursiveRane(num) {
    if (num === 0) return 0;
    return num + recursiveRane(num - 1);
}

function fibonacci(num) {
    if (num <= 2) return 1;
    return fibonacci(num - 1) + fibonacci(num - 2);

}

function fib(n){
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}


console.log(fibonacci(5))
console.log(fib(5))

// console.log(recursiveRane(5));
// console.log(reverse('Anil'));
// console.log(poa([5, 10,]));
// console.log(factorial(10));
// console.log(power(5, 5));

