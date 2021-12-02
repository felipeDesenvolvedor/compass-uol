import {activeLoading, getUrlParametro} from '../utils/index';

const getUser = (name) => {
    let dataToken = decodeURIComponent(document.cookie).split("=");
    var token = getUrlParametro();

    let user = name;
    
    return fetch("https://felipedesenvolvedor.com/users/?token="+token+"&nome="+user,{headers:new Headers({"Accept":"application/json"})})
    .then(resposta =>{
        return resposta.json();
    })
    .then(resposta => {

        activeLoading("tbUser");
        return [JSON.parse(resposta)];
    })
}

const getUsersRepos = name => {
    let dataToken = decodeURIComponent(document.cookie).split("=");
    var token = getUrlParametro();
    
    var urlbase = "https://felipedesenvolvedor.com/users_repos/";

    let params = (new URL(document.location)).searchParams;
    let page = ""

    if(params.get("page")) {
        page = params.get("page").toString();
    }else {
        page = 1;
    }
    
    return fetch(`${urlbase}?token=${token}&nome=${name}${page ? '&page='+page:""}`,{headers:new Headers({"Accept":"application/json"})})
    .then(resposta =>{
        return resposta.json();
    })
    .then(resposta => {

        activeLoading("tbRepos");
        return JSON.parse(resposta);
    })
}

const getUsersStarred = (name) => {
    let dataToken = decodeURIComponent(document.cookie).split("=");
    var token = getUrlParametro();

    var urlbase = "https://felipedesenvolvedor.com/users_starred/";

    let params = (new URL(document.location)).searchParams;
    let page = ""

    if(params.get("page")) {
        page = params.get("page").toString();
    }else {
        page = 1;
    }
    
    return fetch(`${urlbase}?token=${token}&nome=${name}${page ? '&page='+page:""}`,{headers:new Headers({"Accept":"application/json"})})
    .then(resposta =>{
        return resposta.json();
    })
    .then(resposta => {

        activeLoading("tbRepos");
        return JSON.parse(resposta);
    })
}

const nameUser = () => {
    if(window.location.pathname.length > 1) {
        let dataToken = decodeURIComponent(document.cookie).split("=");
        var token = getUrlParametro();
    
        let user = window.location.pathname.slice(1);
        
        return fetch("https://felipedesenvolvedor.com/users/?token="+token+"&nome="+user,{headers:new Headers({"Accept":"application/json"})})
        .then(resposta =>{
            return resposta.json();
        })
        .then(resposta => {

            activeLoading("tbUser");
            return JSON.parse(resposta);
        })
    }else {
        return new Promise(function(resolve, reject){
            activeLoading("tbUser");
            reject("Nenhuma consulta realizada!!")
        })
    }
}

export {getUser, getUsersRepos, getUsersStarred, nameUser};