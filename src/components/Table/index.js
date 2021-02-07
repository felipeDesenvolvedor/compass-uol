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
    const {userName, userAvatar, userPerfil, userRespositories} = props;
    return(
        <tbody>
            <tr>
                <td scope="row"></td>
                <td><Avatar srcImg={""} alt="Avatar de usuario"/></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    );
}

class Table extends Component {

    constructor(props) {
        super(props);
    }

    render(){
        const {userGithub} = this.props;

        return(
            <TableStyled>
                <TableHead />
                <TableBody/>
            </TableStyled>
        );
    }
}

export default Table;