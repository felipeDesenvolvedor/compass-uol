import React from 'react';
import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';

const eventHaldler = (event) => {
    event.preventDefault();
}

const Form = () => {
  return(
    <form onSubmit={eventHaldler}>
        <fieldset>
            <Input type='text' idInput={'form-search'} textLabel={'github search'} />
        </fieldset> 

        <fieldset>
            <Button>starred</Button>  
            <Button>repos</Button>
        </fieldset>  
    </form> 
  );     
}


export default Form;