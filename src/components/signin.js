import React, { createContext, useContext, useState, useEffect, useRef } from "react";
import burger_logo from '../images/burger_logo.png';
  import { useAuth } from "../contexts/AuthContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
  Link
} from "react-router-dom";
import CircularUnderLoad from "../spinner"

const Signin=()=>{
  const [ spinner, setSpinner ] = useState(false)

  const emailRef = useRef()
  const passwordRef = useRef()
  const { login } = useAuth()
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const history = useHistory()
const{ currentUser} = useAuth()
  async function handleSubmit(e) {
    e.preventDefault()

    try {
      setError("")
      setLoading(true)
      console.log(emailRef.current.value)
     await  login(emailRef.current.value, passwordRef.current.value)
      history.push("/addorder")
    } catch {
      setError("Failed to log in")
    }

    setLoading(false)
  }
  useEffect(
    ()=>{
      document.getElementById('navigation-bar').style.display = "none";
    }
  )
  useEffect(() => {
    console.log('Hello World');
    return () => {
      document.getElementById('navigation-bar').style.display = "flex";

    }
}, [])
    return(
        <div className="signin">
    <div style={{position:"relative"}} className="signin_container">

    <h1 id='signin_title'>SIGNIN</h1>
    <img src={burger_logo} style={{height:"100px",left:"33%",textAlign:"center",display:"block",  marginLeft:"auto", marginRight:"auto"}}></img>
    <form  onSubmit={handleSubmit}>
    
    <div class="group">      
      <input ref={passwordRef} ref={emailRef} type="email" required></input>
      <span class="highlight"></span>
     
      <label>Adresse Email*</label>
    </div>
      
    <div class="group">      
      <input  ref={passwordRef} type="password" required></input>
      <span class="highlight"></span>
      <label>Passwrod</label>
    </div>
    <button  style={{padding:"0",height:"60px"}} onClick={()=>setSpinner(true)} className="button button_signin">{spinner? <CircularUnderLoad/>:<p >SIGN IN</p>}</button>
  </form>
     <p>Don't have an account yet?</p>
     <Link to="/signup"><button className="button button_to_signup">SIGN UP</button></Link>   
    </div>
  

        </div>
    )
}
export default Signin