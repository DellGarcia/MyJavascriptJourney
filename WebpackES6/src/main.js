import axios from 'axios';

const buscaUsuario = async usuario => {
    try {
        const res = await axios.get(`https://api.github.com/users/${usuario}`);
        console.log(res.data);
    } catch (error) {
        console.log('Usuário não existe');
    }
}
buscaUsuario('dellgarcia');
