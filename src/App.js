import React from 'react';
import Wrapper from "./components/Wrapper";
import Form from "./components/Form";
import Table from './components/Table';

function App() {
  return (
    <Wrapper>

      <Form>
        <fieldset>
          <Input type='text' idInput={'form__search'} textLabel={'github search'} />
        </fieldset> 

        <fieldset>
          <Button className="form__button btn btn-primary">starred</Button>  
          <Button className="form__button btn btn-primary">repos</Button>
        </fieldset>  
      </Form>
    </Wrapper>
  );
}

export default App;