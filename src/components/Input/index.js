import React from 'react';
import styled from 'styled-components';
import {getUser} from '../../api/index.js';

const eventHaldler = props => {
    if(props.keyCode === 13) {
        getUser(props);
    }
};

const InputComponent = ({id}) => {
    return(
        <input id={id} onKeyUp={eventHaldler}/>
    );
};

const Label = styled.label`
    color:var(--color-white);
    text-transform:capitalize;
`;

const Input = ({idInput, textLabel}) => {
    return (
        <>
            <Label for={idInput}>{textLabel}</Label>
            <InputComponent id={idInput}></InputComponent>
        </>
    );
}

export default Input;