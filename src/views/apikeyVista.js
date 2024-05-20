/*import { setApiKey } from './lib/apiKey.js'; */

const llave = () => {
   const apiVista = document.createElement ("div")
   const apiContainer = document.createElement("div")

   apiContainer.innerHtml = `

   <label htmlFor="apiKeyInput">Coloca aquí tu API Key:</label>
   <input
       
       id="apiKeyInput"
       value={apiKey}
       onChange={handleInputChange}
   />
   <button onClick={handleSaveClick}>Guardar</button> ` 

   /*
    const handleSaveClick = () => {
        setApiKey(apiKey);
        alert('API Key guardada correctamente.');
    }; */
    apiVista.appendChild(apiContainer)
    console.log("vista apikey")
    return apiVista;
}; 

export default llave;

