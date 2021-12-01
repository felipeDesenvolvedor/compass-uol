import React from 'react';
import Wrapper from "./components/Wrapper";

function App() {

  if(document.cookie.indexOf("expires") > 0) {
    return (
      <>
      <a className="btn btn-primary" href="http://localhost/login">GIHUB</a>
      </>
    );
  }else{
    return (
        <Wrapper />
    );
  }
}

export default App;