import React, { Component } from 'react';

const initialState = {
  isSignUp:false
}

export const registrationReducer = (state=initialState,action)=>{
  switch(action.type){
    case 'CHANGE_TYPE_REGISTRATION':
      state={
        ...state,
        isSignUp: action.payload
      }
      break;
  }
  return state;
}
