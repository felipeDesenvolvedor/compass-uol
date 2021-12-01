const controlPaginate = (page) => {
    window.history.pushState(1, "Teste", "http://localhost:3000/felipe?page="+parseInt(page))
}

export {controlPaginate};