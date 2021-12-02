import React from 'react';
import styled from 'styled-components';
import GitIconSRC from "../../assets/giticon.png";

const LoginStyled = styled.div`
    background-color:#ddd;
    width:340px;
    height:50vh;
    position: absolute;
    left: 50%;
    top:50%;
    transform: translate(-50%, -50%);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
`;

const GitIcon = styled.img.attrs({className:''})`
  width: 50%;
`;

function Login() {
    return (
        <LoginStyled>
          <GitIcon src={GitIconSRC}/>

          <a href="https://felipedesenvolvedor.com/login" className="btn btn-primary"> 
            Signing in
          </a>
        </LoginStyled>
    );
}

export default Login;