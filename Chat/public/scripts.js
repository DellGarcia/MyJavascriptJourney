var socket = io('http://localhost:3000')

function renderMessage(message) {
    $('.messages').append(`<div class="message"><strong>${message.author}:</strong> ${message.message}</div>`);
}

// Recebe messagens anteriores ao entrar no server
socket.on('previousMessages', messages => {
    for (message of messages) {
        renderMessage(message);
    }
})

// Dispara sempre que uma messagem é recebida pelo server
socket.on('recivedMessage', message => {
    renderMessage(message);
})

// Submit do form para enviar a messagem
$('#chat').submit((event) => {
    event.preventDefault()

    const author = $('input[name=username]').val();
    const message = $('input[name=message]').val();

    if (author.length && message.length) {
        const messageObject = {
            author,
            message,
        }

        renderMessage(messageObject);

        socket.emit('sendMessage', messageObject);
    }
})