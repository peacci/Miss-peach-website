
document.getElementById("message-form").onsubmit = function(event) {
    event.preventDefault();
    const message = event.target.message.value;
    const messageContainer = document.getElementById("messages");
    const newMessage = document.createElement("p");
    newMessage.textContent = message;
    messageContainer.appendChild(newMessage);
    event.target.reset();
};
