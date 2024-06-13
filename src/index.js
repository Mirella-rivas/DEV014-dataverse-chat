// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/

import Home from './views/home.js';                                // ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';
import llave from './views/apikeyVista.js';
import personajes from './views/personajes.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/apiKey' : llave,
  '/personajes' : personajes,
  // ...
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(document.getElementById('root'));
  onURLChange(window.location); // llama a onURL con la ruta inicial
});
window.addEventListener("popstate", () => {
onURLChange = window.location
});
//window.onpopstate = onURLChange;          // Se ejecuta cuando el historial de navegación cambia