


const displayMessage = (message, isResponse) => {
    
    const messageElement = document.createElement("p"); 
    isResponse ? messageElement.setAttribute("class", "response") : messageElement.setAttribute("class", "message");   
    messageElement.innerText = message;

    const messageArea = document.getElementsByClassName("message-area");
    messageArea[0].append(messageElement);
}

const getAnswer = (message) => {

    const responses = {
        'hola': '¡Hola! ¿Cómo estás?',
    
        'adiós': '¡Adiós! Que tengas un buen día.',
    
        'cómo estás': 'Estoy bien, gracias por preguntar.',
    
        'qué puedes hacer': 'Puedo responder a tus preguntas básicas.'
    };
    return responses[message];
}

const sendMessage = () => {

 
    const message = document.querySelector("input").value;

    console.log(message);

    displayMessage(message, false);

    const answer = getAnswer(message);

    displayMessage(answer, true);
}


const button = document.getElementById("send");
button.addEventListener("click", sendMessage);