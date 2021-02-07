import React from 'react';
import styled from 'styled-components';
import "../../assets/label.css";
import {eventKeyUp} from '../Events';

const InputComponent = ({id}) => {
    return(
        <input id={id} onKeyUp={eventKeyUp}/>
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