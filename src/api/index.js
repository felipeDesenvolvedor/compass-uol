const getUser = (props) => {
    
    let user = props.target.value;

    return fetch(`https://api.github.com/users/${user}`).then(resposta => {
        return resposta.json();
    }).then(json => {
        return json;
    });
}

export {getUser};