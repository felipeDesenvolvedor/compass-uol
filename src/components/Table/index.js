import React from 'react';
import styled from 'styled-components';

const TableStyled = styled.table.attrs({className:'table table-striped table-dark'})`
    color:var(--color-black);

    & img {
        width:40px;
    }
`;

const TableHead = () => {
    return (
        <thead>
            <tr>
                <th scope="col">Nome</th>
                <th scope="col">Avatar</th>
                <th scope="col">Perfil</th>
                <th scope="col">Repositórios Públicos</th>
            </tr>
        </thead>
    );
}

const TableBody = ({name, avatarUrl, repositories, perfil}) => {
    return(
        <tbody>
            <tr>
                <td scope="row">{name}</td>
                <td><img src={avatarUrl} alt="Avatar de usuario"/></td>
                <td>{perfil}</td>
                <td>{repositories}</td>
            </tr>
        </tbody>
    );
}

const Table = ({name, avatarUrl, repositories, perfil}) => {
    return (
        <TableStyled>
            <TableHead />
            <TableBody name={name} avatarUrl={avatarUrl} repositories={repositories} perfil={perfil}/>
        </TableStyled> 
    );
};

export default Table;