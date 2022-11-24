import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import ProductsComponent from './ProductsComponent'

const Navbar = () => {

 //check the locale storage first if there is anyting display it there in nothing check the next process
  let isUsername ;
  let getuser = localStorage.getItem("user")
  let toparuser = JSON.parse(getuser);
   
  if(toparuser){
    isUsername = true
  }else{
    isUsername = false
  }

  const {shoppingcard} = useSelector(state=> state.data)
  let newarr = shoppingcard.map((item)=>{
    return item.qnt
  })
   
   let sum = 0 ; 
  for (let index = 0; index < newarr.length; index++) {
    sum += newarr[index]
  }
  
  return (
    <nav class="navbar bg-dark text-light " style={{"position":"fixed","top":"0","width":"100%","zIndex":"11"}}>
    <div class="container-fluid">
      <div>
      <span class="navbar-brand mb-0 h1">{isUsername?toparuser.username:"annonyme"}</span>
      <NavLink to="/login">
        <button className='btn btn-warning'>{isUsername?"logout":"login"}</button>
      </NavLink>
      </div>

    <ul className='nav '>
        <li className='nav-item mx-5'>
            <a className='nav-link' style={{"color":"#07ff07","fontWeight":"bold"}}>{isUsername? toparuser.amount+"$":""}</a>
        </li>
        <li className='nav-item '>
            <a className='nav-link shopping-card dropdown'>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" class="bi bi-cart4 dropdown-toggle" viewBox="0 0 16 16" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l.5 2H5V5H3.14zM6 5v2h2V5H6zm3 0v2h2V5H9zm3 0v2h1.36l.5-2H12zm1.11 3H12v2h.61l.5-2zM11 8H9v2h2V8zM8 8H6v2h2V8zM5 8H3.89l.5 2H5V8zm0 5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z"/>
                </svg>
                
                <div className="dropdown-menu my-products text-light" style={!isUsername?{"position":"absolute","display":"none"}:{"position":"absolute"}}>
                    <div className='bg-dark coma-drop '></div>
                    <ProductsComponent/>
                </div>
                <span className='total-cards'>{sum}</span>
              
            </a>
        </li>
    </ul>

    </div>
  </nav>
  )
}

export default Navbar