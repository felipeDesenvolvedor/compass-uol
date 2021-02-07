import styled from 'styled-components';
import '../../assets/colors.css';
import Form from "../Form";
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
    
    const state = {dataTable:""}

    return (
        <WrapperStyled>
            <Form />
            <Table />
        </WrapperStyled>
    );
}


export default Wrapper;