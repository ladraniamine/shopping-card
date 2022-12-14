import React, { useRef } from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
const fullname = useRef()
const email = useRef()
const password = useRef()

const handlesubmit = ()=>{
  const FullName = fullname.current.value
  const Email = email.current.value
  const Password = password.current.value
  if(FullName === "" && Email === "" && Password === ""){
    console.log("fullname and email and password are empty")
  }else if(FullName === "" && Email === "" && Password != ""){
      console.log("fullname and email are empty")
  }else if(FullName === "" && Email != "" && Password === ""){
    console.log("fullname and password are empty")
  }else if(FullName != "" && Email === "" && Password === ""){
    console.log("email and password are empty")
  }else if (FullName === "" && Email != "" && Password != ""){
    console.log("fullname is empty")
  }else if (FullName != "" && Email === "" && Password != ""){
    console.log("email is empty")
  }else if(FullName != "" && Email != "" && Password === ""){
    console.log("password is empty")
  }else{
    console.log("login")
  }
}

  return (
    <div className='row' style={{"width":"100vw","height":"100vh"}}>
      <div className=' row m-auto '>
          <div className='col-12 text-center'>
            <input ref={fullname} className='form-control m-auto' placeholder='full name' style={{"width":"200px"}} />
          </div>
          <div className='col-12 text-center mt-2'>
            <input ref={email} className='form-control m-auto' type="email" placeholder='email' style={{"width":"200px"}} />
          </div>
          <div className='col-12 text-center mt-2'>
            <input ref={password} className='form-control m-auto' type="password" placeholder='password' style={{"width":"200px"}} />
          </div>
          <div className='col-12 text-center mt-2'>
            <NavLink to="/register">
            <button className='btn btn-primary' onClick={handlesubmit} >register</button>
            </NavLink>
          </div>
      </div>
    </div>
  )
}

export default Register