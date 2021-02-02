import React from 'react';
import styled from 'styled-components';

const InputComponent = styled.input`

`;

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