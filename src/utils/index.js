const controlPaginate = (page) => {
    let origin = window.location.origin;
    let pathName = window.location.pathname
    
    window.history.pushState(1, "Teste", `${origin}${pathName}?page=`+parseInt(page))
}

export {controlPaginate};