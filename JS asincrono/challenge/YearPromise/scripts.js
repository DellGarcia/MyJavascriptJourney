var yearVerify = function(years) {
    return new Promise(function(resolve, reject) {
        (years >= 18) ? resolve("Tem mais de 18 anos"): reject("Não tem 18 anos"); 
    }); 
}

yearVerify(5)
    .then(function(response) {
        console.log(response)
    })
    .catch(function(error) {
        console.log(error)
    }) 
