// Rest
function soma(...params) {
    return params.reduce((total, next) => {
        return total + next;
    })
}

console.log(soma(10, 10, 4, 1));

// Spread
const arr = [1,2,3];
const arr2 = [4,5,6];

const arr3 = [...arr, ...arr2];

console.log(arr3);

/**/

const user = {
    name: 'Lucas',
    age: 18,
}

const user2 = {...user, name: 'Diego'};

console.log(user2);