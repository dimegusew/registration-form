import React, { Component } from 'react';
import { createStore, combineReducers } from 'redux';
import { connect } from 'react-redux';
import {Login, SignUp} from '../components/ControlPanel';
import { setName, setPhone, setEmail,onGetAsync } from '../actions/UserAction';
import ControlPanel from '../components/ControlPanel';
import './App.css';
import {changeTypeReg} from '../actions/registrationAction';




class App extends Component {
  render() {
    let {isLoginCorrect, isPasswordCorrect,user} = this.props.user;
    let { onGetAsync, changeTypeReg, isSignUp } = this.props;

    let info =isLoginCorrect==undefined ? ""
     : isLoginCorrect && isPasswordCorrect ?
      `Hello ${user.firstName} ${user.secondName}`
       : "username or password incorrect"
    return(
      <div className = "registration-box">
        {!isSignUp ?
          <Login
            onClick={onGetAsync}
            typeRegChange ={changeTypeReg}
            isSignUp = {isSignUp}
            info= {info }/>

          : <SignUp
            typeRegChange ={changeTypeReg}
            isSignUp = {isSignUp}
            onClick={(el)=>console.log(el)}
          />
        }
  </div>

    );
  }
}


const mapStateToProps = (state) => {
  return {
    user:state.userReducer.user,
    isSignUp: state.registrationReducer.isSignUp
  }
};

const mapDispatchToProps = (dispatch) => {
  return{
    onGetAsync :(user)=>{
      dispatch(onGetAsync(user))
    },
    changeTypeReg :(type)=> {
      dispatch(changeTypeReg(type))
  }
}
}
export default connect(mapStateToProps,mapDispatchToProps)(App);
