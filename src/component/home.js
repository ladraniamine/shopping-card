import React from 'react'
import Card from './card'
import Navbar from './Navbar'

const Home = () => {
  
  return (
    <div>
      {console.log("home render ")}
      <Navbar />     
      <div className='row  text-center mt-5 mx-0 '>
        <Card  />
      </div>
    </div>

  )
}

export default Home