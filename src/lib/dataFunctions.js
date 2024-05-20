  export function filterData(data, filterBy, value) {   //FILTER DATA - AQUI SE DEFINE

    if (!data || !filterBy || !value) return "Faltan definir parametros"
  
    let resultadoFiltro = []
  
    resultadoFiltro = data.filter((element) => {                   //Filtra un arreglo de datos (data) y almacena los elementos que cumplen ciertos criterios en una nueva variable llamada resultadoFiltro, cd element es personaj
  
      return element.facts[filterBy].includes(value);               //Accede a una propiedad específica dentro del objeto facts
  
    })
  
    return resultadoFiltro;
  
  }
  
  export function sortData(data, sortBy, sortOrder) {
  
    //  copiar data
    const copiarData = data.map(item => ({ ...item })); //item => (...)         MAP una funcion q recorre y puede cambiar algo
    console.log(copiarData)
  
    //  test
    /*if (!data || !sortBy || !sortOrder) {
      return undefined; //o puedes retornar un mensaje de error Parametros no definidos
    } */
  
    if (sortBy === 'name') {
      if (sortOrder === 'asc') {
        return copiarData.sort((a, b) => a.name.localeCompare(b.name));
      } else {
        return copiarData.sort((a, b) => b.name.localeCompare(a.name));
      }
    } else {
      if (sortOrder === 'desc') {
        return copiarData.sort((a, b) => a[sortBy] - b[sortBy]);
      } else {
        return copiarData.sort((a, b) => b[sortBy] - a[sortBy])
      }
    }
  
  }
  
  export function computeStats(data) {
  
  
    // Reducir los datos para calcular estadísticas
    const stats = data.reduce((acc, current) => {
  
      // Acceder al número de apariciones de cada objeto
      const apariciones = current.facts['número de apariciones'];                                  //accedo a la propiedad 'número de apariciones' de cada objeto en data y almaceno en la variable apariciones
  
      // Sumar los valores
      acc.sum += apariciones;
  
      // Contar los valores
      acc.count++;
      return acc;
    },
  
    // Inicializar el objeto de acumulador con las propiedades necesarias
    { sum: 0, count: 0 }
    );
  
    // Calcular la media
    stats.mean = stats.sum / stats.count;
  
    return stats;
  }