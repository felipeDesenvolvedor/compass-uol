import React from 'react';
import Wrapper from "./components/Wrapper";
import Form from "./components/Form";
import Button from "./components/Button";
import Input from "./components/Input";
import Table from './components/Table';

function App() {
  return (
    <Wrapper>
      <Form>
        <fieldset>
          <Input type='text' idInput={'form-search'} textLabel={'github search'}/>
        </fieldset> 

        <fieldset>
          <Button>starred</Button>  
          <Button>repos</Button>
        </fieldset>  
      </Form>

      <Table name={'Felipe'} avatarUrl={"https://avatars.githubusercontent.com/u/29111131?v=4"} repositories={'11'} perfil={'https://github.com/felipeDesenvolvedor'}/>
    </Wrapper>
  );
}

export default App;
