# Fibonacci Interview Question

## The Problem Statement
Given a number N return the index value of the Fibonacci sequence, where the sequence is:

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, ...

## Why should I care?

The number shows up everywhere in nature. It's closely connected to the Golden Ratio.
Da Vinci was obsessed the Golden Ratio and it shows up quite a bit in art, design, and architecture.
Still don't care? Knowing several ways to solve this problem can help you demonstrate knowledge that
will allow you to demonstrate deeper knowledge of how to program.

## Why is Fibonacci a popular interview question?

Fibonacci can be solved both with and without recursion.
With recursion, one can implement memoization, allowing one to demonstrate a deeper knowledge of Javascript.
Even if it is a simple problem to solve, the way you solve it can tell an interviewer a lot about the way you code
and how good your communication skills are.
## Solving Without Recursion
```javascript
function fib(n) {
       const builder = [0, 1];
       for (let index = 2; index <= n; index++){
           builder.push(builder[index - 1] + builder[index - 2]);
       }
       return builder[n];
   }
```
This non-recursive solution builds an array where the last two values in the sequence can be added together to get the 
next number in the sequence. There are other non-recursive solutions, but this is the easiest I've yet found to understand.

## A One Line Recursive Solution
```javascript
const fib = n => n < 2 ? n : fib(n-1) + fib(n-2)
```
With arrow functions, returns are implicit. ```n < 2 ? n``` asks if the number is less than 2 and, if so, the number is returned.
So if the function were called with 0 or 1, 0 or 1 will be returned. 
If not, the function calls itself twice ```fib(n-1) + fib(n-2)``` and the two values will be added together. The code is terse,
but recursion is expensive. Very frequently, the function ```fib()``` will be called with values it's calculated previously.
That's where memoization becomes helpful. 

Memoization caches the results of previous function calls. It remembers the answer and returns it.
The can make a simple memoized version of our ```fib()``` function faster than the non recursive example.

## A simple Memoized Solution

```javascript
function fib(num, memo) {
  memo = memo || {};
  if (memo[num]) return memo[num];
  if (num <= 1) return num;
  return memo[num] = fib(num - 1, memo) + fib(num - 2, memo);
}
```

This code example can be found several places on the internet, but the best explanation of how it works can be 
[found here](https://scotch.io/tutorials/understanding-memoization-in-javascript#toc-case-study-the-fibonacci-sequence).

## But Wait, There's More: CLOSURE!!!

The article I just suggested you read glosses over it too quickly for my tastes, but if you make you a generalized memoization 
function rather than building one into ```fib()``` you can demonstrate that you understand Closure in JS. And this is a big deal. 
Closure is an interview question into itself, and memoization is one of the reasons you would use Closure. Fibonacci seqeunces
are a great example how to explain to an interviewer how closures work and how using them for memoization can lead
to performance improvements anytime a function is called more than once.

```javascript
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
```

const fibonacciMemoFunction = memoizer(fib)


