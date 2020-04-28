const minhaPromise = () => new Promise(() => {
    setTimeout(() => console.log('OPA'), 2000);
});

async function executa() {
    console.log(await minhaPromise());
    console.log(await minhaPromise());
    console.log(await minhaPromise());
}

executa();