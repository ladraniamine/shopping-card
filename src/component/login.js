import React, {  useRef } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { checkuser } from '../redux/authSlice'

const Login = () => {
  const dispatch = useDispatch()
  
  const email = useRef()
  const password = useRef()

  const handleSubmit = ()=>{
    console.log("is logged in")
    dispatch(checkuser({email:email.current.value , password:password.current.value}))
  }
  return (
    
    <div className='row  ' style={{"height":"100vh" , "width":"100vw"}} >
        
        <form className='row m-auto' style={{"width":"100vw"}}>
            <h1 className='col-12 text-center'>please register</h1>
            <div className='col-11 m-auto text-center'>
                 <input ref={email} className='m-auto form-control' type="text" placeholder='enter your email' style={{"width":"300px"}}/>
            </div>
            <div className='col-11 m-auto text-center mt-2'>
                 <input ref={password} className='m-auto  form-control' type="password" autoComplete='current-password' placeholder='enter your password' style={{"width":"300px"}}  />
            </div>
            <div className='col-12  w-50 m-auto mt-2 row'>
              <NavLink to="/" className="col-5 m-auto btn btn-primary" onClick={handleSubmit}>
                login
              </NavLink>
              <NavLink to="/register" className="col-5 m-auto btn btn-secondary">
                  register
                </NavLink>
                
            </div>
        </form>
    </div>
  )
}

export default Login