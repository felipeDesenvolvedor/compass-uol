import styled from 'styled-components';
import "../../assets/button.css";
import "../../assets/colors.css";


const Button = (props) => {
    return(
        <button className={props.className}>{props.children}</button>
    );
}

export default Button;