
import Navbar from "./components/navbar"
import React, {  useContext, useState, useEffect } from "react"
import  IngProvider  from './contexts/IngredientsContext'
import {useAuth} from "./contexts/IngredientsContext"
import { AuthProvider } from "./contexts/AuthContext"
import PrivateRoute from "./privateRoute"


import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


import './styling/AppScss.scss';
import AddOrder from "./components/addOrder"
import UserOrders from "./components/userOrders"
import Signin from "./components/signin"
import Signup from "./components/signup"
import Logout from "./components/logout.js"

export function App() {  

  return (
<div style={{height:"100%"}} className="App">
  <Router>
    <AuthProvider ><IngProvider>
 <Navbar/>
      <Switch>
          <Route exact path="/">
           welcome to home page
          </Route>
          <Route path="/addorder">
          <AddOrder/>

          </Route>
        
          <PrivateRoute exact path="/signin" component={Signin} />
          <Route path="/orders">
            <UserOrders/>
          </Route>
          <Route exact path="/logout">
            <Logout/>
          </Route>
          <Route path="/signup">
            <Signup/>
          </Route>
        </Switch>
     
 </IngProvider></AuthProvider>
 
     
  </Router>
 
</div>
    
  );
}

export default App;
