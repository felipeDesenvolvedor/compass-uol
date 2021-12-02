import {getUser, getUsersRepos, getUsersStarred} from '../../api/index.js';
import {activeLoading} from '../../utils/index.js';

const eventKeyUp = (props, setTableData) => {
    activeLoading("tbUser");

    if(props.keyCode === 13) {
        getUser(props.target.value).then(json =>{
            setTableData(json);
        });
    }
};

const eventClickStarred = (name, setTableData) => {
    activeLoading("tbRepos");

    getUsersStarred(name).then(json =>{
        setTableData(json);
    });
};

const eventClickRepos = (name, setTableData) => {
    activeLoading("tbRepos");

    getUsersRepos(name).then(json => {
        setTableData(json);
    });
};

export {eventKeyUp, eventClickStarred, eventClickRepos};