import React from 'react'
import Card from './card'
import Navbar from './Navbar'
import { useSelector } from 'react-redux'

const Home = () => {
  
  return (
    <div>
      <Navbar />     
      <div className='row  text-center mt-5 mx-0 '>
        <Card  />
      </div>
    </div>

  )
}

export default Home