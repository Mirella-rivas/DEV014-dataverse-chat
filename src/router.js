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
    rootEl.innerHtml = ""
    const vista=ROUTES[pathname] || ROUTES["/error"]
    console.log(vista);
    // const vistaProms= vista(props)
    rootEl.appendChild(vista(props))
  // clear the root element
  // find the correct view in ROUTES for the pathname
  // in case not found render the error view
  // render the correct view passing the value of props
  // add the view element to the DOM root element
} 

export const navigateTo = (pathname, props={}) => {
    let pageUrl = pathname+ "?" + new UrlSearchParams(props)
    history.pushState({},"",pageUrl )
    renderView(location.pathname, props)
  // update window history with pushState
  // render the view with the pathname and props
}

export const onURLChange = (location) => {
    const {pathname , search} = location
    const SearchParams = queryStringToObject (search)
    let paramsToObject = queryStringToObject (location.search)
    renderView(location, paramsToObject)
  // parse the location for the pathname and search params
  // convert the search params to an object
  // render the view with the pathname and object
}