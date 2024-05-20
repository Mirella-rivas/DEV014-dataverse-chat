/*import data from './data/dataset.js';
import { renderItems } from './view.js';
import { filterData, sortData, computeStats } from './dataFunctions.js';

//Selectores del DOM
const root = document.querySelector('#root');
const estadistica = document.querySelector('#estadistica')
const selectFilter = document.querySelector('#filter')  // Select con id filter
const selectOrder = document.querySelector("#select-sort")
const resetButton = document.querySelector('#resetButton')
const buttonCalcular = document.getElementById('calcular') //Estadistica

const nav= document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

//MENU HAMBURGUESA
/*document.querySelector('.menu-icon').addEventListener('click', function() {
  document.querySelector('#menu-content').classList.toggle('show');
});

abrir.addEventListener("click", function() {
  nav.classList.add("visible");
});

cerrar.addEventListener("click", function() {
  nav.classList.toggle("visible");
})

let dataFiltrada = data;

const resultRenderItems = renderItems(dataFiltrada)
root.appendChild(resultRenderItems);

//FILTER
selectFilter.addEventListener('change', function (event) {
  console.log('event target value es valor de select: ', event.target.value)

  //ejecutar función filterData             FILTER DATA - AQUÍ SE UTILIZA
  dataFiltrada = filterData(data, 'intereses', event.target.value);
  console.log('ver lo que retorna filterData: ', dataFiltrada)

  // chat gpt Eliminar las tarjetas actuales del DOM
  root.innerHTML = '';

  // chat gpt Renderizar y mostrar solo las tarjetas filtradas en el DOM
  //generar los nuevos cards con la data filtrada
  const cardsFiltrados = renderItems(dataFiltrada);                                       //¿xq no q se quede en root.appenchild(resultadoFilterData)?
  root.appendChild(cardsFiltrados);

});

//ORDER
selectOrder.addEventListener("change", function(event){
  //ejecutar funcion order
  const resultadoSortData = sortData(dataFiltrada, "name", event.target.value)
  console.log(resultadoSortData)

  root.innerHTML = '';

  const cardsOrdenados = renderItems(resultadoSortData);
  root.appendChild(cardsOrdenados)
});

//BOTON DE LIMPIAR
resetButton.addEventListener('click', function () {

  selectFilter.value = ''; 
  selectOrder.value = ''; 
  root.innerHTML = '';
  const cardsOriginales = renderItems(data);
  root.appendChild(cardsOriginales);
});

//ESTADÍSTICA
let resultadoElement = null;                                                    // Variable global para mantener una referencia al elemento del resultado


buttonCalcular.addEventListener('click', function (){
  const resultado = computeStats(data);
  console.log(resultado);

  // Si ya hay un resultado impreso, elimínalo
  if (resultadoElement) {
    resultadoElement.remove();
    resultadoElement = null; // Restablecer la referencia a null
  } else {

    // Muestra el resultado en un elemento del DOM
    resultadoElement = document.createElement('p');
    resultadoElement.textContent = `El promedio de número de apariciones es: ${resultado.mean}`;
    /*resultadoElement.setAttribute('id', 'resultado');  Asignar un id al elemento 
    estadistica.appendChild(resultadoElement);
  }
});

*/