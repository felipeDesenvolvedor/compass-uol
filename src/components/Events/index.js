import {getUser} from '../../api/index.js';

const eventKeyUp = (props, setTableData) => {
    if(props.keyCode === 13) {
        getUser(props).then(json =>{
            setTableData({userName:json.name, userAvatar:json.avatar_url, userPerfil:json.html_url, userRepositories:json.public_repos});
        });
    }
};

export {eventKeyUp};