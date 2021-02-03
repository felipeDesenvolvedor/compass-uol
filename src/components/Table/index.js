import React, { Component } from 'react';
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

const TableBody = props => {
    const {userGithub} = props;
    
    return(
        <tbody>
            <tr>
                <td scope="row">{userGithub.name}</td>
                <td><img src={userGithub.avatarUrl} alt="Avatar de usuario"/></td>
                <td>{userGithub.perfil}</td>
                <td>{userGithub.repositories}</td>
            </tr>
        </tbody>
    );
}

class Table extends Component {
    render(){
        const {userGithub} = this.props;

        return(
            <TableStyled>
                <TableHead />
                <TableBody userGithub={userGithub}/>
            </TableStyled>
        );
    }
}

export default Table;