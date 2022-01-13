const compose = (fn1, fn2) => value => fn2(fn1(value))

// const map = cb => arr => arr.map(cb);
// const reduce = cb => arr => arr.reduce(cb); //Just currify the reduce function

// const mapWords = map(() => 1);
// const reduceWords = reduce((acc, curr) => acc += curr)(0)

// compose(reduceWords, mapWords)(['foo', 'bar', 'baz']); //3

// function composition of any number of functions
//const compose = (...fns) => x => fns.reduceRight((y, f) => f(y), x);
const double = x => x * 2
const square = x => x * x

// function composition
var output_final = compose(square, double)(2);
console.log(output_final);
