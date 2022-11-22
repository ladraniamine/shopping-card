import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { checklogin } from '../redux/loginslice';

const Login = () => {
  const dispatch = useDispatch()
  const  info = useSelector(state=>state.login[1][0])
  const users = useSelector(state=>state.login[0])
  
  const [email,setemail] = useState("");
  const [password , setpassword] = useState("");
  const [isEmpty, setisEmty] = useState(true);

//to check if ur inputs are empty or not
  useEffect(()=>{ 
          if(email !== ""  && password !== ""){
              setisEmty(false);
          }else{
              setisEmty(true);
          }
  },[email,password])

//to check if the email and the password exict and login
const handlelogin = ()=>{
  dispatch(checklogin({email , password}))
// set the user data in localstorage 
let user = users.find(user =>  user.email === email)
let storuser = JSON.stringify(user)
localStorage.setItem("user",storuser)
}

  return (
    
    <div className='row  ' style={{"height":"100vh" , "width":"100vw"}} >
        
        <form className='row m-auto' style={{"width":"100vw"}}>
            <h1 className='col-12 text-center'>please register</h1>
            <div className='col-11 m-auto text-center'>
                 <input className='m-auto form-control' type="text" placeholder='enter your email' style={{"width":"300px"}} onChange={(e)=> setemail(e.target.value)}/>
            </div>
            <div className='col-11 m-auto text-center mt-2'>
                 <input className='m-auto  form-control' type="password" autoComplete='current-password' placeholder='enter your password' style={{"width":"300px"}} onChange={(e)=> setpassword(e.target.value)} />
            </div>
            <div className='col-12  w-50 m-auto mt-2 row'>
              <NavLink to={info.path} className={isEmpty?"col-5 m-auto btn btn-primary disabled":"col-5 m-auto btn btn-primary"} onClick={handlelogin}>
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