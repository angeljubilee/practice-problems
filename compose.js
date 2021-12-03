const compose = (fn1, fn2) => value => fn2(fn1(value))

const reduce = cb => arr => arr.reduce(cb); //Just currify the reduce function

const mapWords = map(() => 1);
const reduceWords = reduce((acc, curr) => acc += curr)(0)

compose(reduceWords, mapWords)(['foo', 'bar', 'baz']); //3
