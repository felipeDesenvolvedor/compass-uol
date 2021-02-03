const getUser = (props) => {

    (function(){
        clearTimeout(this.interval);
        this.interval = setTimeout(search, 1000);
    })();

    const search = () => {
        let user = props.target.value;

        let userGithub;
        userGithub = fetch(`https://api.github.com/users/${user}`).then(resposta => {
            return resposta.json();
        }).then(json => {
            console.log(json);
        });
    }    
}

export {getUser};