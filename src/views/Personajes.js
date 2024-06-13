/*import { setApiKey } from './lib/apiKey.js'; */

import { header } from "../components/header.js";
import { chatOpenai } from "../lib/openAIApi.js";

const personajes = (character) => {
    const apiPersonajes = document.createElement("div")

    const apiContainer = document.createElement("div")
    apiContainer.className = "chat-container";

    /* apiContainer.innerHTML = ` */

    const headerChat = document.createElement("div")
    headerChat.className = "headerChat";

    // Crear seccion1
    const seccion1 = document.createElement("section");
    seccion1.id = "seccion1";
    seccion1.innerHTML = `
        <h2>Sección 1</h2>
        <h3>${character.name} </h3>
        <img src= ${character.imageUrl} alt= ${character.imageUrl} />
    `;

    headerChat.appendChild(seccion1)

    /*const regresarBoton=document.createElement("button")
    regresarBoton.className = "regresarBoton"
    regresarBoton*/


    const seccion2 = document.createElement("section");
    seccion2.id = "seccion2";
    seccion2.innerHTML = `
   
    <textarea class="cuadro" placeholder="Ingresa tu mensaje"></textarea>
    <button class="send">Enviar</button>
    
    `;



    const chatBox = document.createElement("div")
    chatBox.id = 'chat';

    seccion2.appendChild(chatBox);


    apiContainer.appendChild(headerChat);
    const mensajeInput = seccion2.querySelector("textarea");
    const sendButton = seccion2.querySelector("button");
    /*const mensajeInput = document.createElement("textarea");
    mensajeInput.className = "cuadro";
    mensajeInput.placeholder = "Ingresa tu mensaje";
    seccion2.appendChild(mensajeInput); */

    /* const sendButton = document.createElement("button")
     sendButton.textContent = "Enviar"
     sendButton.className = "send"  */


    sendButton.addEventListener('click', () => {
        const message = mensajeInput.value;
        if (message.trim() === '') {
            alert('Escribe un mensaje');
            return; //Detiene la función
        }
        chatOpenai(message)  // Pasar el mensaje a la función chatOpenai
            .then((response) => {
                // Manejar la respuesta de la API de OpenAI

                const characterMessageEl = document.createElement('p');
                characterMessageEl.textContent = `${character.name}: ${response.choices[0].message.content}`;
                characterMessageEl.className = 'character-message';
                chat.appendChild(characterMessageEl);
            })
            .catch((error) => {
                console.error(error);
            });



        const userMessageEl = document.createElement('p');
        userMessageEl.textContent = `Tu: ${message}`;
        userMessageEl.className = 'user-message';
        chatBox.appendChild(userMessageEl);
        mensajeInput.value = ' ';
    });


    // Crear seccion2
    /*const seccion2 = document.createElement("section");
      seccion2.id = "seccion2";
      seccion2.innerHTML = `
          <h2>Sección 2</h2>
          <textarea name="user-input" cols="30" rows="10" placeholder="Ingresa tu texto"></textarea>
          <button id="enviar" > Enviar </button>
     
     `; */





    seccion2.appendChild(sendButton)
    // Agregar seccion1 y seccion2 a apiContainer
    apiContainer.appendChild(headerChat)
    /*apiContainer.appendChild(seccion2)*/
    seccion2.appendChild(chatBox)
    seccion2.appendChild(mensajeInput)
    seccion2.appendChild(sendButton)
    headerChat.appendChild(seccion2)
    // Agregar apiContainer a apiPersonajes
    apiPersonajes.appendChild(header())
    apiPersonajes.appendChild(apiContainer)


    return apiPersonajes;
};

export default personajes;
