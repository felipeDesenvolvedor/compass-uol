import React, { useState } from "react";
import styled from 'styled-components';
import '../../assets/colors.css';
import Button from "../Button";
import {eventKeyUp} from '../Events';
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

    const search = (props) => {
        eventKeyUp(props, setTableData);
    }

    const eventHaldler = (event) => {
        event.preventDefault();
    }

    return (
        <WrapperStyled>
            <form onSubmit={eventHaldler}>
                <fieldset>
                    <input onKeyUp={search}/>
                </fieldset> 

                <fieldset>
                    <Button className="form__button btn btn-primary" >starred</Button>  
                    <Button className="form__button btn btn-primary">repos</Button>
                </fieldset>  
            </form> 
            <Table statleTable={tableData}/>
        </WrapperStyled>
    );
}


export default Wrapper