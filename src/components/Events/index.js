import {getUser} from '../../api/index.js';

const eventKeyUp = props => {
    if(props.keyCode === 13) {
        getUser(props).then(json =>{
            console.log(json);
        });
    }
};

export {eventKeyUp};