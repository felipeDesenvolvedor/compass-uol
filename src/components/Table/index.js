import React from 'react';
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
    const {userName, userAvatar, userPerfil, userRepositories} = props.state;
    return(
        <tbody>
            <tr>
                <td scope="row">{userName}</td>
                <td><Avatar srcImg={userAvatar} alt="Avatar de usuario"/></td>
                <td><a href={userPerfil} target="_blank">{userPerfil}</a></td>
                <td>{userRepositories}</td>
            </tr>
        </tbody>
    );
}

const Table = props => {
    const state = props.statleTable;

    console.log(state);
    
    return(
        <TableStyled>
            <TableHead />
            <TableBody state={state}/>
        </TableStyled>
        
    );
}

export default Table;