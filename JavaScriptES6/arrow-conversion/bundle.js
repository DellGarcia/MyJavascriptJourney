"use strict";

// 3.1
var arr = [1, 2, 3, 4, 5];
arr.map(function (item) {
  return item + 10;
}); // Arrow

arr.map(function (item) {
  return item + 10;
}); // 3.2

var usuario = {
  nome: 'Diego',
  idade: 23
};

function mostraIdade(usuario) {
  return usuario.idade;
}

mostraIdade(usuario); // Arrow

var showAge = function showAge(usuario) {
  return usuario.idade;
};

showAge(); // 3.3

var nome = "Diego";
var idade = 23;

function mostraUsuario() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  return {
    nome: nome,
    idade: idade
  };
}

mostraUsuario(nome, idade);
mostraUsuario(nome); // Arrow

var showUser = function showUser() {
  var nome = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'Diego';
  var idade = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
  nome, idade;
};

showUser(); // 3.4

var promise = function promise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
}; // Arrow


var arrowPromise = function arrowPromise() {
  return new Promise(function (resolve, reject) {
    return resolve();
  });
};
