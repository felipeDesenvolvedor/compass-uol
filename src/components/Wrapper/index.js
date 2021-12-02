import React, { useEffect, useState } from "react";
import styled from 'styled-components';
import '../../assets/colors.css';
import "../../assets/form.css";
import "../../assets/paginate.css";
import {nameUser} from '../../api/index.js';
import {controlPaginate} from '../../utils/index';
import Button from "../Button";
import {eventKeyUp, eventClickStarred, eventClickRepos} from '../Events';
import Table from '../Table';


const WrapperStyled = styled.div`
    background-color:var(--color-gray-dark);
    width:100vw;
    height:100vh;
    padding-top:50px;
`;

const Wrapper = () => {

    const [stateRepositories, setStateRepositories] = useState(["repos"]);
    const [stateRequest, setStateRequest] = useState([]);
    const [tableData, setTableData] = useState([]);
    const [tableDataRepos, setTableDataRepos] = useState([]);

    const search = (props) => {
        let name = document.querySelector("#nome").value;
        
        if(!name) {
            document.querySelector("#nome").setAttribute("required", "required")
            return;
        }

        eventKeyUp(name, setTableData);
    }

    const haldlerClick = (props) => {
        let name = document.querySelector("#nome").value || window.location.pathname.slice(1);
        
        if(!name) {
            document.querySelector("#nome").removeAttribute("required")
            document.querySelector("#nome").setAttribute("required", "required")
            return;
        }

        if(props.target.id == "btnRepos") {
            eventClickRepos(name, setTableDataRepos);
            setStateRepositories(["repos"])
        } else if (props.target.id == "btnStarred") {
            setStateRepositories(["starred"])
            eventClickStarred(name, setTableDataRepos)
        }
    }

    const haldlerPaginate = (props) => {
        controlPaginate(props.target.innerHTML)

        let name = document.querySelector("#nome").value || window.location.pathname.slice(1);
        
        if(!name) {
            document.querySelector("#nome").setAttribute("required", "required")
            return;
        }

        if(stateRepositories[0] == "repos") {
            eventClickRepos(name, setTableDataRepos);
        }else if(stateRepositories[0] == "starred") {
            eventClickStarred(name, setTableDataRepos)
        }
    }

    const eventHaldler = (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        if(stateRequest == true){
            return;
        }

        nameUser().then(json =>{
            setTableData([json])
            setStateRequest(1)
        })
        .catch(erro => console.log(erro));
    })

    return (
        <WrapperStyled>
            <form className="form" onSubmit={eventHaldler}>
                <fieldset className="input-group mb-3">
                    <input id="nome" className="form-control" placeholder="Usuário" aria-label="Usuário" aria-describedby="basic-addon1"/>
                    <div className="input-group-prepend">
                        <Button id="btnSearch" className="btn btn-primary" onClick={search}> <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg> </Button>
                    </div>
                </fieldset> 

                <fieldset>
                    <Button id="btnStarred" className="form__button btn btn-primary" onClick={haldlerClick}>Repositórios mais visitados</Button>  
                    <Button id="btnRepos" className="form__button btn btn-primary" onClick={haldlerClick}>Respositórios do usuário</Button>
                </fieldset>  
            </form> 
            <Table id={"tbUser"} statleTable={tableData} columns={["Nome", "Avatar", "Perfil", "Qtd.Repositórios Públicos"]}/>
            <Table id={"tbRepos"} statleTable={tableDataRepos} columns={["Nome do Repositório", "Avatar", "Url do Repositório", "Visibilidade"]}/>

            <div className="paginate">
                <Button className="btnPaginate form__button btn btn-primary" onClick={haldlerPaginate}>1</Button>
                <Button className="btnPaginate form__button btn btn-primary" onClick={haldlerPaginate}>2</Button>
                <Button className="btnPaginate form__button btn btn-primary" onClick={haldlerPaginate}>3</Button>
                <Button className="btnPaginate form__button btn btn-primary" onClick={haldlerPaginate}>4</Button> 
            </div>
        </WrapperStyled>
    );
}


export default Wrapper