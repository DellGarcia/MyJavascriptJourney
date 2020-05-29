var socket = io('http://localhost:3000')

function renderMessage(message) {
    const hour = message.date.getHours();
    const minutes = message.date.getMinutes();
    $('.messages').append(
        `<div class="message">
            <strong>${message.author}:</strong>
            ${message.message} 
            <span class="time">
                <strong>Time: </strong><em>${hour}:${minutes}</em>
            </span>
         </div>`
    );
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
    const date = new Date(Date.now());

    if (author.length && message.length) {
        const messageObject = {
            author,
            message,
            date,
        }

        renderMessage(messageObject);

        socket.emit('sendMessage', messageObject);

        $('input[name=message]').val("")
    }
})