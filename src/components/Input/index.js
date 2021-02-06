import React from 'react';
import styled from 'styled-components';
import {getUser} from '../../api/index.js';
import "../../assets/label.css";

const eventHaldler = props => {
    if(props.keyCode === 13) {
        getUser(props).then(json =>{
            console.log(json);
        });
    }
};

const InputComponent = ({id}) => {
    return(
        <input id={id} onKeyUp={eventHaldler}/>
    );
};

const Label = (props) => {
    return (
        <label className="label">{props.children}</label>
    );
}

const Input = ({idInput, textLabel}) => {
    return (
        <>
            <Label htmlFor={idInput}>{textLabel}</Label>
            <InputComponent id={idInput}></InputComponent>
        </>
    );
}

export default Input;