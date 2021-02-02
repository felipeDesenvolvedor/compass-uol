import styled from 'styled-components';

const Button = styled.button.attrs({className:'btn btn-primary'})`
    background-color:var(--color-uol);
    border:solid 1px var(--color-uol);
    margin:0 10px;

    &:hover {
        background-color:var(--color-uol);
        border:solid 1px var(--color-uol);
    }
`;

export default Button;