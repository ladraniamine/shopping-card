import React from 'react'
import { NavLink } from 'react-router-dom'

const Register = () => {

  return (
    <div className='row' style={{"width":"100vw","height":"100vh"}}>
      <div className=' row m-auto '>
          <div className='col-12 text-center'>
            <input className='form-control m-auto' placeholder='full name' style={{"width":"200px"}} />
          </div>
          <div className='col-12 text-center mt-2'>
            <input className='form-control m-auto' placeholder='email' style={{"width":"200px"}} />
          </div>
          <div className='col-12 text-center mt-2'>
            <input className='form-control m-auto' placeholder='password' style={{"width":"200px"}} />
          </div>
          <div className='col-12 text-center mt-2'>
            <NavLink to="/login">
            <button className='btn btn-primary' >register</button>
            </NavLink>
          </div>
      </div>
    </div>
  )
}

export default Register