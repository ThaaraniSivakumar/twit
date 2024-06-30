import React , { useState } from "react";
import X from '../../assests/X.png'
import {useCreateUserWithEmailAndPassword,useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import GoogleButton from 'react-google-button';        
import { Link ,useNavigate} from "react-router-dom";
import './Login.css'
import axios from "axios";
const Signup = () => {
            const [email , setEmail] =useState('');
            const [password, setPassword] =useState('');
            const [UserName , setUserName] =useState('');
            const [name, setName] =useState('');
            const navigate = useNavigate ();
            const [
                createUserWithEmailAndPassword,
                user,
                loading,
                error,
              ] = useCreateUserWithEmailAndPassword(auth);

              const [signInWithGoogle, googleUser, googleloading, googleerror] = useSignInWithGoogle(auth);
              
              if(user|| googleUser){
                console.log(user)
                navigate('/')
                console.log(googleUser)
              }
            const handleSubmit =async(e)=>{
                e.preventDefault();
                createUserWithEmailAndPassword(email,password);
                const user={
                  UserName:UserName,
                  name:name,
                  email:email,
                }
                try{
                const {data}=await axios.post('http://localhost:6001/register',user)
                console.log(data)
              } catch (error) {
                console.error('Error registering user:', error);
              }
            }
            const handleGoogleSignin = () =>{
              signInWithGoogle();
            }
            return (
               
          <div className="login-container signup-container">
          <div className="image-container" >
        <img className="image" src={X} alt="" />
          </div>

             <div className=" signup-form">
              <div  className="form-box"> 
        <h2 className="heading">Happening Now</h2>
        <h3 className="heading1"> Join twitter today</h3>
        <form onSubmit={handleSubmit}>
            <input type="text" className="display-name" placeholder="@UserName" onChange={(e)=>setUserName(e.target.value)} />
            <input type="text" className="display-name" placeholder="Enter Full Name"  onChange={(e)=>setName(e.target.value)}/>
            <input type="email" className='email' placeholder='Email address' onChange={(e)=>setEmail(e.target.value)}/>
            <input type="password" className='password' placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
            <div className='btn-login'>
                <button type='submit' className='btn'>SignUp</button>
            </div>
        </form>       
        <hr/>
      <div className="goggle-button"> 
         <GoogleButton style={{padding:' 0 50px',margin:'10px 20px'}}   className="g-btn" type="light" onClick={handleGoogleSignin}/>
      </div>
      <div style={{marginLeft:'20px'}}>
        Already have an account?
       <Link to='/login' style={{textDecoration:'none',color:'skyblue',fontWeight:600,marginLeft:'5px',}}>Login</Link>
      </div>
             </div>
          </div>
            </div>
            )
        }
    
export default Signup;