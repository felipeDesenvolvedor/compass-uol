import {getUser, getUsersRepos, getUsersStarred} from '../../api/index.js';

const eventKeyUp = (props, setTableData) => {
    if(props.keyCode === 13) {
        getUser(props.target.value).then(json =>{
            setTableData(json);
        });
    }
};

const eventClickStarred = (name, setTableData) => {
    getUsersStarred(name).then(json =>{
        setTableData(json);
    });
};

const eventClickRepos = (name, setTableData) => {
    getUsersRepos(name).then(json => {
        setTableData(json);
    });
};

export {eventKeyUp, eventClickStarred, eventClickRepos};