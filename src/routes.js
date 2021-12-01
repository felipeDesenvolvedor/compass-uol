import React from "react";
import { Route, BrowserRouter } from "react-router-dom";

// import Home from "./Home";
// import Sobre from "./Sobre";
// import Usuario from "./Usuario";
import Wrapper from "./components/Wrapper";
import Login from "./components/Login";

const Routes = () => {
   return(
       <BrowserRouter>
           <Route component={Login}  path="/login" exact />
           <Route component={Wrapper}  path="/home" />
       </BrowserRouter>
   )
}

export default Routes;