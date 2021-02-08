import React, { Component } from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';

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

const TableBody = (props) => {
    const {userName, userAvatar, userPerfil, userRepositories} = props.userGithub;
    return(
        <tbody>
            <tr>
                <td scope="row">{userName}</td>
                <td><Avatar srcImg={userAvatar} alt="Avatar de usuario"/></td>
                <td>{userPerfil}</td>
                <td>{userRepositories}</td>
            </tr>
        </tbody>
    );
}

const Table = props => {
    const userGithub = props.statleTable;
    
    return(
        <TableStyled>
            <TableHead />
            <TableBody userGithub={userGithub}/>
        </TableStyled>
        
    );
}

export default Table;