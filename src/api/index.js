const getUser = (props) => {
    var url_string = window.location.href
    var url = new URL(url_string);
    var token = url.searchParams.get("token");
    let user = props.target.value;
    
    return fetch("http://localhost/users/?token="+token+"&nome="+user,{headers:new Headers({"Accept":"application/json"})})
    .then(resposta =>{
        return resposta.json();
    })
    .then(resposta => {
        return JSON.parse(resposta);
    })

}

const getUsersRepos = name => {
    var url_string = window.location.href
    var url = new URL(url_string);
    var token = url.searchParams.get("token");

    console.log(name)
    
    return fetch("http://localhost/users_repos/?token="+token+"&nome="+name,{headers:new Headers({"Accept":"application/json"})})
    .then(resposta =>{
        return resposta.json();
    })
    .then(resposta => {
        return JSON.parse(resposta);
    })
}

const getUsersStarred = (props) => {
    var url_string = window.location.href
    var url = new URL(url_string);
    var token = url.searchParams.get("token");
    
    return fetch("http://localhost/users_starred/?token="+token+"&nome=felipe",{headers:new Headers({"Accept":"application/json"})})
    .then(resposta =>{
        return resposta.json();
    })
    .then(resposta => {
        return JSON.parse(resposta);
    })
}

export {getUser, getUsersRepos, getUsersStarred};