const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

const idades = usuarios.map(usuario => usuario.idade);

const user = usuarios.filter(usuario => {
    return usuario.idade > 18 && usuario.empresa === 'Rocketseat';
})

const google = usuarios.find(usuario => usuario.empresa === 'Google');

const double = usuarios.map(usuario => ({...usuario, idade: usuario.idade * 2}));
const filtro = double.filter(usuario => usuario.idade <= 50);

console.log(idades)
console.log(user)
console.log(google)
console.log(filtro)