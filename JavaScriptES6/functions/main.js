const arr = [1, 3, 4, 5, 8, 9];

console.log(arr);

const newArr = arr.map(function(item, index){ 
    return item + index;
});

console.log(newArr);

const sum = arr.reduce(function(total, next) {
    return total + next;
});

console.log(sum);

const filter = arr.filter(function(item) {
    return item % 2 === 0;
});

console.log(filter);

const find = arr.find(item => {
    return item === 4;
});

console.log(find);

// Arrow function
const arrow = arr.map(item => item * 2);

console.log(arrow);