import React, { useState } from 'react';
import X from '../../assests/X.png'
import {useSignInWithEmailAndPassword,useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import GoogleButton from 'react-google-button';        
import { Link ,useNavigate} from "react-router-dom";
import './Login.css'
const Login = () => {
    const [email , setEmail] =useState('');
    const [password, setPassword] =useState('');
    const navigate = useNavigate();
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);
      const [signInWithGoogle, googleuser, googleloading, googleerror] = useSignInWithGoogle(auth);
      if(user || googleuser){
        navigate('/')
        console.log(user)
      }
      if(error){
        console.log(error.message)
      }
      if(loading){
        console.log(`Loading....`)
      }
    const handleSubmit = e =>{
        e.preventDefault();
        console.log(email,password)
        signInWithEmailAndPassword(email,password)
    }
    const handleGoogleSignin = () =>{
      signInWithGoogle();
    }
    return (
        <div>
  <div className="login-container">
  <div className="image-container">
<img className='image' src={X} alt="" />
  </div>
     <div className="form-container">
<div className='form-box'>
<h2 className='heading'>Happening Now</h2>
<h3 className="heading1"> What happening today</h3>
<form onSubmit={handleSubmit}>
    <input type="email" className='email' placeholder='Email address' onChange={(e)=>setEmail(e.target.value)}/>
    <input type="password" className='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
    <div className='btn-login'>
        <button type='sumbit' className='btn'>Login</button>
    </div>
</form>  </div> 
<hr/>
<div className="goggle-button"> 
         <GoogleButton style={{padding:' 0 50px',margin:'10px 20px'}}   className="g-btn" type="light" onClick={handleGoogleSignin}/>
      </div>
      <div style={{marginLeft:'20px'}}>
        Don't have account?
       <Link to='/signup' style={{textDecoration:'none',color:'skyblue',fontWeight:600,marginLeft:'5px'}}>Signup</Link>
      </div>    
     </div>
  </div>
    </div>
    )
}
export default Login;