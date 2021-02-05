const getUser = (props) => {
    const search = () => {
        let user = props.target.value;

        return fetch(`https://api.github.com/users/${user}`).then(resposta => {
            return resposta.json();
        }).then(json => {
            return json;
        });
    }
    
    (function(){
        var interval;
        clearTimeout(interval);
        interval = setTimeout(search, 1000);
    })();

    return search;
}

export {getUser};