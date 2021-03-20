function sumFibonacci(num) {
  if (num <= 0) {
    return 0;
  } else {
    var fib = [1, 1, 2, 3, 5, 8, 13];
    for (var i = 1; i < num + 1; i + 2) {
      fib.push(fib[num - 1] + fib[num - 2]);
      return fib[num];
    }
  }
}

console.log(sumFibonacci(1));
console.log(sumFibonacci(10));
console.log(sumFibonacci(20));
console.log(sumFibonacci(4));
console.log(sumFibonacci(-5));
module.exports = sumFibonacci;
