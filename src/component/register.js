import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { newRegistration } from '../redux/registerSlice'

const Register = () => {
  const dispatch = useDispatch()

  const {emailexist} = useSelector(state => state.register)
  const {usernameexist} = useSelector(state => state.register)
  
  const [emailexst,setemailexst] = useState(emailexist)
  const [usernameexst,seteusernameexst] = useState(usernameexist)

  useEffect(()=>{
    setemailexst(emailexist)
  },[emailexist])
  
  useEffect(()=>{
    seteusernameexst(usernameexist)
  },[usernameexist])

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
    //set a false value to emailexst and eusernameexst
    setemailexst(false)
    seteusernameexst(false)

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
      dispatch(newRegistration({fullname:FullName , email:Email , password:Password}))
    }
}

  return (
    <div className='row' style={{"width":"100vw","height":"100vh"}}>
      <div className=' row m-auto '>
          <div className='col-12 text-center'>
            <input ref={fullname} className={isfullname?"form-control m-auto border-danger":"form-control m-auto"} placeholder='full name' style={{"width":"200px"}} />
            {isfullname?<div className='text-danger empty-message'>you should enter the fullname</div>:""}
            {usernameexst?<div className='text-danger empty-message'>this username is existed</div>:""}
          </div>
          <div className='col-12 text-center mt-2'>
            <input ref={email} className={isemail?"form-control m-auto border-danger":"form-control m-auto"} type="email" placeholder='email' style={{"width":"200px"}} required/>
           {isemail? <div className='text-danger empty-message'>you should enter the email</div>:""}
           {emailexst?<div className='text-danger empty-message'>this email is existed</div>:""}
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