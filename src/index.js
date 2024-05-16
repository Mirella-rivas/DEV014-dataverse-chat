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

import Home from './views/Home.js';                                // ... import other views
import { setRootEl, setRoutes, onURLChange } from './router.js';
import llave from './views/apikeyVista.js';

// Define your routes and their associated views
const routes = {
  '/': Home,
  '/apikeyVista' : llave,
  // ...
};

// Assign the routes
setRoutes(routes);

// Set the root element where views will be rendered
window.addEventListener("DOMContentLoaded", () => {
  setRootEl(document.getElementById('root'));
  onURLChange(window.location.pathname); // llama a onURL con la ruta inicial
});

window.onpopstate = onURLChange;          // Se ejecuta cuando el historial de navegación cambia