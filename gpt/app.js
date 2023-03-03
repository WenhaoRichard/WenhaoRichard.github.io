function sendMessage() {
  const messageInput = document.getElementById('message');
  const chatBox = document.getElementById('chat');
  const message = messageInput.value.trim();
  messageInput.value = '';

  if (message) {
    const userMessage = document.createElement('p');
    userMessage.innerText = `You: ${message}`;
    chatBox.appendChild(userMessage);

    sendChatMessage(message)
      .then((response) => {
        const chatbotMessage = document.createElement('p');
        chatbotMessage.innerText = `Chatbot: ${response}`;
        chatBox.appendChild(chatbotMessage);
      })
      .catch((error) => {
        const errorMessage = document.createElement('p');
        errorMessage.innerText = `Error: ${error.message}`;
        chatBox.appendChild(errorMessage);
      });
  }
}
