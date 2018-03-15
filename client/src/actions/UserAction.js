export const setName = (name)=>{
  return{
    type:'ADD_NAME',
    payload: name,

  }
}

export const setPhone = (phone)=>{
  return{
    type:'ADD_PHONE',
    payload: phone,

  }
}

export const setEmail=(email)=>{
  return{
    type:'ADD_EMAIL',
    payload: email,

  }
}

export const onGetAsync = (user)=> dispatch =>{
    fetch('http://localhost:3000/json', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body:
      JSON.stringify({
        login: user.login,
        password: user.password,
  })
}).then((res)=>res.json()
  .then((result)=>dispatch({
    type: 'CONFIRM_USER',
    payload: result
  })))
}
