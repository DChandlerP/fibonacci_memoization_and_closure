//Non-Recursive Solution
// function fib(n) {
//     const builder = [0, 1];
//     for (let index = 2; index <= n; index++){
//         builder.push(builder[index - 1] + builder[index - 2]);
//     }
//     return builder[n];
// }

//Simple Recursive One liner. It's slow as recursion is expensive
//const fib = n => n < 2 ? n : fib(n-1) + fib(n-2)

//Simple Example of Memoization
// function fib(num, memo) {
//   memo = memo || {};
//   if (memo[num]) return memo[num];
//   if (num <= 1) return num;
//   return memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
// }

//memoization with closure!!!
function memoizer(fun){
    let cache = {};
    return function (n){
        if (cache[n] !== undefined ) {
            return cache[n]
        } else {
            let result = fun(n);
            cache[n] = result;
            return result
        }
    }
}

const fib1 = n => n < 2 ? n : fib1(n-1) + fib1(n-2);

const fib = memoizer(fib1)

module.exports = fib;