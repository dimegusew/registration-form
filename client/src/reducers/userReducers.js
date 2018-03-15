import React, { Component } from 'react';

const initialState = {
  user:{},


  // inputType:"name",
  // name: 'stranger',
  // phone : "",
  // email : "",
  // interests: []
}

export const userReducer = (state=initialState,action)=>{
  switch(action.type){
    case 'CONFIRM_USER':
      state={
        ...state,
        user: action.payload
      }
      break;
  }
  return state;
}
