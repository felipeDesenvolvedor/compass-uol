import React, { useState } from "react";
import styled from 'styled-components';
import '../../assets/colors.css';
import Button from "../Button";
import {eventKeyUp, eventClickStarred, eventClickRepos} from '../Events';
import Table from '../Table';


const WrapperStyled = styled.div`
    background-color:var(--color-gray-dark);
    width:1000px;
    height:500px;
    position:absolute;
    left:50%;
    top:50%;
    transform:translate(-50%, -50%);
`;


const Wrapper = () => {
    
    const [tableData, setTableData] = useState({userName:"", userAvatar:"", userPerfil:"", userRepositories:""});
    const [tableDataRepos, setTableDataRepos] = useState({userName:"", userAvatar:"", userPerfil:"", userRepositories:""});

    const search = (props) => {
        eventKeyUp(props, setTableData);
    }

    const haldlerClick = () => {
        let name = document.querySelector("#nome").value;
        eventClickRepos(name, setTableDataRepos);
    }

    const eventHaldler = (event) => {
        event.preventDefault();
    }

    return (
        <WrapperStyled>
            <form onSubmit={eventHaldler}>
                <fieldset>
                    <input id="nome" onKeyUp={search}/>
                </fieldset> 

                <fieldset>
                    <Button className="form__button btn btn-primary" onClick={haldlerClick}>starred</Button>  
                    <Button className="form__button btn btn-primary" onClick={haldlerClick}>repos</Button>
                </fieldset>  
            </form> 
            <Table statleTable={tableData}/>
            <Table statleTable={tableDataRepos}/>

            <a className="btn btn-primary" href="http://localhost/login">GIHUB</a>
        </WrapperStyled>
    );
}


export default Wrapper