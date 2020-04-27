var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

var reposList = document.querySelector('#app ul#repos');

function getRepos(user) {
    return new Promise(function(resolve, reject) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', `https://api.github.com/users/${user}/repos`)
        xhr.send(null);

        xhr.onreadystatechange = function() {
            if(xhr.readyState === 4) {
                if(xhr.status === 200) {
                    resolve(JSON.parse(xhr.responseText));
                } else {
                    if(xhr.status === 404) {
                        alert('Usuario não existe')
                        
                    }
                    reject('Usuario nao existe')
                }
            } 
        }
    });
}

buttonElement.onclick = function() {
    const user = inputElement.value;
    reposList.innerHTML = ''
    reposList.appendChild(document.createElement('li').appendChild(document.createTextNode('Carregando...')));
    reposList.innerHTML = ''

    getRepos(user)
        .then(function(response) {
            response.map(repo => {
                let listElement = document.createElement('li')
                const elementValue = document.createTextNode(repo.name);

                listElement.appendChild(elementValue);
                reposList.appendChild(listElement);
            })
        })
        .catch(function(error) {
            
        })
}
