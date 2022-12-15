import React, { useRef, useState } from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {
  const fullname = useRef()
  const email = useRef()
  const password = useRef()
  
  const [isfullname,setisfullname] = useState(false)
  const [isemail,setisemail] = useState(false)
  const [ispassword,setispassword] = useState(false)

  const handlesubmit = ()=>{
    const FullName = fullname.current.value
    const Email = email.current.value
    const Password = password.current.value

    if(FullName === "" && Email === "" && Password === ""){
      //fullname and email and password are empty
      setisfullname(true)
      setisemail(true)
      setispassword(true)
    }else if(FullName === "" && Email === "" && Password != ""){
        //fullname and email are empty
      setisfullname(true)
      setisemail(true)
      setispassword(false)
    }else if(FullName === "" && Email != "" && Password === ""){
      //fullname and password are empty
      setisfullname(true)
      setisemail(false)
      setispassword(true)
    }else if(FullName != "" && Email === "" && Password === ""){
      //email and password are empty
      setisfullname(false)
      setisemail(true)
      setispassword(true)
    }else if (FullName === "" && Email != "" && Password != ""){
      //fullname is empty
      setisfullname(true)
      setisemail(false)
      setispassword(false)
    }else if (FullName != "" && Email === "" && Password != ""){
      //email is empty
      setisfullname(false)
      setisemail(true)
      setispassword(false)
    }else if(FullName != "" && Email != "" && Password === ""){
      //password is empty
      setisfullname(false)
      setisemail(false)
      setispassword(true)
    }else{
      //registration successfuly
      setisfullname(false)
      setisemail(false)
      setispassword(false)
    }
}

  return (
    <div className='row' style={{"width":"100vw","height":"100vh"}}>
      <div className=' row m-auto '>
          <div className='col-12 text-center'>
            <input ref={fullname} className={isfullname?"form-control m-auto border-danger":"form-control m-auto"} placeholder='full name' style={{"width":"200px"}} />
            {isfullname?<div className='text-danger empty-message'>you should enter the fullname</div>:""}
          </div>
          <div className='col-12 text-center mt-2'>
            <input ref={email} className={isemail?"form-control m-auto border-danger":"form-control m-auto"} type="email" placeholder='email' style={{"width":"200px"}} />
           {isemail? <div className='text-danger empty-message'>you should enter the email</div>:""}
          </div>
          <div className='col-12 text-center mt-2'>
            <input ref={password} className={ispassword?"form-control m-auto border-danger":"form-control m-auto"} type="password" placeholder='password' style={{"width":"200px"}} />
            {ispassword?<div className='text-danger empty-message'>you should enter the password</div>:""}
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