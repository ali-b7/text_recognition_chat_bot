function sendMessage() {
    var userInput = document.getElementById("user-input").value;
    displayMessage(userInput, "user");
    document.getElementById("user-input").value = "";

    // Send user message to chatbot backend
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/chatbot", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            var response = JSON.parse(xhr.responseText);
            displayMessage(response.message, "bot");
        }
    };
    xhr.send(JSON.stringify({ message: userInput }));
}

function displayMessage(message, sender) {
    var chatBox = document.getElementById("chat-box");
    var messageElement = document.createElement("div");
    messageElement.className = sender;
    messageElement.innerHTML = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom
}
