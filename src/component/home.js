import React from 'react'
import { useSelector } from 'react-redux'
import Card from './card'
import Navbar from './Navbar'



const Home = () => {






console.log("render home page")
  return (
    <div>
      <Navbar/>
     
        
      <div className='row  text-center mt-5 mx-0 '>
        <Card />
         </div>
       
        
        
      </div>


      



    
  )
}

export default Home