let ROUTES = {};
let rootEl;

export const setRootEl = (el) => {
 rootEl=el;
    // assign rootEl
}

export const setRoutes = (routes) => {
    ROUTES=routes;
  // optional Throw errors if routes isn't an object
  // optional Throw errors if routes doesn't define an /error route
  // assign ROUTES
}

const queryStringToObject = (queryString) => {
    let UrlParams= new URLSearchParams(queryString);
    let objectParams = Object.fromEntries(UrlParams);
    return objectParams
  // convert query string to URLSearchParams
  // convert URLSearchParams to an object
  // return the object
}

const renderView = (pathname, props={}) => {
    rootEl.innerHTML = ""
    const vista=ROUTES[pathname]
    if(!vista){
      rootEl.innerHTML='Error 404 tu pagina no existe'
    }else{
      const vistaProms= vista(props)
      rootEl.appendChild(vistaProms)
    }
     
  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
} 

/*export const navigateTo = (pathname, props={}) => {
  let pageUrl = pathname+ "?" + new URLSearchParams(props)
  history.pushState({},"",pageUrl )
  renderView(location.pathname) // Solo pasa el pathname a renderView
}
*/
  export const navigateTo = (pathname, props={}) => {
  let pageUrl = pathname+ "?" + new URLSearchParams(props)
  history.pushState({},"",pageUrl )
  renderView(location.pathname, props)
// update window history with pushState
// render the view with the pathname and props
}

export const onURLChange = (location) => {
    const {search} = location
    const SearchParams = queryStringToObject (search)
    let paramsToObject = queryStringToObject (location.search)
    renderView(location.pathname, paramsToObject)
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
}