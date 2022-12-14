import React, {  useCallback, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { checkuser } from '../redux/authSlice'

const Login = () => {
  const dispatch = useDispatch()
  const { isloading , statusEmail , statusPassword} = useSelector(state=> state.auth)
  
  const email = useRef()
  const password = useRef()

  const handleSubmit =  useCallback((e)=>{
    e.preventDefault()
      dispatch(checkuser({email:email.current.value , 
                      password:password.current.value}))
                 
  })

  return (
    
    <div className='row  ' style={{"height":"100vh" , "width":"100vw"}} >
      {console.log("login render ")}
        
        <form className='row m-auto' style={{"width":"100vw"}}>
            <h1 className='col-12 text-center'>please register</h1>
            <div className='col-11 m-auto text-center'>
                 <input ref={email} className='m-auto form-control' type="text" placeholder='enter your email' style={{"width":"300px"}}/>
                 {statusEmail?<div className='text-danger'>{statusEmail}</div>:""}
            </div>
            <div className='col-11 m-auto text-center mt-2'>
                 <input ref={password} className='m-auto  form-control' type="password" autoComplete='current-password' placeholder='enter your password' style={{"width":"300px"}}  />
                 {statusPassword?<div className='text-danger'>{statusPassword}</div>:""}
            </div>
            <div className='col-12  w-50 m-auto mt-2 row'>
            
                 <button className='col-5 m-auto btn btn-primary ' onClick={handleSubmit}>login
                {isloading?<span class="spinner-border spinner-border-sm mx-3" role="status" aria-hidden="true"></span>:""}
                 </button>
              
              <NavLink to="/register" className="col-5 m-auto btn btn-secondary">
                  register
                </NavLink>
                
            </div>
        </form>
    </div>
  )
}

export default Login