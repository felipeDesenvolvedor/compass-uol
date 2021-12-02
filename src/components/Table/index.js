import "../../assets/table.css";
import "../../assets/loading.css";
import React, { useState } from 'react';
import styled from 'styled-components';
import Avatar from '../Avatar';

const TableStyled = styled.table.attrs({className:'table table-striped table-dark table-hover table-sm'})`
    color:var(--color-white);

    & img {
        width:40px;
    }
`;

const TableHead = (columns) => {

    const listColumns = columns.children.map((item, index) => (
        <td key={index} scope="col">{item}</td>
    ));
    
    return (
        <thead>
            <tr>{listColumns}</tr>
        </thead>
    );
}

const TableBody = (props) => {
    const buildLista = props.state.map((item, index) => (
        <tr key={index}>
            <td scope="row">{item.name}</td>
            <td><Avatar srcImg={item.avatar_url || item.owner.avatar_url} alt="Avatar de usuario"/></td>
            <td><a href={item.html_url} target="_blank">{item.html_url}</a></td>
            <td>{item.public_repos || item.visibility}</td>
        </tr>
    ));

    return(
        <tbody>
            {buildLista}
        </tbody>
    );
}

const Table = props => {
    const state = props.statleTable;
    const columns = props.columns;
    const id = props.id;
    
    return(
        <TableStyled id={id}>
            <TableHead>{columns}</TableHead>
            <TableBody state={state}/>
        </TableStyled>  
    );
}

export default Table;