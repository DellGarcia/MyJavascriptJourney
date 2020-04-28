// 3.1
const arr = [1, 2, 3, 4, 5];
arr.map(function(item) {
 return item + 10;
});

// Arrow
arr.map(item => item + 10);

// 3.2
const usuario = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}
mostraIdade(usuario);

// Arrow
const showAge = usuario => usuario.idade;
showAge();

// 3.3
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);

// Arrow
const showUser = (nome = 'Diego', idade = 18) => {nome, idade};
showUser();


// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
    })
}

// Arrow
const arrowPromise = () => new Promise( (resolve,reject) => resolve() );