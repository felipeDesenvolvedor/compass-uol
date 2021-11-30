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
    
    const [tableData, setTableData] = useState([]);
    const [tableDataRepos, setTableDataRepos] = useState([]);

    const search = (props) => {
        eventKeyUp(props, setTableData);
    }

    const haldlerClick = (props) => {
        let name = document.querySelector("#nome").value;
        
        if(props.target.id == "btnRepos") {
            eventClickRepos(name, setTableDataRepos);
        } else if (props.target.id == "btnStarred") {
            eventClickStarred(name, setTableDataRepos)
        }
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
                    <Button id="btnStarred" className="form__button btn btn-primary" onClick={haldlerClick}>starred</Button>  
                    <Button id="btnRepos" className="form__button btn btn-primary" onClick={haldlerClick}>repos</Button>
                </fieldset>  
            </form> 
            <Table statleTable={tableData} columns={["Nome", "Avatar", "Perfil", "Qtd.Repositórios Públicos"]}/>
            <Table statleTable={tableDataRepos} columns={["Nome", "Avatar", "Repositório", "Visibilidade"]}/>

            <a className="btn btn-primary" href="http://localhost/login">GIHUB</a>
        </WrapperStyled>
    );
}


export default Wrapper