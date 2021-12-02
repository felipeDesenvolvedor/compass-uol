const controlPaginate = (page) => {
    let origin = window.location.origin;
    let pathName = window.location.pathname
    
    window.history.pushState(1, "Teste", `${origin}${pathName}?page=`+parseInt(page))
}

const activeLoading = (elementId) => {
    document.querySelector(`#${elementId}`).classList.toggle("loading");
}

const getUrlParametro = () => {

    if(localStorage.getItem("token") != "null") {
        return localStorage.getItem("token");
    }

    let params = (new URL(document.location)).searchParams;
    let token = params.get("token");
    localStorage.setItem("token",token)

    return localStorage.getItem("token")
}

export {controlPaginate, activeLoading, getUrlParametro};