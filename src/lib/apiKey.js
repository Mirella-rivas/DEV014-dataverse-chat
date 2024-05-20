export const getApiKey = () => {
    // Implementa el código para obtener la API KEY desde Local Storage
    var llave = localStorage.getItem("llave");
    return llave
  };
 
 export const setApiKey = (key) => {
   // Implementa el código para guardar la API KEY en Local Storage
   localStorage.setItem("llave", "key ");
 };