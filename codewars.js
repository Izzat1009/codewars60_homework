//
function swapValues(arr) {
    var temp = arr[0];
    arr[0] = arr[1];
    arr[1] = temp;
}

//
function digitize(n) {
    return String(n).split('').map(Number);
}

//
function take(arr, n) {
    return arr.slice(0, n);
}
//
function fizzbuzz(n) {
    let result = [];
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(i);
        }
    }
    return result;
}
//
function isPowerOfTwo(n) {
    if (n <= 0) {
        return false; 
    }
    return (n & (n - 1)) === 0;
}
//
function reverse(string) {
    return string.trim().split(' ').reverse().join(' ');
}