/*import { setApiKey } from './lib/apiKey.js'; */
import { chatOpenai } from "../lib/openAIApi.js";
import { header } from "../components/header.js";
import { setApiKey } from "../lib/apiKey.js";
import { navigateTo } from "../router.js";

const llave = () => {
   const apiVista = document.createElement("div")
   const apiContainer = document.createElement("div")

   apiContainer.innerHTML = `

   <label>Coloca aquí tu API Key:</label>
   <input
       
       id="apiKeyInput"

   />
   <button id="buttonChat" >Guardar</button> ` 

   
   apiVista.appendChild(header())
    apiVista.appendChild(apiContainer)

    const botonGuardarApiKey= apiVista.querySelector("#buttonChat")
    const botonEnviarMensaje = apiVista.querySelector("#buttonEnviarMensaje");
    
    botonGuardarApiKey.addEventListener("click",() =>{
        alert("se ingreso apiKey")
        const traerLLave=apiVista.querySelector("#apiKeyInput")
        console.log(traerLLave.value)
        setApiKey(traerLLave.value)
        navigateTo("/home")
    });

   /* botonEnviarMensaje.addEventListener("click", () => {
        const userInput = apiVista.querySelector("#userMessageInput").value;
        chatOpenai(userInput)
           .then((response) => {
              // Maneja la respuesta de la API de OpenAI aquí
              console.log(response);
           })
           .catch((error) => {
              console.error(error);
           });
     });*/

    console.log("vista apikey")
    return apiVista;
}; 

export default llave;

