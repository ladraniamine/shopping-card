import React, { useEffect, useMemo, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { newregister } from '../redux/loginslice'

const Register = () => {

    const dispatch = useDispatch()
 
    useMemo(()=>{
      console.log('re-evaluate register page')
    },[])
  
  const [fullname,setfullname] = useState('');
  const [email,setemail] = useState('');
  const [password,setpassword] = useState('');

    const handleclick = ()=>{

      dispatch(newregister({username: fullname , email,password}))
      
    }

  return (
    <div className='row' style={{"width":"100vw","height":"100vh"}}>
      <div className=' row m-auto '>
          <div className='col-12 text-center'>
            <input className='form-control m-auto' placeholder='full name' style={{"width":"200px"}} onChange={(e)=> setfullname(e.target.value)}/>
          </div>
          <div className='col-12 text-center mt-2'>
            <input className='form-control m-auto' placeholder='email' style={{"width":"200px"}} onChange={(e)=> setemail(e.target.value)}/>
          </div>
          <div className='col-12 text-center mt-2'>
            <input className='form-control m-auto' placeholder='password' style={{"width":"200px"}} onChange={(e)=> setpassword(e.target.value)}/>
          </div>
          <div className='col-12 text-center mt-2'>
            <NavLink to="/login">
            <button className='btn btn-primary' onClick={handleclick}>register</button>
            </NavLink>
          </div>
      </div>
    </div>
  )
}

export default Register