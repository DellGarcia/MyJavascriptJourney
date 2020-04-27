const user = {
    name: "Lucas",
    age: 17,
    adress: {
        city: "São Paulo",
        uf: "SP"
    },
}

const { name, age, adress: { city, uf } } = user;

console.log(name);
console.log(city);
console.log(uf);