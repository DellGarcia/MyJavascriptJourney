const usuario = {
    nome: 'Rocketseat',
    endereco: {
        cidade: 'Rio do Sul',
        estado: 'SC',
    }
};
   
const { nome, endereco: { cidade, estado } } = usuario;

console.log(nome)
console.log(cidade)
console.log(estado)


function mostraInfo({ nome, idade }) {
    return `${nome} tem ${idade} anos.`;
}
console.log(mostraInfo({ nome: 'Lucas', idade: 17 }));
   