import React from 'react';
import styled from 'styled-components';

const TableStyled = styled.table.attrs({className:'table table-striped table-dark'})`
    color:var(--color-black);

    & img {
        width:40px;
    }
`;

const Table = ({name, avatarUrl, repositories, perfil}) => {
    return (
        <TableStyled>
            <thead>
                <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Avatar</th>
                    <th scope="col">Perfil</th>
                    <th scope="col">Repositórios Públicos</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td scope="row">{name}</td>
                    <td><img src={avatarUrl}/></td>
                    <td>{perfil}</td>
                    <td>{repositories}</td>
                </tr>
            </tbody>
        </TableStyled> 
    );
};

export default Table;