const arr = [1, 2, 3, 4, 5, 6];

const [ x, ...y ] = arr;

console.log(x);
console.log(y);

const soma = (...params) => params.reduce((total, next) => total + next);

console.log(soma(1, 2, 3, 4, 5, 6)); // 21
console.log(soma(1, 2)); // 3
