import React from 'react';
import './ControlPanel.css'

export const Login = ({onClick,info,typeRegChange,isSignUp})=>{
  let login;
  let password;
  return(<div className='login-box'>
    <h1>Login </h1>
    <input placeholder = "login" ref={node => {
      login = node;
    }}/>

    <input placeholder = "password" type='password' ref={node => {
      password = node;
    }}/>

    <button className='login-button' onClick = {()=>{onClick(
      {login:login.value,password:password.value})
      login.value="";
      password.value=""
    }}>
      Login
    </button>
    <p> {info} </p>
    <div className='sign' onClick={()=>typeRegChange(isSignUp)}>or Sign up</div>
  </div>
)
}

export const SignUp = ({onClick,typeRegChange,isSignUp,info})=>{
  let login;
  let email;
  let password;
  let confirmedPassword;

  return( <div className='login-box'>
        <h1>SignUp</h1>
        <input placeholder = "email" ref={node => {
          email = node}}/>
        <input placeholder = "login" ref={node => {
          login = node}}/>
        <input placeholder = "password" ref={node => {
          password = node}}/>
        <input placeholder = "confirm password" ref={node => {
          confirmedPassword = node}}/>
        <button className='login-button signup'
          onClick={()=>onClick({
          login:login.value,email:email.value,confirmedPassword:confirmedPassword.value
        })} >Sign up</button>
        <p> {info} </p>
        <div className='sign' onClick={()=>typeRegChange(isSignUp)}>or Login</div>
      </div>)

}
