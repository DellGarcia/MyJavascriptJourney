import axios from 'axios';

class Api {
    static async getUser(username) {
        try {
            const response = await axios.get(`https://api.github.com/users/${username}`);
            console.log(response);
        } catch(err) {
            console.warn("Erro na Api");
        }
    }
}

Api.getUser('dellgarcia');