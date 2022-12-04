import React from 'react'
import { NavLink } from 'react-router-dom'

const Login = () => {
 
  return (
    
    <div className='row  ' style={{"height":"100vh" , "width":"100vw"}} >
        
        <form className='row m-auto' style={{"width":"100vw"}}>
            <h1 className='col-12 text-center'>please register</h1>
            <div className='col-11 m-auto text-center'>
                 <input className='m-auto form-control' type="text" placeholder='enter your email' style={{"width":"300px"}}/>
            </div>
            <div className='col-11 m-auto text-center mt-2'>
                 <input className='m-auto  form-control' type="password" autoComplete='current-password' placeholder='enter your password' style={{"width":"300px"}}  />
            </div>
            <div className='col-12  w-50 m-auto mt-2 row'>
              <NavLink to="/" className="col-5 m-auto btn btn-primary">
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