import axios from 'axios';

const buscaUsuario = usuario => {
    try {
        const res = axios.get(`https://api.github.com/users/${usuario}`);
        console.log(res);
    } catch (error) {
        console.log('Usuário não existe');
    }
}
buscaUsuario('dellgarcia');
