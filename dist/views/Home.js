import data from '../data/dataset.js';
import { filterData, sortData, computeStats } from '../lib/dataFunctions.js';
import { navigateTo } from '../router.js';


export const Home = () => {
  const viewEl = document.createElement('div')
  viewEl.innerHTML = `
    
    < header >
    <h1> GILMORE GIRLS SERIE </h1>
    </header >

    <button id="abrir" class="abrir-menu"><i class="bi bi-list"></i></button>

   <nav class="nav" id="nav"> 
   
    <button id="cerrar" class="cerrar-menu"><i class="bi bi-x-lg"></i></button>
    <div id="controles">
      <label for="filter"> Filtrar por :</label>
       <select id="filter" data-testid="select-filter" name="intereses">
        <option value=" Arte">Arte</option>
        <option value=" Café">Café</option>
        <option value=" Música">Música</option>
        <option value=" Libros">Libros</option>
       </select>

      <label for="select-sort"> Ordenar por :</label>
       <select id="select-sort" data-testid="select-sort" name="name" itemprop="select-sort">
        <option value="asc">DESC A-Z</option>
        <option value="desc">ASC Z-A</option>
       </select>
      <button id="resetButton" data-testid="button-clear">LIMPIAR</button>
      <button id="calcular">PROMEDIO DE APARICIONES:</button>
      <button id="apikey">API KEY</button>
    </div>
  </nav> 
  <main>
    <div id="estadistica"></div>
    <div id="root"> </div>
  </main>
  <footer>
    <p>Derechos de autor &copy;Mirella Rivas y &copy;Maria Belen</p>
  </footer>` ;



  const root = viewEl.querySelector('#root');
  const buttonapikey=viewEl.querySelector('#apikey')
  console.log(buttonapikey);
  buttonapikey.addEventListener("click" ,() =>{
    navigateTo("/apiKey")
  })
  const renderItems = (data) => {

    const elementUl = document.createElement('ul');

    data.forEach((personajes) => {

      const elementli = document.createElement('li');
      elementli.classList.add("stiloLi");
      elementli.setAttribute("itemtype", personajes.id);  // aqui antes decia ("itemtype","personajes")
      elementli.setAttribute("itemscope", "");                                                 //es relevante y autosuficiente


      // CREAR MI DL [DT-DD]
      const dlpersonajes = document.createElement('dl');  //se crea un list definition para contener los detalles del personaje


      //IMG
      const img = document.createElement('img');
      img.src = personajes.imageUrl         // o es imageUrl?
      dlpersonajes.appendChild(img);

      //DT NAME - DD NAME
      const dtName = document.createElement('dt')
      dtName.textContent = 'Nombre:';                        // se establece el contenido de los elemtos dt dd cn la inf del personaj

      const ddName = document.createElement('dd')
      ddName.textContent = personajes.name;
      ddName.setAttribute("itemprop", "name")   //ESTO AGREGUE PARA EL TEST       

      //DT SHORT DESCRIPTION DD SHORT DESCRIPTION
      const dtShortDescription = document.createElement('dt')
      dtShortDescription.textContent = 'Description:';            //esto es para cambiar el termino x description

      const ddShortDescription = document.createElement('dd')
      ddShortDescription.textContent = personajes.shortDescription; //esto es para reempazar el shortD en el contenidodd
      /*INTERESES
      const dtIntereses = document.createElement('dt')
      dtIntereses.textContent = 'Intereses:';            //esto es para cambiar el termino x description

      const ddIntereses = document.createElement('dd')
      ddIntereses.textContent = personajes.facts.intereses; */

      /*const chatButton = document.createElement('button')
      chatButton.textContent = "chatea conmigo";
      chatButton.setAttribute('id', 'chat'); */

      const chatNovela = document.createElement('button')
      chatNovela.textContent = "chatea conmigo";
      chatNovela.setAttribute('id', 'chatGilmore');

      //GUARDO
      //appen guardar y mostrar
      dlpersonajes.appendChild(dtName);
      dlpersonajes.appendChild(ddName);
      dlpersonajes.appendChild(dtShortDescription);
      dlpersonajes.appendChild(ddShortDescription);
      //dlpersonajes.appendChild(dtIntereses);
      //dlpersonajes.appendChild(ddIntereses);

      elementli.appendChild(dlpersonajes);
      //elementli.appendChild(chatButton);
      elementli.appendChild(chatNovela);
      elementUl.appendChild(elementli);


      /*chat
      const chat = elementli.querySelector('#chat');

      console.log(chat)
      chat.addEventListener('click', function () {
        console.log("hola")
        alert("se dio click en el boton");
        navigateTo('/personajes', personajes);
      }); */


      //personajes
      const chatPersonaje = elementli.querySelector('#chatGilmore');
      
      console.log(chatPersonaje)
      chatPersonaje.addEventListener('click', function () {
        console.log("holahola")
        alert("se dio click en el boton chat");
        navigateTo('/personajes', personajes);
      });



    });



    return elementUl;
  };



  //Selectores del DOM
  const ElRoot = viewEl.querySelector('#root');
  const estadistica = viewEl.querySelector('#estadistica')
  const selectFilter = viewEl.querySelector('#filter')  // Select con id filter
  const selectOrder = viewEl.querySelector("#select-sort")
  const resetButton = viewEl.querySelector('#resetButton')
  const buttonCalcular = viewEl.querySelector('#calcular') //Estadistica

  const nav = viewEl.querySelector("#nav");
  const abrir = viewEl.querySelector("#abrir");
  const cerrar = viewEl.querySelector("#cerrar");


  abrir.addEventListener("click", function () {
    nav.classList.add("visible");
  });

  cerrar.addEventListener("click", function () {
    nav.classList.toggle("visible");
  })

  let dataFiltrada = data;

  const resultRenderItems = renderItems(dataFiltrada);
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
  selectOrder.addEventListener("change", function (event) {
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


  buttonCalcular.addEventListener('click', function () {
    const resultado = computeStats(data);
    console.log(resultado);

    // Si ya hay un resultado impreso, elimínalo
    if (resultadoElement) {
      resultadoElement.remove();
      resultadoElement = null; // Restablecer la referencia a null
    } else {

      // Muestra el resultado en un elemento del DOM
      resultadoElement = document.createElement('p');
      resultadoElement.textContent = "El promedio de número de apariciones es: ${resultado.mean}";
      /*resultadoElement.setAttribute('id', 'resultado');  Asignar un id al elemento */
      estadistica.appendChild(resultadoElement);
    }
  });







  //viewEl.appendChild(body)//
  return viewEl;

}

export default Home;